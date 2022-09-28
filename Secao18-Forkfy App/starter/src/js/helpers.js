import { WAIT_SECONDS } from './config';

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Taking to long to load!'));
    }, s * 1000);
  });
};

export const getJSON = async function (url, msg = `this recipe`) {
  const response = await Promise.race([fetch(url), timeout(WAIT_SECONDS)]);
  if (!response.ok) throw new Error(`Fail to load ${msg}.`);
  const data = await response.json();
  return data;
};
