# Lesbian Apotheosis Incremental

## Prerequisites

1) Visual Studio Code (https://code.visualstudio.com/)

## Setup the sources

### Install npm

1) Download the Node.js installer (https://nodejs.org/fr/download).
2) During install, do not cross "automatically install the necessary tools".
3) Open a console and type "node -v" and "npm -v", the version of node and npm should appear.

### Necessary VS Code extensions

1) Go to Extensions on the left bar of VS Code.
2) Search for "ESLint" (by Microsoft), "Prettier" (by Prettier), "Prettier ESLint" (by Rebecca Vest), and "HTML CSS Support" (by ecmel).
3) In "Prettier - Code Formatter"'s options, change "Tab Width" to "4" and under "Use Tabs", cross "Indent lines with tabs".
4) In General Settings, search for "Format on Save" and cross "Format a file on save".
5) Still in General Settings, search for "Default Formatter" and select "Prettier - Code Formatter".

### Clone the repo

1) Open Visual Studio Code and click on "Clone Git Repository", then "Clone for github".
2) Get through the authentification process if necessary.
3) Select the project "$name/Lesbian-Apotheosis-Incremental" and select repository destination.
4) Open the repository.

### Install dependancies

1) Open a terminal inside VS Code (in the topbar : Terminal -> New Terminal).
2) In the terminal, type "npm install".
3) If there's an error about script execution being deactivated, type in the terminal "Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned" then go back to Step 2.
4) If vulnerabilities are found, do a "npm audit fix" but do NOT push before verifying correct project execution. If project do not execute after audit, revert "package-lock.json".

## Starting project

1) In a terminal, type "npm run dev".
2) You should see a localhost adress ("http://localhost:####/), open your browser and navigate to the link.
3) If everything works, you should see the project in action.
4) To close the instance, click on your terminal and use CTRL + C to stop the process.
