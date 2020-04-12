import cloneComponentRepo from "./modules/clone-component-repo";
import cleanComponentFolder from "./modules/clean-component-folder";
import replacePlaceholders from "./modules/replace-placeholders";
import renameFiles from "./modules/rename-files";

async function run(componentName: string, parentPath: string) {
  const componentPath = `${parentPath}/${componentName}`;

  await cloneComponentRepo(componentPath);
  await cleanComponentFolder(componentPath);
  await replacePlaceholders(componentPath, componentName);
  await renameFiles(componentPath, componentName);

  return null;
}

export default run;
