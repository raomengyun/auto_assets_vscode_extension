// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const AutoAssets = require("auto_assets");
var autoAssets = undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

function activate() {
  // Use the console to output diagnostic information (console.log) and errors
  // (console.error) This line of code will only be executed once when your
  // extension is activated
  const rootPath = vscode.workspace.rootPath;
  if (!rootPath) {
    vscode.window.showInformationMessage(
      "You should use this extension in a workspace!"
    );
    return;
  }
  autoAssets = new AutoAssets(rootPath);
  try {
    autoAssets.start();
  } catch (error) {
    vscode.window.showInformationMessage(error.message);
  }
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
  if (autoAssets) {
    autoAssets.stop();
  }
}

module.exports = {
  activate,
  deactivate
};
