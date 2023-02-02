import path from "path";
import * as fs from "fs";

const runAsync = async () => {
  const files = fs
    .readdirSync(path.join(process.cwd(), "/lib/prebuild"))
    .filter((file: string) => file.endsWith(".ts"))
    .sort();
  for (const file of files) {
    const { default: defaultFunc }: { default: () => void } = await import(
      `./prebuild/${file}`
    );
    try {
      console.log(`Running prebuild script '${file}'`);
      await defaultFunc();
    } catch (e) {
      console.error(
        `SCRIPT RUNNER: failed to execute prebuild script '${file}'`
      );
      console.error(e);
    }
  }
};

// Self-invocation async function
(async () => {
  await runAsync();
})().catch((err) => {
  console.error(err);
  throw err;
});

export {};
