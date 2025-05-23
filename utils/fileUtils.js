import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function copyTemplate(templateName, destination) {
  const templatePath = path.join(__dirname, '../templates', templateName);
  const content = fs.readFileSync(templatePath, 'utf-8');
  fs.writeFileSync(destination, content);
}
