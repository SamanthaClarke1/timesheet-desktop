const { app, BrowserWindow } = require('electron');

let win; //keep a global reference of the window object,
// otherwise it'll be killed by javscripts garbage collection!

let path = require('path');

app.on('ready', function createWindow() {
	win = new BrowserWindow({
		minWidth: 400,
		minHeight: 600,
		width: 1200,
		height: 800,
		backgroundColor: '#2e2f35',
		show: false,
		icon: path.join(__dirname, "assets", "64x64.png")
	});

	win.loadURL('http://192.168.250.85:8000/');

	win.on('closed', () => {
		//Dereference the window object, usually stores windows in an arr,
		//dont think i'm going to support that tho, just cleanup, simple enough isnt it?
		win = null
	})

	win.once('ready-to-show', () => {
		win.show();
	})
});

app.on('window-all-closed', () => {
	// On MacOSX applications can stay active until Cmd+Q is pressed, this fixes that.
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On MacOSX it's common to recreate windows in the app when the dock icon 
	// is clicked, and there are no other windows open.
	if(win === null) {
		createWindow();
	}
});