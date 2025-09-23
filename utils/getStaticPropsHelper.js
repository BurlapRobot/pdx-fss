import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getStaticPropsData(filename) {
  const filepath = path.join(process.cwd(), "content", filename);
  const fileContent = fs.readFileSync(filepath, "utf8");
  const { data } = matter(fileContent);
  return data;
}
