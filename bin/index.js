#!/usr/bin/env node

import { createProject } from '../commands/createProject.js';
import { config } from 'dotenv';
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

config();
const args = process.argv.slice(2);
const isTest = args.includes('--test')||process.env.NODE_ENV === 'test';

createProject({ test: isTest });

async function main() {
  // Your existing prompts here, then add this:
  const answers = await inquirer.prompt([
    // ...other existing questions,
    {
      type: 'confirm',
      name: 'includeESLint',
      message: 'Would you like to include ESLint for code linting?',
      default: true
    }
  ]);

  // existing scaffold code...

  // Assuming the project path is stored in `projectPath` variable:
  if (answers.includeESLint) {
    const src = path.join(__dirname, '../templates/.eslintrc.json');
    const dest = path.join(projectPath, '.eslintrc.json');
    fs.copyFileSync(src, dest);
    console.log('Added ESLint configuration file.');
  }

  // rest of your code...
}
