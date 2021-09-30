import { readdir, writeFile } from 'fs/promises';
import { resolve } from 'path';

(async () => {
  const files = await readdir('public/assets/images')
  const fileList = files.map(file => `"${file}"`).join(' | ')
  console.log(fileList);
  const writecode = `export type Path = ${fileList}\nexport const getImagePath = (path: Path, root?: string) => \`\${root ?? '/assets/images/'}\${path}\`\n`
  await writeFile(resolve(__dirname, '../src/components/utils/imagePath.ts'), writecode)
})();
