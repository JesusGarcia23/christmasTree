$(document).ready(() => {

    $(".button-test").click(() => {
        console.log("HELLO EVERYONE")
    })

    let oneLight = document.createElement('div')
    oneLight.style.position = "absolute"
    oneLight.style.top = "25vh"
    oneLight.style.left = "47vw"
    oneLight.style.width = "7px"
    oneLight.style.height = "15px"
    oneLight.style.backgroundColor = firstLight.color
    oneLight.style.transform = `rotate(${firstLight.degree})`

    let twoLight = document.createElement('div')
    twoLight.style.position = "absolute"
    twoLight.style.top = "30vh"
    twoLight.style.left = "45vw"
    twoLight.style.width = "7px"
    twoLight.style.height = "15px"
    twoLight.style.backgroundColor = secondLight.color
    twoLight.style.transform = `rotate(${secondLight.degree})`

    let threeLight = document.createElement('div')
    threeLight.setAttribute("class", "light")
    threeLight.style.position = "absolute"
    threeLight.style.top = "35vh"
    threeLight.style.left = "43vw"
    threeLight.style.width = "7px"
    threeLight.style.height = "15px"
    threeLight.style.backgroundColor = "blue"
    threeLight.style.transform = `rotate(${secondLight.degree})`

    $("html").append(oneLight)
    $("html").append(twoLight)
    $("html").append(threeLight)

    console.log(firstLight)

})



//MAX TOP = 25VH // MIN LEFT = 47vw
//MAX TOP = 30VH // MIN LEFT = 45vw
//MAX TOP 35 = VH // MIN LEFT = 43vw