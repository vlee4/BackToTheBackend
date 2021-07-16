const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    //waits for promise from getText to be resolved before console.logging
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    //If first wasn't awaited, then the log would print out a pending promise
    console.log(first, second);

    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is Amazing!: ${first} ${second}`,
      { flag: "a" }
    );
  } catch (err) {
    console.log(err);
  }
};

start();
