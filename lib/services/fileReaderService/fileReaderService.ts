// Import all circuit files using Vite's glob import
const circuitModules = import.meta.glob("../../circuits/temp/*.js", {
  as: "raw",
});

export async function readCircuitFilesAsBase64(
  circuitPaths: string[]
): Promise<string[]> {
  const base64Contents: string[] = [];

  for (const circuitPath of circuitPaths) {
    // Extract the filename from the path
    const fileName = circuitPath.split("/").pop()!;
    const modulePath = `../../circuits/temp/${fileName}`;

    try {
      const content = await circuitModules[modulePath]();
      const base64Content = btoa(content);
      base64Contents.push(base64Content);
    } catch (error) {
      console.error(`Failed to read circuit file: ${circuitPath}`, error);
      throw new Error(`Failed to read circuit file: ${circuitPath}`);
    }
  }

  return base64Contents;
}
