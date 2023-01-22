import path from "path";
import { promises as fs } from "fs";
import yaml from "js-yaml";

export type TimelineItem = {
  title: string;
  subtitle?: string;
  description?: string;
  from?: string;
  to?: string;
};

export type Language = {
  lang: string;
  level: string;
};

export type Project = {
  title: string;
  description: string;
  myRole: string;
  from: string;
  to: string;
  technologies: string[];
};

export type Resume = {
  fullname: string;
  label: string;
  description: string;
  education: TimelineItem[];
  experience: TimelineItem[];
  skills: string[];
  languages: Language[];
  projects: Project[];
};

export type Config = {
  resume: Resume;
};

export async function getConfig() {
  const configDirectory = path.join(process.cwd(), "../data");
  const fileContent = await fs.readFile(
    configDirectory + "/config.yaml",
    "utf8"
  );
  const data = yaml.load(fileContent);
  return data as Config;
}
