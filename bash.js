const done = (output) => {
  console.log(output);
  process.stdout.write('done')
}
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
const cmd = data.toString().trim();
if (cmd === "pwd") {
  const pwd = require("./pwd");
  pwd();
}
if (cmd === "ls") {
  const ls = require("./ls");
  ls();
}
if (cmd.includes("cat")) {
  const cat = require("./cat");
  const data = cmd.split(" ");
  cat(data[1]);
}
if (cmd.includes("curl")) {
  const curl = require("./curl");
  const webPage = cmd.split(" ");
  curl(webPage[1]);
}
else {
  process.stdout.write("You typed: " + cmd);
}
process.stdout.write("\nprompt > ");
});
