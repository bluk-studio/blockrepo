import * as fs from 'fs';
import * as fse from 'fs-extra';

// Getting all files in dist directory
const files = fs.readdirSync('./dist/assets');

// Resolving entrypoint.json properties
const entrypoint = { js: undefined, css: undefined };

[{ 
  property: "js", 
  regex: /index.\w+.js/
},
{
  property: "css",
  regex: /index.\w+.css/
}].forEach((entry) => {
  const filename = files.find((filename) => entry.regex.test(filename));
  if (filename) entrypoint[entry.property] = filename;
});

// Creating entrypoint.json
fs.writeFileSync("./dist/assets/entrypoint.json", JSON.stringify(entrypoint));

// Copying all files
fse.emptyDirSync("../extension/assets/webview");
fse.copy("./dist/assets", "../extension/assets/webview", { recursive: true });