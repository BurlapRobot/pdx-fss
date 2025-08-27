import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export async function getCommonPageProps() {
  const navPath = path.join(process.cwd(), "content", "navbar.md");
  const navContent = fs.readFileSync(navPath, "utf8");
  const { data: navData } = matter(navContent);

  const alertBarPath = path.join(process.cwd(), "content", "alert-bar.md");
  const alertBarContent = fs.readFileSync(alertBarPath, "utf8");
  const { data: alertBarData } = matter(alertBarContent);

  return {
    navbar: navData,
    alertBar: alertBarData,
  };
}
