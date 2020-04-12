import replace from "replace-in-file";

import constants from "../constants";

async function replacePlaceholders(
  componentPath: string,
  componentName: string
) {
  const options = {
    files: [componentPath + "/*"],
    from: /ExampleComponent/g,
    to: componentName
  };

  const result = await replace(options);

  return result;
}

export default replacePlaceholders;
