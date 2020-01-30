// TETRIS
let globalArray = []
// draw the board
let drawBoard = () => {
    let tetrisBoard = document.querySelector('.tetrisBoard')
    for (let i = 0; i < 300; i++) {
        let tetrisBoardSquare = document.createElement('div')
        tetrisBoardSquare.className = `tetrisBoardSquare`
        tetrisBoardSquare.id = `${i}`
        tetrisBoard.appendChild(tetrisBoardSquare)
    }
}

drawBoard()

// to make sure there isn't losing
let myTakenSpaces = []
let makeObjectForPlay = (ele1, ele2, ele3, ele4) => {
    console.log('my taken spaces:', myTakenSpaces, 'ele1: ', ele1)
    if (!myTakenSpaces.includes(ele1)) {
        // creates the board piece that is going to fall
    function createPiece (ele1, ele2, ele3, ele4) {
        document.getElementById(ele1).style.backgroundColor = 'red'
        document.getElementById(ele2).style.backgroundColor = 'red'
        document.getElementById(ele3).style.backgroundColor = 'red'
        document.getElementById(ele4).style.backgroundColor = 'red'
    }
    // rotate the piece
    document.addEventListener('keydown', (ev) => {
        // if the key is the up arrow
        if (ev.keyCode === 38) {
            if (!myTakenSpaces.includes(ele3)) {
                document.getElementById(ele1).style.backgroundColor = 'black'
                document.getElementById(ele2).style.backgroundColor = 'black'
                document.getElementById(ele3).style.backgroundColor = 'black'
                document.getElementById(ele4).style.backgroundColor = 'black' 
                ele1 -= 13
                ele2 += 1
                ele3 = ele4
                ele4 -= 1
                createPiece(ele1, ele2, ele3, ele4)
            }
        }
    })

    // move object right
    document.addEventListener('keydown', (ev) => {
        // move object right
        if (ev.keyCode === 39) {
            if (!myTakenSpaces.includes(ele3)) {
                if (ele3 !== 14 && ele3 !== 29 && ele3 !== 44 && ele3 !==  59 && ele3 !== 74 && 
                    ele3 !== 89 && ele3 !== 104 && ele3 !== 119 && ele3 !== 134 && ele3 !== 149 && ele3 !== 164
                    && ele3 !== 179 && ele3 !== 194 && ele3 !== 209 && ele3 !== 224 && ele3 !== 239
                    && ele3 !== 254 && ele3 !== 269 && ele3 !== 284) {
                        document.getElementById(ele1).style.backgroundColor = 'black'
                        document.getElementById(ele2).style.backgroundColor = 'black'
                        document.getElementById(ele3).style.backgroundColor = 'black'
                        document.getElementById(ele4).style.backgroundColor = 'black' 
                        ele1 += 1
                        ele2 += 1
                        ele3 += 1
                        ele4 += 1
                        createPiece(ele1, ele2, ele3, ele4)
                    } 
                } 
            }
    })
    // move object left
    document.addEventListener('keydown', (ev) => {
        if (ev.keyCode === 37) {
            if (!myTakenSpaces.includes(ele3)) {
                if (ele1 !== 0 && ele1 !== 15 && ele1 !== 30 && ele1 !== 45 && ele1 !== 60 && 
                    ele1 !== 75 && ele1 !== 90 && ele1 !== 105 && ele1 !== 120 && ele1 !== 135 && ele1 !== 150 
                    && ele1 !== 165 && ele1 !== 180 && ele1 !== 195 && ele1 !== 210 && ele1 !== 225 
                    && ele1 !== 240 && ele1 !== 255 && ele1 !== 270) {
                        document.getElementById(ele1).style.backgroundColor = 'black'
                        document.getElementById(ele2).style.backgroundColor = 'black'
                        document.getElementById(ele3).style.backgroundColor = 'black'
                        document.getElementById(ele4).style.backgroundColor = 'black' 
                        ele1 -= 1
                        ele2 -= 1
                        ele3 -= 1
                        ele4 -= 1
                        createPiece(ele1, ele2, ele3, ele4)
                }
            } 
        }
    })
    let movePiece = setInterval(() => {
            // moving the object down every second
        if (ele4+15 < 300 && !myTakenSpaces.includes(ele4+15)) {
            createPiece(ele1, ele2, ele3, ele4)
            document.getElementById(ele1).style.backgroundColor = 'black'
            document.getElementById(ele2).style.backgroundColor = 'black'
            document.getElementById(ele3).style.backgroundColor = 'black'
            document.getElementById(ele4).style.backgroundColor = 'black'
            ele1 += 15
            ele2 += 15
            ele3 += 15
            ele4 += 15
            createPiece(ele1, ele2, ele3, ele4)
        } else {
            console.log('in the ele block')
            myTakenSpaces.push(ele1,ele2,ele3,ele4)
            clearInterval(movePiece)
        }
    }, 1000)
    }
}
let setCurrentPiece = (ele1, ele2, ele3, ele4, callback) => {
    this.ele1 = ele1
    this.ele2 = ele2
    this.ele3 = ele3
    this.ele4 = ele4
    callback(this.ele1, this.ele2, this.ele3, this.ele4)
}

