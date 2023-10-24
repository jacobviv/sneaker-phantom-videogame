class Player {

  constructor(gameScreen, gameSize) {

    this.gameScreen = gameScreen
    this.gameSize = gameSize

    this.playerSize = {
      w: 100,
      h: 100
    }

    this.playerPos = {
      left: 50,
      top: gameSize.h - this.playerSize.h - 50
    }

    this.playerVel = {
      left: 20,
      top: 5
    }

    this.playerBackgroundPos = {
      x: 0,
      y: 0
    }

    this.playerSprite = {
      backgroundPositionX: 0,
      totalFrames: 3,
      currentFrame: 1,
      frameSpeed: 6
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

    this.playerElement.style.backgroundImage = `url(./img/player.png)`
    this.playerElement.style.backgroundSize = `300px 100px`

    this.playerElement.style.overflow = "hidden"
    this.playerElement.style.backgroundRepeat = "no-repeat"
    this.playerElement.style.backgroundPositionX = "0px"

    this.gameScreen.appendChild(this.playerElement)
  }

  move(framesIndex) {
    this.animateSprite(framesIndex)
    this.updatePosition()
  }

  animateSprite(framesIndex) {

    if (framesIndex % this.playerSprite.frameSpeed == 0) {
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
}