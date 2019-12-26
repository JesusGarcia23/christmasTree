$(document).ready(() => {
 
    let positions =[
        [ [20], [46, 48, 50] ], //3
        [ [24], [45, 47, 49, 51] ] , // 7
        [ [28], [43, 45, 47, 49, 51, 53 ] ], // 13
        [ [32], [42, 44, 46, 48, 50, 52, 54] ], // 20
        [ [36], [43, 45, 47, 49, 51, 53] ], // 26
        [ [40], [ 41, 43, 45, 47, 49, 51, 53, 55] ], // 34
        [ [44], [39, 41, 43, 45, 47, 49, 51, 53, 55, 57] ], // 44
        [ [48], [ 40, 42, 44, 46, 48, 50, 52, 54, 56] ], // 53
        [ [52], [39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59] ], // 64
        [ [56], [38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58] ], // 64
        [ [60], [37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59] ] // 76

        ]

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }
    

    function addLigth(){
        let row = Math.floor(Math.random() * positions.length)
        let theTop = positions[row][0][Math.floor(Math.random() * positions[row][0].length)];
        let theLeft = positions[row][1][Math.floor(Math.random() * positions[row][1].length)]; 
        if(positions[row][1].length === 0){
            positions.splice(row, 1)
            addLigth();
        }else{
        let light =  document.createElement('div')
        light.setAttribute("class", "light")
        light.style.position = "absolute"
        light.style.top = `${theTop}vh`
        light.style.left = `${theLeft}vw`
        light.style.width = "7px"
        light.style.height = "15px"
        light.style.margin = "25px"
        light.style.backgroundColor = 'gray'
        light.style.transform = `rotate(${firstLight.degree})`
        $("html").append(light)
        positions[row][1].splice(positions[row][1].indexOf(theLeft), 1)
         }
    }

    for(let i = 0; i < 77; i++){
        addLigth();
    }
    

    $(".button-test").click(() => {
        let star = document.getElementById('star-five')
        setInterval(changeColors, 500);

        $("#star-five").after(() => {
            $(this).css("color", "red")
        })
    })

    function changeColors(){
        let lights = document.getElementsByClassName('light')
        for(let i = 0; i < lights.length; i++){
            lights[i].style.backgroundColor = getRandomColor();
        }
    }

    // console.log(firstLight)

})

// TOP 
//MAX TOP = 25VH // MIN LEFT = 47vw // MAX LEFT = 52VW 
//MAX TOP = 30VH // MIN LEFT = 45vw // MAX LEFT = 54VW 
//MAX TOP = 35VH // MIN LEFT = 43vw // MAX LEFT = 56VW 

// THIRD LEVEL
// MAX TOP = 40VH // MIN LEFT = 43VW // MAX LEFT = 56VW 
// MAX TOP = 45VH // MIN LEFT = 41VW // MAX LEFT = 58VW


// SECOND LEVEL
// MAX TOP = 50Vh// MIN LEFT = 41VW // MAX LEFT = 58VW 
// MAX TOP = 55Vh // MIN LEFT = 39VW // MAX LEFT = 60VW 

// FIRST LEVEL

// MAX TOP = 60Vh // MIN LEFT = 39VW // MAX LEFT = 60VW
// MAX TOP = 65Vh // MIN LEFT = 37VW // MAX LEFT = 62VW


//DEGREES
// 30deg
//160deg