// make everything go
document.querySelector('.playButton').addEventListener('click', () => {
    setCurrentPiece(3, 4, 5, 20, makeObjectForPlay)
    setInterval(() => {
        setCurrentPiece(3, 4, 5, 20, makeObjectForPlay)
    }, 19000)
})
































// // grabbing dom elements
// let dissovleButton = document.querySelector('.dissolveButton')
// let titleClass = document.querySelector('#titleClass')
// let randomNumber = () => {
//     return Math.random() * Math.floor(255)
// }
// let numOfClicks = 0
// let changeFunction = () => {
//     document.querySelector('.numberOfClicks').textContent = numOfClicks
// }
// changeFunction()

// // array for title
// let titleArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'm', 'y', ' ', 'S', 't', 'a', 't', 'i', 'c', ' ', 'B', 'l', 'o', 'g']
// titleArray.forEach((ele, index) => {
//     return titleArray[index] = `<span class='intro'>${ele}</span>`
// })
// titleClass.innerHTML = titleArray.join('')

// // grab all the letter
// let titleLetters = titleClass.querySelectorAll(".intro")

// // dom selectors
// dissovleButton.addEventListener('click', () => {
//     setTimeout(() => {
//         titleClass.className = 'opace'
//     }, 4500)
//     titleLetters.forEach((ele, index) => {
//         titleLetters[index].className = 'titleLetters'
//     })
// })

// // enter and leave
// document.querySelector('.dissolveButton').addEventListener('mouseover', () => {
//     document.body.style.backgroundColor = 'green'
// })
// document.querySelector('.dissolveButton').addEventListener('mouseleave', () => {
//     document.body.style.backgroundColor = 'white'
// })

// // adding the click button
// document.querySelector('.clickButton').addEventListener('click', () => {
//     numOfClicks++
//     changeFunction()
//     document.querySelector('.numberOfClicks').style.color = `rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, 1)`
// })


// // TICTACTOE
// let playing = true

// // Turn Type
// let firstPlayer = true
// let secondPlayer = false

// // selector and board array
// let tBoard = document.querySelector('.tictactoeBoard')
// let ticTacToeBoard = ['','','','','','','','','']

// // Answer checking arrays
// let checkerX = []
// let checkerO = []
// let answerArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

// if (playing) {
//     // event Listener for each div
//     tBoard.addEventListener('click', (ev) => {
//         let boardIndex = ev.target.outerHTML
//         let regexBoardIndex = boardIndex.match(/[^=]"/g)
//         let finalNumber = regexBoardIndex[0].match(/[^"]/)

//         if (firstPlayer) {
//             ev.target.textContent = 'x'
//             checkerX.push(parseInt(finalNumber[0]))
//             firstPlayer = false
//             secondPlayer = true
//         } else {
//             ev.target.textContent = 'o'
//             checkerO.push(parseInt(finalNumber[0]))
//             firstPlayer = true
//             secondPlayer = false
//         }
//         if (checkerO.length > 2) {
//             answerArray.forEach((ele, index) => {
//                 checkerNum = 0
//                 // Iterate through array of answer arrays
//                 ele.forEach((ele, index) => {
//                     // iterate through numbers in answer arrays
//                     if (checkerO.includes(ele)) {
//                         // add to answer number
//                         checkerNum += 50
//                     }
//                     if (checkerNum === 150) {
//                         console.log("o's won")
//                         playing = false
//                         return
//                     }
//                 })
//             })
//         }
//         if (checkerX.length > 2) {
//             answerArray.forEach((ele, index) => {
//                 checkerNum = 0
//                 // Iterate through array of answer arrays
//                 ele.forEach((ele, index) => {
//                     // iterate through numbers in answer arrays
//                     if (checkerX.includes(ele)) {
//                         // add to answer number
//                         checkerNum += 50
//                     }
//                     if (checkerNum === 150) {
//                         console.log("o's won")
//                         playing = false
//                         return
//                     }
//                 })
//             })
//         }
//     })
// }

// // make the board
// ticTacToeBoard.forEach((ele, index) => {
//     let boardSquare = document.createElement('div')
//     boardSquare.className = `boardSquare ${index}`
//      tBoard.appendChild(boardSquare)
// })