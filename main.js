const {app,BrowserWindow,ipcMain,clipboard}=require('electron'),path=require('path');
let w;function cW(){w=new BrowserWindow({width:1400,height:900,minWidth:1000,minHeight:700,
titleBarStyle:'hiddenInset',trafficLightPosition:{x:20,y:20},backgroundColor:'#0f0f23',show:false,
webPreferences:{nodeIntegration:false,contextIsolation:true,preload:path.join(__dirname,'preload.js')}});
w.loadFile(path.join(__dirname,'src','index.html'));w.once('ready-to-show',()=>w.show());}
app.whenReady().then(()=>{cW();app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)cW();});});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
ipcMain.handle('copy-to-clipboard',async(e,t)=>{clipboard.writeText(t);return{success:true};});
ipcMain.handle('load-prompt-data',async()=>{try{const{loadEncryptedData}=require('./src/decrypt.js');
return{success:true,positive:loadEncryptedData('data.enc'),negative:loadEncryptedData('negative_data.enc')};
}catch(e){return{success:false,error:e.message};}});