//TESTING
  // let oneLight = document.createElement('div')
    // oneLight.style.position = "absolute"
    // oneLight.style.top = "25vh"
    // oneLight.style.left = "52vw"
    // oneLight.style.width = "7px"
    // oneLight.style.height = "15px"
    // oneLight.style.backgroundColor = firstLight.color
    // oneLight.style.transform = `rotate(${firstLight.degree})`

    // let twoLight = document.createElement('div')
    // twoLight.style.position = "absolute"
    // twoLight.style.top = "30vh"
    // twoLight.style.left = "54vw"
    // twoLight.style.width = "7px"
    // twoLight.style.height = "15px"
    // twoLight.style.backgroundColor = secondLight.color
    // twoLight.style.transform = `rotate(${secondLight.degree})`

    // let threeLight = document.createElement('div')
    // threeLight.setAttribute("class", "light")
    // threeLight.style.position = "absolute"
    // threeLight.style.top = "35vh"
    // threeLight.style.left = "56vw"
    // threeLight.style.width = "7px"
    // threeLight.style.height = "15px"
    // threeLight.style.backgroundColor = "blue"
    // threeLight.style.transform = `rotate(${secondLight.degree})`

    // let fourthLight = document.createElement('div')
    // fourthLight.setAttribute("class", "light")
    // fourthLight.style.position = "absolute"
    // fourthLight.style.top = "40vh"
    // fourthLight.style.left = "56vw"
    // fourthLight.style.width = "7px"
    // fourthLight.style.height = "15px"
    // fourthLight.style.backgroundColor = "blue"
    // fourthLight.style.transform = `rotate(${secondLight.degree})`

    // let fifthLight = document.createElement('div')
    // fifthLight.setAttribute("class", "light")
    // fifthLight.style.position = "absolute"
    // fifthLight.style.top = "45vh"
    // fifthLight.style.left = "58vw"
    // fifthLight.style.width = "7px"
    // fifthLight.style.height = "15px"
    // fifthLight.style.backgroundColor = "blue"
    // fifthLight.style.transform = `rotate(${secondLight.degree})`

    // let sixLight = document.createElement('div')
    // sixLight.setAttribute("class", "light")
    // sixLight.style.position = "absolute"
    // sixLight.style.top = "50vh"
    // sixLight.style.left = "58vw"
    // sixLight.style.width = "7px"
    // sixLight.style.height = "15px"
    // sixLight.style.backgroundColor = "blue"
    // sixLight.style.transform = `rotate(${secondLight.degree})`

    // let seventhLight = document.createElement('div')
    // seventhLight.setAttribute("class", "light")
    // seventhLight.style.position = "absolute"
    // seventhLight.style.top = "55vh"
    // seventhLight.style.left = "60vw"
    // seventhLight.style.width = "7px"
    // seventhLight.style.height = "15px"
    // seventhLight.style.backgroundColor = "blue"
    // seventhLight.style.transform = `rotate(${secondLight.degree})`

    // let eightLight = document.createElement('div')
    // eightLight.setAttribute("class", "light")
    // eightLight.style.position = "absolute"
    // eightLight.style.top = "60vh"
    // eightLight.style.left = "60vw"
    // eightLight.style.width = "7px"
    // eightLight.style.height = "15px"
    // eightLight.style.backgroundColor = "blue"
    // eightLight.style.transform = `rotate(${secondLight.degree})`

    // let ninthLight = document.createElement('div')
    // ninthLight.setAttribute("class", "light")
    // ninthLight.style.position = "absolute"
    // ninthLight.style.top = "65vh"
    // ninthLight.style.left = "62vw"
    // ninthLight.style.width = "7px"
    // ninthLight.style.height = "15px"
    // ninthLight.style.backgroundColor = "blue"
    // ninthLight.style.transform = `rotate(${secondLight.degree})`


    //OLD SWITCH STATEMENT
    // switch(true){
    //     case theTop >= 25 && theTop < 30:
    //         theLeft = Math.floor(Math.random() * (52 - 47) + 47);
    //         break;
    //     case theTop >= 30 && theTop < 35:
    //         theLeft = Math.floor(Math.random() * (54 - 45) + 45);
    //         break;
    //     case theTop >= 35 && theTop < 40:
    //         theLeft = Math.floor(Math.random() * (56 - 43) + 43);
    //         break;
    //     case theTop >= 40 && theTop < 45:
    //         theLeft = Math.floor(Math.random() * (56 - 43) + 43);
    //         break;
    //     case theTop >= 45 && theTop < 50:
    //         theLeft = Math.floor(Math.random() * (58 - 41) + 41);
    //         break;
    //     case theTop >= 50 && theTop < 55:
    //         theLeft = Math.floor(Math.random() * (58 - 41) + 41);
    //         break;
    //     case theTop >= 55 && theTop < 60:
    //         theLeft = Math.floor(Math.random() * (60 - 39) + 39);
    //         break;
    //     case theTop >= 60 && theTop < 65:
    //         theLeft = Math.floor(Math.random() * (60 - 39) + 39);
    //         break;
    //     case theTop === 65:
    //         theLeft = Math.floor(Math.random() * (60 - 39) + 39);
    //         break;
    //     default:
    //         break;
        
    // }