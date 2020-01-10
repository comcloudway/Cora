document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
   
}



document.addEventListener("deviceready", ()=>{

fs.readDirSync(cordova.file.dataDirectory)
}, false);