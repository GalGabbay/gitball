gBallSize = 100
gBallIncrement = 50

function onBallClick() {

    var elBall = document.querySelector('.ball')
    
    gBallSize += gBallIncrement

    elBall.style.height = gBallSize + 'px'
    elBall.style.width = gBallSize + 'px'
    elBall.innerText = `${gBallSize}`

}



