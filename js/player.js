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

        this.playerBackgroundPos = { x: 0, y: 0 }

        this.playerSprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            frameSpeed: 4
        }

        this.init()
    }

    init() {

        this.playerElement = document.createElement('div')

        this.playerElement.style.position = "absolute"
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`

        this.playerElement.style.backgroundImage = `url(./img/phantom.png)`
        this.playerElement.style.backgroundSize = `300px 100px`

        this.playerElement.style.overflow = "hidden"
        this.playerElement.style.backgroundRepeat = "no-repeat"
        this.playerElement.style.backgroundPositionX = "0px"

        this.gameScreen.appendChild(this.playerElement)
    }

    move(framesCounter) {
        this.animateSprite(framesCounter)

        if (this.playerPos.bottom < this.base) {    // it's jumping
            this.playerPos.top += this.playerVel.top
            this.playerVel.top += this.playerVel.gravity
        } else {
            this.playerPos.bottom = this.base
            this.playerVel.top = 1
        }

        this.updatePosition()
    }

    animateSprite(framesCounter) {
        if (framesCounter % this.playerSprite.frameSpeed == 0) {
            this.playerSprite.currentFrame++
        }
        if (this.playerSprite.currentFrame >= this.playerSprite.totalFrames) {
            this.playerSprite.currentFrame = 0
        }

        this.playerSprite.backgroundPositionX = -this.playerSize.w * this.playerSprite.currentFrame

        this.updateSprite()
    }

    moveLeft() {
        this.playerPos.left -= this.playerVel.left
    }

    moveRight() {
        this.playerPos.left += this.playerVel.left
    }

    updateSprite() {
        this.playerElement.style.backgroundPositionX = `${this.playerSprite.backgroundPositionX}px`
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