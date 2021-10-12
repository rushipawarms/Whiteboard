// create main.js
// creat json file using npm init -y
// npm install electron
//add in package.json "start":"electron ."



const electron =require("electron");
const ejse = require('ejs-electron');
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
       nodeIntegration:true,// node enable here;
        enableRemoteModule: true
      }
    })
  
    win.loadFile('index.html').then(function(){
        win.maximize();
    })// here load file
    win.webContents.openDevTools()// here open devtools
  }

  app.whenReady().then(createWindow);
