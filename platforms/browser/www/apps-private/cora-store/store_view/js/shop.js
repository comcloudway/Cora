document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
   
}

const fs = require("../../../../js/cordova-fs")

document.addEventListener("deviceready", ()=>{
alert(fs)
//fs.readDirSync(cordova.file.externalApplicationStorageDirectory)
}, false);