const R = {
    btn: {
        store: document.getElementById("store"),
        apps: document.getElementById("apps"),
        info: document.getElementById("info")
    },
    view: {

    },
    wrapper: document.getElementById("wrapper")
}

//Define



//Helperfunctions

const clearHiglight = () => {
    for (let i in R.btn) {
        R.btn[i].style.color = "rgba(0,0,0,0.5)"
        R.btn[i].style.fontSize = "250%"
    }
}
const trans = (x) => {
    R.wrapper.style.left = `-${x}vw`
}

//Button Setup

clearHiglight()
R.btn.apps.style.color = "#fcc41c"
R.btn.apps.style.fontSize = "300%"
trans(100)

//Button Functionality
R.btn.store.addEventListener("click", () => {
    clearHiglight()
    R.btn.store.style.color = "#fcc41c"
    R.btn.store.style.fontSize = "300%"
    trans(0)
})
R.btn.apps.addEventListener("click", () => {
    clearHiglight()
    R.btn.apps.style.color = "#fcc41c"
    R.btn.apps.style.fontSize = "300%"
    trans(100)
})
R.btn.info.addEventListener("click", () => {
    clearHiglight()
    R.btn.info.style.color = "#fcc41c"
    R.btn.info.style.fontSize = "300%"
    trans(200)
})