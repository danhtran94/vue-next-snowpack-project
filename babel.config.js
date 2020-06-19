module.exports = {
  presets: [
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: ["babel-plugin-macros"],
};
