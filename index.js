exports.logger = function (str, beautifier) {
  if (!str) throw ReferenceError("logger argument is missing or undefined");
  if (typeof str !== "string") throw new TypeError("string must be provided");
  if (!beautifier) {
    const characterSet = require("./data-set/data.json");
    const chosenIndex = Math.floor((Math.random() * 10) % 4);
    beautifier = characterSet.characters[chosenIndex];
  }
  if (typeof beautifier !== "string") {
    throw new TypeError("Character must be of type string");
  }
  console.group(beautifier.repeat(10));
  console.log(`${new Date().toLocaleDateString()} ${str}`);
  console.log(beautifier.repeat(10));
  console.groupEnd();
};
