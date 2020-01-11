
//Helper FUnctions

const startStore = () => {
    window.location="apps-private/cora-store/main.html"
}
const startApp = (name) => {

}

document.addEventListener("deviceready", ()=>{

    window.plugins.Shortcuts.onNewIntent(function(intent) {
        window.alert(JSON.stringify(intent));
        let name = ""; //find out more
        startApp(name)
    })

    if(window.location.href.indexOf("?")==-1){
        //No Params
        startStore()
    } else {
        let params = window.location.href.split("?")[1];
        if(params.indexOf("&")>-1){
            params=params.split("&");
        } else {
            params =[params]
        }
        let islaunched = 0;
        for (let i of params) {
            if(i.indexOf("=")>-1) {
            i=i.split("=");
            if(i[0]=="launch"&&i[1].length>=3) {
                //App launch detected
                islaunched=1;
                startApp(i[1])
            } }
        }
        if(islaunched==0) {
            startStore()
        }
    }

}, false);