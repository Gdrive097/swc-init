# 🧩 swc-init

[![npm version](https://badge.fury.io/js/swc-init.svg)](https://badge.fury.io/js/swc-init)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2025-blueviolet.svg)](https://hacktoberfest.digitalocean.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![SWC IITG](https://img.shields.io/badge/SWC-IITG-orange.svg)](https://swc.iitg.ac.in/)

A lightweight Node.js CLI tool to instantly scaffold a production-ready backend following the MVC pattern with Express, MongoDB (Mongoose), and JWT authentication.

**This project is part of Hacktoberfest 2025 🎃 by SWC IITG — contributors are welcome to help expand templates, add TypeScript support, improve CLI features, and make the developer experience smoother!**

## 🚀 What It Does

The CLI lets you generate a complete backend structure in one command:

```bash
npx swc-init my-app --orm mongoose --auth jwt
```

It automatically creates:
- ✅ Organized folder structure (MVC pattern)
- ✅ Configured Express + Mongoose setup
- ✅ Sample User CRUD module
- ✅ JWT-based auth boilerplate
- ✅ `.env.example`, Docker setup, and basic README
- 🔜 Optional TypeScript support (coming soon!)

You can then run:
```bash
cd my-app
npm install
npm run dev
```

and instantly have a working backend running on `localhost:3000`.

## 🏗️ Generated Project Structure

```
my-app/
├─ src/
│  ├─ config/           # Database and app configuration
│  ├─ controllers/      # Route controllers (business logic)
│  ├─ services/         # Business logic services
│  ├─ models/           # Database models (Mongoose schemas)
│  ├─ routes/           # Express route definitions
│  ├─ middleware/       # Custom middleware (auth, validation, etc.)
│  ├─ utils/            # Utility functions and helpers
│  ├─ app.js            # Express app configuration
│  └─ server.js         # Server entry point
├─ .env.example         # Environment variables template
├─ Dockerfile           # Docker configuration
├─ package.json         # Project dependencies and scripts
└─ README.md            # Generated project documentation
```

## 🚀 Quick Start

### Using npx (Recommended)
```bash
# Create new backend with default settings
npx swc-init my-app

# Create with specific options
npx swc-init my-app --orm mongoose --auth jwt

# Start development server
cd my-app
npm install
npm run dev
```

### Installation
```bash
npm install -g swc-init
swc-init my-app --orm mongoose --auth jwt
```

## ⚙️ Development & Testing (for Contributors)

If you're working on improving the CLI itself:

```bash
# Clone and setup
git clone https://github.com/swciitg/swc-init.git
cd swc-init
npm install
npm link   # makes the 'swc-init' command available globally
```

Test the CLI:
```bash
swc-init demo-app --orm mongoose --auth jwt
cd demo-app
npm install
npm run dev
```

You should see:
```
Server running on port 3000
Connected to MongoDB
```

Visit `http://localhost:3000/health` to verify:
```json
{ "ok": true, "project": "demo-app" }
```

## 🧠 Project Vision

The goal is to provide developers a modular backend starter that can be extended easily.

### Current Features
- ✅ JavaScript + Mongoose template
- ✅ Express.js setup with MVC pattern
- ✅ JWT authentication boilerplate
- ✅ User CRUD operations
- ✅ Docker configuration
- ✅ Environment configuration

### Roadmap
- 🔜 **TypeScript support**
- 🔜 **Sequelize (PostgreSQL) support**
- 🔜 **Authentication variants** (JWT, OAuth, Passport.js)
- 🔜 **Docker & CI/CD setup templates**
- 🔜 **REST + GraphQL starter options**
- 🔜 **Testing setup** (Jest, Supertest)
- 🔜 **API documentation** (Swagger/OpenAPI)

## 🪄 Command Options

```bash
# Basic usage
npx swc-init <project-name>

# With TypeScript (coming soon)
npx swc-init my-app --ts

# With different ORM (coming soon)
npx swc-init my-app --orm sequelize

# With different auth strategy (coming soon)
npx swc-init my-app --auth oauth

# Skip git initialization
npx swc-init my-app --no-git

# Use yarn instead of npm
npx swc-init my-app --use-yarn
```

## 🧑‍💻 Contributing

Contributions are welcome — especially from **Hacktoberfest participants**! 🎃

### SWC IITG Hacktoberfest 2025

This project is maintained by the **Students' Web Committee (SWC), IIT Guwahati** as part of Hacktoberfest 2025.

🏆 **Check your contributions on the [SWC IITG Hacktoberfest Leaderboard](https://swc.iitg.ac.in/hacktoberfest/leaderboard)**

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Implement and test locally** using `npm link`
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Submit a pull request**

### Good First Issues

Looking for contribution ideas? Check issues labeled with:
- ![good first issue](https://img.shields.io/badge/-good%20first%20issue-7057ff)
- ![help wanted](https://img.shields.io/badge/-help%20wanted-008672)
- ![enhancement](https://img.shields.io/badge/-enhancement-a2eeef)

### Development Guidelines

- Keep code minimal and readable
- No secrets or real credentials in code
- Include `.env.example` for all environment variables
- Write tests for new features
- Update documentation for new options
- Follow existing code style and patterns

## 📦 API Reference

### Generated Project Scripts

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest",
    "lint": "eslint src/",
    "docker:build": "docker build -t my-app .",
    "docker:run": "docker run -p 3000:3000 my-app"
  }
}
```

### Environment Variables

```bash
# Database
MONGODB_URI=mongodb://localhost:27017/my-app
DB_NAME=my-app

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# Server
PORT=3000
NODE_ENV=development
```

## 🤝 Community

- 💬 **Discussions**: Share ideas and ask questions
- 🐛 **Issues**: Report bugs and request features
- 🛠️ **Pull Requests**: Contribute code improvements
- 🌟 **Star the repo**: Show your support!
- 🏆 **Leaderboard**: Track your [Hacktoberfest contributions](https://swc.iitg.ac.in/hacktoberfest/leaderboard)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 💜 Hacktoberfest 2025 with SWC IITG

**If you're new to open source — welcome!** 🎉

This repository is maintained by the **Students' Web Committee (SWC), IIT Guwahati** and is a great place to make your first pull request. Here's how to get started:

1. Look for issues tagged ![good first issue](https://img.shields.io/badge/-good%20first%20issue-7057ff)
2. Read our [Contributing Guidelines](#-contributing)
3. Fork the repo and create your feature branch
4. Make your changes and test them locally
5. Submit a PR with a clear description
6. Track your progress on the [SWC IITG Leaderboard](https://swc.iitg.ac.in/hacktoberfest/leaderboard)

Every contribution counts, no matter how small! 


- 🌐 **Website**: [swc.iitg.ac.in](https://swc.iitg.ac.in/)
- 🎯 **Hacktoberfest Leaderboard**: [swc.iitg.ac.in/hacktoberfest/leaderboard](https://swc.iitg.ac.in/hacktoberfest/leaderboard)

---

**Made with ❤️ by SWC IITG for the developer community**

[![GitHub stars](https://img.shields.io/github/stars/swciitg/swc-init.svg?style=social&label=Star)](https://github.com/swciitg/swc-init)
[![GitHub forks](https://img.shields.io/github/forks/swciitg/swc-init.svg?style=social&label=Fork)](https://github.com/swciitg/swc-init/fork)
