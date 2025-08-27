try {
  require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
  });
} catch (err) {
  // Ignorar error en producción
}


const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
  win.setMenu(null);
}

app.whenReady().then(createWindow);
