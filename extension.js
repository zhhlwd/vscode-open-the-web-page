const vscode = require('vscode');
const MenuItems = require('./src/menuItems');
const defaultMenuItems = ['open bookmarks', 'open URL'];

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'extension.openTheWebPage',
    function() {
      let bookmarks = vscode.workspace.getConfiguration().openTheWebPage;
      vscode.window.showQuickPick(defaultMenuItems).then(selectedMenuItem => {
        switch (selectedMenuItem) {
          case 'open bookmarks':
            new MenuItems('open bookmarks', bookmarks);
            break;
          case 'open URL':
            new MenuItems('open URL', bookmarks);
            break;
        }
      });
    }
  );
  context.subscriptions.push(disposable);
}
exports.activate = activate;
