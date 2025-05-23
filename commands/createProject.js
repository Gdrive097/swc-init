import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { copyTemplate } from '../utils/fileUtils.js';
import { availablePackages } from '../utils/packageUtils.js';
import chalk from 'chalk';
import boxen from 'boxen';
import clipboard from 'clipboardy';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


export async function createProject({ test = false }) {
    const { folderName } = await inquirer.prompt([
  {
    type: 'input',
    name: 'folderName',
    message: 'Enter the project folder name (or press enter to keep "backend"):',
    default: 'backend'
  }
]);

    // const folderName = process.argv[2] || 'backend';
    const rootDir = test
    ?path.join(process.cwd(), 'test-backend')
    : path.join(process.cwd(), folderName);

    if (fs.existsSync(rootDir) && !test) {
    console.log("\n")

    console.log(chalk.red.bold(`Folder "${folderName}" already exists. Choose a different name or remove the existing folder.`));
    console.log("\n")

    process.exit(1);
  }

  if (test && fs.existsSync(rootDir)) {
    console.log(chalk.yellow.bold('⚠️  Warning: Test mode is active'));
    console.log(`>> Removing existing test folder: ${rootDir}`);
    fs.rmSync(rootDir, { recursive: true });
  }

  fs.mkdirSync(rootDir, { recursive: true });
  process.chdir(rootDir);
    console.log(chalk.green.bold(`>> Creating project folder: ${folderName}`));
    console.log("\n")


  fs.mkdirSync('controllers', { recursive: true });
  fs.mkdirSync('models', { recursive: true });
  fs.mkdirSync('routes', { recursive: true });

  copyTemplate('server.js', 'server.js');
  copyTemplate('controller.js', 'controllers/sampleController.js');
  copyTemplate('model.js', 'models/sampleModel.js');
  copyTemplate('route.js', 'routes/sampleRoute.js');
  copyTemplate('.gitignore', '.gitignore');

  fs.writeFileSync('swc-init.config.json', JSON.stringify({
  "createdBy": "swc-init",
  "version": "1.0.0",
  "createdAt": new Date().toISOString(),

}, null, 2));
  fs.writeFileSync('package.json', JSON.stringify({
    name: folderName,
    version: '1.0.0',
    main: 'server.js',
    scripts: {
      start: 'nodemon server.js'
    }
  }, null, 2));

  // Ask user which packages to install
  const answers = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'packages',
      message: '>> Select packages to install:',
      choices: availablePackages
    }
  ]);

  const selectedPackages = answers.packages;

  if (selectedPackages.length > 0&&!test) {
    console.log(chalk.green.bold('>> Installing selected packages:'));
    selectedPackages.forEach(pkg => console.log(`  - ${pkg}`));
    execSync(`npm install ${selectedPackages.join(' ')}`, { stdio: 'inherit' });
  } else {
    if (!test) {
      console.log(chalk.yellow.bold('>> No packages selected. Skipping npm install.'));
    }
    else {
      console.log(chalk.red.bold('>> No packages installed. Skipping npm install in test mode.'));
    }
  }
 console.log(chalk.green.bold('>> Packages installed successfully!'));
    console.log(chalk.green.bold('>> Project structure created successfully!'));
    //create a new line
const copyCommands = `cd ${folderName}\nnpm start`;
clipboard.writeSync(copyCommands);
    const message = `
${chalk.bold('Happy hacking!')}

${chalk.blue('To get started:')}
  ${chalk.green(`>> cd ${folderName}`)}
  ${chalk.green('>> npm start')}
${chalk.cyan('\n📋 Commands copied to clipboard! Just paste (Ctrl+V) to start.')}
`;

console.log(
  boxen(message, {
    padding: { top: 0, bottom: 0, left: 6, right: 6 },
     margin: 1,
    borderColor: 'green',
    borderStyle: 'round'
  })
);


 if (test) {
    console.log("\n")
    
    console.log(chalk.yellow.bold(`>> Running in test mode. Project initialized at: ${rootDir}`));
    console.log("\n")

    }
}
   
    