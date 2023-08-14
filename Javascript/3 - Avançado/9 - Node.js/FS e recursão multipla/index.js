const fs = require("fs").promises;
const path = require("path");

async function readdir(rootdir) {
  rootdir = rootdir || path.resolve(__dirname);
  const files = await fs.readdir(rootdir);
  walk(files, rootdir);
}

async function walk(files, rootdir) {
  for (const file of files) {
    const fileFullPath = path.resolve(rootdir, file);
    const stats = await fs.stat(fileFullPath);

    //removendo a pasta node_modules
    if(/node_modules/g.test(fileFullPath)) continue

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }


    console.log(fileFullPath);
  }
}

readdir(
  "c:/Users/T-Gamer/Documents/GitHub/Javascript-and-Typescript/Javascript/3 - Avançado"
);
