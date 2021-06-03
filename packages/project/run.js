const sass = require("sass");
const path = require("path");
const { promisify } = require("util");

const renderSass = promisify(sass.render);

async function run() {
  const res = await renderSass({
    file: path.join(__dirname, "src", "index.scss"),
    includePaths: [
      "../../node_modules"
    ]
  });

  console.log("SUCCESS", res);
}

run();
