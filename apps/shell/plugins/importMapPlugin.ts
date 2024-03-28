import fs from "fs";
import path from "path";

export type Env = {
  VITE_ENV: "local" | "dev" | "prod" | undefined;
};
export default function importMapPlugin(options: { env: Env }) {
  const env = options.env.VITE_ENV ?? "prod";
  const importMapPath = `./import-maps/${env}.import-map.json`;

  // Read the import map from the filesystem
  let importMapString = "";
  try {
    const importMapFullPath = path.resolve(importMapPath); // Ensure the path is correctly resolved
    importMapString = fs.readFileSync(importMapFullPath, "utf8") ?? {};
  } catch (error) {
    console.error("Error reading import map file:", error);
    throw new Error("Failed to read import map file.");
  }

  return {
    name: "vite-plugin-importmap", // Required, will show up in warnings and errors
    enforce: "pre",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformIndexHtml(html: any) {
      // Inject the importmap script into the head of the document
      const importMapScriptTag = `<script type="importmap">${importMapString}</script>`;
      return html.replace(/<head>/, `<head>${importMapScriptTag}`);
    },
  } as const;
}
