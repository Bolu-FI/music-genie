export function getAverageRGB(src: string) {
  return new Promise((resolve) => {
    let defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
      canvas = document.createElement("canvas"),
      context = canvas.getContext && canvas.getContext("2d");

    if (!context) {
      return defaultRGB;
    }

    const imgEl = new Image();

    imgEl.setAttribute("crossOrigin", "");
    imgEl.src = src;

    imgEl.onload = () => {
      context!.imageSmoothingEnabled = true;
      context!.drawImage(imgEl, 0, 0, 1, 1);

      const i = context!.getImageData(0, 0, 1, 1).data;

      resolve(
        "#" +
          ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1),
      );
    };
  });
}
