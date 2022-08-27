'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Questions:
// 1- Getting geolocalization;
// 2- Getting a map to plot;
// 3- Put the map on html;
// 4- Putting the localization on map;
// 5- How put a mark wherever we click on map;
// get the clicked coordenates
// 6- How customize popups
// 7- Render workout form whenever click on map
// 8- Clean form after submit;
// 9- Swap between running and cycling
// 10- Where store the data from form
// 11- OOP
// 12- List of workouts
// 13- How send to position when workout is clicked
// 14- How storage locally

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    this.description = `${this.type[0].toUpperCase() + this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

/////////////////////////////////////////////////////////////

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    // get user position
    this._getPosition();

    // get data from local storage
    this._getLocalStorage();

    // event handlers
    form.addEventListener('submit', this._newWorkOut.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  // pega a posicao do usuario
  _getPosition() {
    // testa se o browser suporta geolocalizacao
    if (navigator.geolocation) {
      // Getting the geolocation - retirna uma funcao para sucesso e outra para erro
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Couldn`t get your location');
        }
      );
    }
  }

  // carrega o mapa
  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    // carrega os marcadores no mapa com objetos vindos do array #workouts
    // precisa ser passado aqui pois necessita o carregamento do mapa primeiro
    if (this.#workouts.length > 0) {
      this.#workouts.forEach(wrk => this._renderWorkoutMarker(wrk));
    }
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkOut(e) {
    e.preventDefault();

    // data validation
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp)); // retorna true se todos forem finite ou false se um deles nao for

    const positiveInputs = (...inputs) =>
      inputs.every(inp => Math.sign(inp) === 1);

    // get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // validate data
      if (
        !validInputs(duration, distance, cadence) ||
        !positiveInputs(duration, distance, cadence)
      )
        return alert('Fields must be positive numbers.');

      workout = new Running([lat, lng], distance, duration, cadence);
      // add new object to workout array
      this.#workouts.push(workout);
    }

    // if cycling create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // validate data
      if (
        !validInputs(duration, distance, elevation) ||
        !positiveInputs(duration, distance)
      )
        return alert('Fields must be positive numbers.');

      workout = new Cycling([lat, lng], distance, duration, elevation);
      // add new object to workout array
      this.#workouts.push(workout);
    }

    // render workout on map as a marker
    this._renderWorkoutMarker(workout);

    // render workout on the list
    this._renderWorkoutList(workout);

    // hide form and clear input fields
    this._hideFormClearFields();

    // save on local storage
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}  ${workout.description}`
      )
      .openPopup();
  }

  // mostra a lista de workouts no sidebar
  _renderWorkoutList(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">${'⏱'}</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">${'⚡️'}</span>
        <span class="workout__value">${
          workout.type === 'running'
            ? workout.pace.toFixed(1)
            : workout.speed.toFixed(1)
        }</span>
        <span class="workout__unit">${
          workout.type === 'running' ? 'min/km' : 'km/h'
        }</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🦶🏼' : '⛰'
        }</span>
        <span class="workout__value">${
          workout.type === 'running' ? workout.cadence : workout.elevationGain
        }</span>
        <span class="workout__unit">${
          workout.type === 'running' ? 'spm' : 'm'
        }</span>
      </div>
    </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _hideFormClearFields() {
    // clear fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // hide form
    form.classList.add('hidden');
  }

  // mover o mapa quando clica no workout
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;

    // achar no array de workouts aquele que corresponde
    const workout = this.#workouts.find(wrk => wrk.id === workoutEl.dataset.id);

    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  // method to save in local storage
  _setLocalStorage() {
    // local storage is an API that browser provides for us
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    // works as a key value where value must be a string
  }

  // method to get workouts from array and render the list
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(wrk => {
      this._renderWorkoutList(wrk);
    });
  }
}

const app = new App();
