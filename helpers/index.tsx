export function getAverageRGB(src: string) {
  return new Promise((resolve) => {
    let blockSize = 30, // only visit every 30 pixels
      defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
      canvas = document.createElement("canvas"),
      context = canvas.getContext && canvas.getContext("2d"),
      data,
      width,
      height,
      i = -4,
      length,
      rgb = { r: 0, g: 0, b: 0 },
      count = 0;

    const imgEl = new Image();

    imgEl.setAttribute("crossOrigin", "");
    imgEl.src = src;

    imgEl.onload = (ev: any) => {
      height = canvas.height =
        ev.target.naturalHeight || ev.target.offsetHeight || ev.target.height;
      width = canvas.width =
        ev.target.naturalWidth || ev.target.offsetWidth || ev.target.width;

      if (!context) {
        return resolve(
          `rgb(${defaultRGB.r}, ${defaultRGB.g}, ${defaultRGB.b})`,
        );
      }

      context.drawImage(imgEl, 0, 0);

      try {
        data = context.getImageData(0, 0, width, height);
      } catch (e) {
        /* security error, img on diff domain */
        return resolve(
          `rgb(${defaultRGB.r}, ${defaultRGB.g}, ${defaultRGB.b})`,
        );
      }

      length = data.data.length;

      while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
      }

      // ~~ used to floor values
      rgb.r = ~~(rgb.r / count);
      rgb.g = ~~(rgb.g / count);
      rgb.b = ~~(rgb.b / count);

      resolve(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
    };
  });
}

export function loadFromStorage(key: string) {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveToStorage(key: string, state: any) {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(key, serializedState);
  } catch (err) {}
}

export const isBrowser = typeof window !== "undefined";

export const formatMsTime = (msTime: number) => {
  const minutes = Math.floor(msTime / 60000);
  const seconds = Math.floor((msTime % 60000) / 1000);

  return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
};
