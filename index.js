const ReactBenchmark = require("react-benchmark");
const fs = require("fs");
const reactBenchmark = new ReactBenchmark();

reactBenchmark.on("progress", (currentStats) => {
  // console.log(currentStats);
});

const tests = [
  {
    label: "inline style",
    file: "InlineStyle",
  },
  {
    label: "styled component",
    file: "StyledComponent",
  },
  {
    label: "styled component mui",
    file: "StyledComponentMui",
  },
  {
    label: "sx props",
    file: "Sx",
  },
  {
    label: "CSS pigment",
    file: "CssPigment",
  },
];

const main = async () => {
  for (const test of tests) {
    // console.log("running", `./versions/${test.file}.jsx`);
    const result = await reactBenchmark.run(`./versions/${test.file}.tsx`, {
      devtools: false,
      cpuThrottle: 6,
      debug: false,
    });
    const mean = result.stats.mean;
    console.log(test.label, mean);
  }
  // console.log(JSON.stringify(result, null, 2));
  // fs.writeFileSync("./result.json", JSON.stringify(result, null, 2));
};

main();
