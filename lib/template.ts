import path from "path";
import { promises as fs, existsSync, mkdir } from "fs";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

export async function populateWordTemplate(
  templateFile: string,
  data: { [p: string]: any },
  outputFile: string
) {
  const templatesDirectory = path.join(process.cwd(), "./templates");
  const outputDirectory = path.join(process.cwd(), "./public/generated");
  // check if directory exists
  if (!existsSync(outputDirectory)) {
    await mkdir(outputDirectory, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log("Directory created successfully!");
    });
  }
  const fileContent = await fs.readFile(
    templatesDirectory + "/" + templateFile,
    "binary"
  );
  const zip = new PizZip(fileContent);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    parser: function (tag) {
      return {
        get: function (scope, context) {
          if (tag === "separatorComma") {
            const scopePathIndex = context.num - 1;
            if (
              context.scopePathItem[scopePathIndex] ===
              context.scopePathLength[scopePathIndex] - 1
            ) {
              return "";
            } else {
              return ", ";
            }
          } else if (tag === "separatorBullet") {
            const scopePathIndex = context.num - 1;
            if (
              context.scopePathItem[scopePathIndex] ===
              context.scopePathLength[scopePathIndex] - 1
            ) {
              return "";
            } else {
              return " • ";
            }
          } else if (tag === ".even") {
          } else if (tag === ".odd") {
          } else if (tag === ".") {
            return scope;
          } else {
            return scope[tag];
          }
        },
      };
    },
  });
  doc.render(data);
  const buf = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });
  await fs.writeFile(outputDirectory + "/" + outputFile, buf);
}
