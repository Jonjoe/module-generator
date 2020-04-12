import path from "path";
import fs from "fs";

import constants from "../constants"

async function renameFiles(componentPath: string, componentName: string) {
  const match = RegExp(constants.PLACEHOLDER, "g");
  const files = fs.readdirSync(componentPath);

  files
    .filter(file => file.match(match))
    .forEach(file => {
      const filePath = path.join(componentPath, file);
      const newFilePath = path.join(
        componentPath,
        file.replace(match, componentName)
      );

      fs.renameSync(filePath, newFilePath);
    });
}

export default renameFiles;
