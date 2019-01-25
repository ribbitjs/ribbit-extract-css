const purifyCSS = require("purify-css");
const fs = require("fs");
const path = require("path");

const internalCss = reactDom => {
  fs.readFile(
    path.resolve(__dirname, "../../dist/styles.min.css"),
    "utf8",
    (err, data) => {
      if (err) throw err;
      const criticalCSS = purifyCSS(reactDom, data);
      return criticalCSS;
    }
  );
};

module.exports = internalCss;
