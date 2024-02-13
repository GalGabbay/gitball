gBallSize = 100
gBallIncrement = 50


function onBallClick() {

    var elBall = document.querySelector('.ball')
    
    if (gBallSize === 400) gBallSize = 50


    gBallSize += gBallIncrement

    elBall.style.height = gBallSize + 'px'
    elBall.style.width = gBallSize + 'px'
    elBall.innerText = `${gBallSize}`
    elBall.style.backgroundColor = getRandomColor()


}





