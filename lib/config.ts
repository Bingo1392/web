import path from "path";
import { promises as fs } from "fs";
import yaml from "js-yaml";
import dayjs from "dayjs";

export type TimelineItem = {
  from?: string;
  to?: string;
  title: string;
  subtitle?: string;
  description?: string;
};

export type Language = {
  lang: string;
  level: string;
};

export type Project = {
  id: number;
  systemType: string;
  name: string;
  projectDescription: string;
  positionDescription: string;
  role: string;
  from: string;
  to?: string;
  technologies: string[];
  thumbnail: string;
  web?: string;
};

export type Resume = {
  fullName: string;
  title: string;
  description: string;
  skills: string[];
  languages: Language[];
  education: TimelineItem[];
  workExperience: TimelineItem[];
  projects: Project[];
};

export type FileGeneration = {
  template: string;
  dataReference: string;
  fileName: string;
};

export type Config = {
  resume: Resume;
  generateFiles: FileGeneration[];
} & { [p: string]: any };

export async function getConfig(): Promise<Config> {
  const configDirectory = path.join(process.cwd(), "./data");
  const fileContent = await fs.readFile(
    configDirectory + "/config.yaml",
    "utf8"
  );
  const data = yaml.load(fileContent);
  return data as Config;
}

export function dateFormatter(date: any) {
  return dayjs(date).format("MM/YYYY");
}

export function transformDateValuesInNestedObject(obj: { [p: string]: any }) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Date) {
      obj[key] = dateFormatter(obj[key]);
    }
    if (typeof obj[key] === "object" && obj[key] !== null) {
      transformDateValuesInNestedObject(obj[key]);
    }
  });
}
