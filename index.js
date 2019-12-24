$(document).ready(() => {

    $(".button-test").click(() => {
        console.log("HELLO EVERYONE")
    })

    let oneLight = document.createElement('div')
    oneLight.style.width = "7px"
    oneLight.style.height = "15px"
    oneLight.style.backgroundColor = firstLight.color
    oneLight.style.transform = `rotate(${firstLight.degree})`

    let twoLight = document.createElement('div')
    twoLight.style.width = "7px"
    twoLight.style.height = "15px"
    twoLight.style.backgroundColor = secondLight.color
    twoLight.style.transform = `rotate(${secondLight.degree})`

    $("#triangle-up-1").append(oneLight)
    $("#triangle-up-1").append(twoLight)

    console.log(firstLight)

})
