class Background {

    constructor(gameScreen, gameSize, player) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.backgroundSize = {
            w: gameSize.w,
            h: gameScreen.h
        }

        this.backgroundPosition1 = {
            left: 0,
            top: 0
        }

        this.backgroundPosition2 = {
            left: gameSize.w,
            top: 0
        }

        this.backgroundPosition3 = {
            left: gameSize.w * 2,
            top: 0
        }

        this.backgroundPosition4 = {
            left: gameSize.w * 3,
            top: 0
        }

        this.backgroundVel = {
            left: .2
        }

        this.player = player

        this.init()
    }

    init() {
        this.backgroundElement1 = document.createElement('img')
        this.backgroundElement2 = document.createElement('img')
        this.backgroundElement3 = document.createElement('img')
        this.backgroundElement4 = document.createElement('img')

        this.backgroundElement1.src = "./img/background1.png"
        this.backgroundElement2.src = "./img/background2.png"
        this.backgroundElement3.src = "./img/background3.png"
        this.backgroundElement4.src = "./img/background4.png"

        this.backgroundElement1.style.position = "absolute"
        this.backgroundElement1.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement1.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement1.style.left = `${this.backgroundPosition1.left}px`
        this.backgroundElement1.style.top = `${this.backgroundPosition1.top}px`

        this.backgroundElement2.style.position = "absolute"
        this.backgroundElement2.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement2.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement2.style.left = `${this.backgroundPosition2.left}px`
        this.backgroundElement2.style.top = `${this.backgroundPosition2.top}px`

        this.backgroundElement3.style.position = "absolute"
        this.backgroundElement3.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement3.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement3.style.left = `${this.backgroundPosition3.left}px`
        this.backgroundElement3.style.top = `${this.backgroundPosition3.top}px`

        this.backgroundElement4.style.position = "absolute"
        this.backgroundElement4.style.width = `${this.backgroundSize.w}px`
        this.backgroundElement4.style.height = `${this.backgroundSize.h}px`
        this.backgroundElement4.style.left = `${this.backgroundPosition4.left}px`
        this.backgroundElement4.style.top = `${this.backgroundPosition4.top}px`

        this.gameScreen.appendChild(this.backgroundElement1)
        this.gameScreen.appendChild(this.backgroundElement2)
        this.gameScreen.appendChild(this.backgroundElement3)
        this.gameScreen.appendChild(this.backgroundElement4)
    }

    move() {
        if (this.backgroundPosition3.left <= -this.gameSize.w) {
            this.restartPosition()
        }

        if (
            this.player.playerPos.left + this.player.playerSize.w >= this.gameSize.w / 2
            && this.player.isMoving
        ) {
            this.backgroundPosition1.left -= this.player.playerVel.left * .5
            this.backgroundPosition2.left -= this.player.playerVel.left * .5
            this.backgroundPosition3.left -= this.player.playerVel.left * .5
            this.backgroundPosition4.left -= this.player.playerVel.left * .5
            this.updatePosition()
        }
        // this.backgroundPosition1.left -= this.backgroundVel.left
        // this.backgroundPosition2.left -= this.backgroundVel.left
    }

    restartPosition() {
        this.backgroundPosition4.left = 0
        this.backgroundPosition1.left = this.gameSize.w
        this.backgroundPosition2.left = this.gameSize.w * 2
        this.backgroundPosition3.left = this.gameSize.w * 3
    }

    updatePosition() {
        this.backgroundElement1.style.left = `${this.backgroundPosition1.left}px`
        this.backgroundElement2.style.left = `${this.backgroundPosition2.left}px`
        this.backgroundElement3.style.left = `${this.backgroundPosition3.left}px`
        this.backgroundElement4.style.left = `${this.backgroundPosition4.left}px`
    }
}