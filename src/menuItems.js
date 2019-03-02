const vscode = require('vscode');
const OpenURL = require('./openURL');
class MenuItems {
  constructor(key, bookmarks) {
    switch (key) {
      case 'open bookmarks':
        this.creatMenu(bookmarks);
        break;
      case 'open URL':
        this.creatInput(
          'Pages that are not allowed to be nested within an iframe cannot be opened, and the url must begin with http:// or https://'
        );
        break;
    }
  }

  creatMenu(bookmarks) {
    let menuItems = Object.keys(bookmarks);
    vscode.window
      .showQuickPick(menuItems, {
        ignoreFocusOut: true
      })
      .then(selectedMenuItem => {
        this.nextMenu(selectedMenuItem, bookmarks);
      });
  }
  creatInput(prompts) {
    vscode.window
      .showInputBox({
        prompt: prompts,
        ignoreFocusOut: true
      })
      .then(val => {
        if (typeof val !== 'undefined') {
          new OpenURL(val, val);
        }
      });
  }
  nextMenu(selected, val) {
    if (typeof selected === 'undefined') {
      return;
    }
    if (typeof val[selected] !== 'object') {
      new OpenURL(selected, val[selected]);
      return;
    }
    this.creatMenu(val[selected]);
  }
}
module.exports = MenuItems;
