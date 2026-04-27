const{contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('electronAPI',{copyToClipboard:t=>ipcRenderer.invoke('copy-to-clipboard',t),
loadPromptData:()=>ipcRenderer.invoke('load-prompt-data')});