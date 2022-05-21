const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
 
const path = require('path')
const url = require('url')
 
let win
 
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600, resizable: true, title: 'AI Project | Sajag Kamthan', icon: path.join(__dirname, './favicon8.ico') })
 
  // and load the index.html of the app.
  win.loadURL('https://codewhiteweb.cf/speedometertest')
}

app.on('ready', createWindow)