import * as  util from "util";

const rimraf = util.promisify(require("rimraf"));

async function cleanComponentFolder(componentPath: string) {
  await rimraf(`${componentPath}/.git`);
  await rimraf(`${componentPath}/readme.md`);
}

export default cleanComponentFolder;
