#!/usr/bin/env node

import { createProject } from '../commands/createProject.js';
import { config } from 'dotenv';

config();
const args = process.argv.slice(2);
const isTest = args.includes('--test')||process.env.NODE_ENV === 'test';

createProject({ test: isTest });
