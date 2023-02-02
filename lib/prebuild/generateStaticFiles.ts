import {
  FileGeneration,
  getConfig,
  transformDateValuesInNestedObject,
} from "../config";
import { populateWordTemplate } from "../template";

export default async function execute() {
  const config = await getConfig();
  transformDateValuesInNestedObject(config);
  config.generateFiles.forEach((fileConfig: FileGeneration) => {
    populateWordTemplate(
      fileConfig.template,
      config[fileConfig.dataReference],
      fileConfig.fileName
    );
  });
}
