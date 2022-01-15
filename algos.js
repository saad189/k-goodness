const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

let T = 0;
let list = [""];
let K_list = [""];

let fileNamesWritten = [
  "ts1_output.txt",
  "ts2_output.txt",
  "ts1_sample_output.txt",
];

function input() {
  for (let i = 0; i < Number(T); ++i) {
    let X = prompt();
    [_, b] = X.split(" ");
    K_list.push(b);
    list.push(prompt());
  }
}

function readInputs(fileName) {
  try {
    let data = fs.readFileSync(fileName, { encoding: "utf-8", flag: "r" });
    data = data.split("\n");

    T = data[0];
    data.splice(0, 1);
    for (let i = 0; i < Number(T); ++i) {
      [_, b] = data[0].split(" ");
      K_list.push(b);
      list.push(data[1]);
      data.splice(0, 2);
    }
    console.log("DATA:", K_list, list);
  } catch (error) {
    console.log(error);
  }
}

function calculateK(word) {
  let [N, K] = [String(word).length, 0];
  word = " " + word;
  for (let i = 1; i <= N / 2; ++i) {
    K += word[i] !== word[N - i + 1];
  }
  return K;
}

function calculateNDisplay() {
  let cases = [];
  for (let i = 1; i <= Number(T); ++i) {
    const str = `Case ${i}: ${Math.abs(K_list[i] - calculateK(list[i]))}`;
    cases.push(str);
    console.log(str);
  }
  return cases;
}

// input();

function fun() {
  fileNames = [
    "test_set_1/ts1_input.txt",
    "test_set_2/ts2_input.txt",
    "sample_test_set_1/sample_ts1_input.txt",
  ];
  fileNames.forEach((element, i) => {
    T = 0;
    list = [""];
    K_list = [""];
    readInputs(element);
    WriteToFile(fileNamesWritten[i], calculateNDisplay());
  });
}
fun();

// Add Code to Write to File
// Add Code to Compare Files

function WriteToFile(fileName, data) {
  fs.writeFileSync(fileName, JSON.stringify(data));
}
function CompareFiles() {
  fileNamesOriginal = [
    "../test_set_1/ts1_output.txt",
    "../test_set_2/ts2_output.txt",
    "../sample_test_set_1/sample_ts1_output.txt",
  ];
}
