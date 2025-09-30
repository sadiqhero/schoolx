// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld(
    'electronAPI', {
        navigate: (route) => ipcRenderer.send('navigate', route)
    }
);
console.log('Preload script is running');






