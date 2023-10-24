class Player {

    constructor(gameScreen, gameSize, base) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.base = base

        this.playerSize = { w: 100, h: 100 }

        this.playerPos = {
            left: 50,
            top: this.gameSize.h - this.playerSize.h - this.base,
            bottom: top + this.playerSize.h
        }

        this.playerVel = {
            left: 1,
            top: 0,
            gravity: 0.4
        }

        this.init()
    }

    init() {

        this.playerElement = document.createElement('img')
        this.playerElement.src = "./img/phantom.png"

        this.playerElement.style.position = "absolute"
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`

        this.gameScreen.appendChild(this.playerElement)
    }

    move() {
        if (this.playerPos.bottom < this.base) {    // it's jumping
            this.playerPos.top += this.playerVel.top
            this.playerVel.top += this.playerVel.gravity
        } else {
            this.playerPos.bottom = this.base
            this.playerVel.top = 1
        }

        this.updatePosition()
    }

    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`
    }

    jump() {
        if (this.playerPos.bottom >= this.base) {
            this.playerPos.top -= 40
            this.playerVel.top -= 8
        }
    }
}