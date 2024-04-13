// functions.js
export const loadFonts = async (fonts) => {
  await Promise.all(
    Object.keys(fonts).map(async (key) => {
      const font = new FontFace(key, `url(${fonts[key]})`);
      await font.load();
      document.fonts.add(font);
    })
  );
};
