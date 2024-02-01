import fs from "fs";
const file1 = "./data/file1.txt";
const emptyFile = "./data/empty-file.txt";
const noExist = "./data/noExist.txt";

function readFileContent(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Content:");
      console.log(data);
    }
  });
}

readFileContent(file1);
readFileContent(emptyFile);
readFileContent(noExist)
