// Type definition for Heading structure
export type Heading = {
  _key: string;
  text: string;
  style: string;
  subheadings: Heading[];
  children: (string | { text: string })[];
};

// Utility function to get value from an object using a path
const get = (object: Record<string, any>, path: string[]): any =>
  path.reduce((prev, curr) => prev[curr], object);

// Utility function to generate object path for subheadings
const getObjectPath = (paths: number[]): string[] =>
  paths.length === 0
    ? paths.map((path) => String(path))
    : ["subheadings"].concat(paths.join(".subheadings.").split("."));

// Recursive filter function to traverse and find matching nodes
const filter = <T>(ast: T[], match: (node: T) => boolean): T[] =>
  ast?.reduce((acc: T[], node: T) => {
    if (match(node)) acc.push(node);
    if ((node as any).children) acc.push(...filter((node as any).children, match)); // Type assertion for children
    return acc;
  }, []);

// Function to find headings (e.g., h1, h2, h3) in the AST
const findHeadings = (ast: any[]): Heading[] => filter(ast, (node) => /h\d/.test(node.style));

// Function to parse the outline from the AST
export const parseOutline = (ast: any[]): Heading[] => {
  const outline: { subheadings: Heading[] } = { subheadings: [] };
  const headings = findHeadings(ast); // Assuming findHeadings is typed elsewhere
  const path: number[] = [];
  let lastLevel = 0;

  headings?.forEach((heading: Heading) => {
    const level = Number(heading.style.slice(1)); // Get the level of the heading (h1, h2, h3)
    heading.subheadings = []; // Initialize subheadings for this heading

    // Adjust the path based on heading level
    if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop();
    else if (level === lastLevel) path.pop();

    // Add heading to the corresponding level in the outline
    const prop = get(outline, getObjectPath(path));
    prop.subheadings.push(heading);
    path.push(prop.subheadings.length - 1); // Add the index of the current heading to the path
    lastLevel = level; // Update the last level
  });

  return outline.subheadings; // Return the top-level subheadings
};
