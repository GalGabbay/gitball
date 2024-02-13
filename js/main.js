

function onBallClick() {

    var elBall = document.querySelector('.ball')
    
    ballDiamitor = getRandomInt(20,61)


    elBall.style.height = ballDiamitor + 'px'
    elBall.style.width = ballDiamitor + 'px'
    elBall.innerText = `${ballDiamitor}`
    elBall.style.backgroundColor = getRandomColor()


}





