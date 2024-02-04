import fs from "fs";

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file writen sucessfully");
    }
  });
}
writeToFile("test-files/output1.txt", "Sample content.");
writeToFile(
  "test-files/nonexistent-folder/output.txt",
  "Content in a non-existent folder."
);
