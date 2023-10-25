class Player {
  constructor(gameScreen, gameSize) {
    this.gameScreen = gameScreen
    this.gameSize = gameSize

    this.playerSize = {
      w: 75,
      h: 75,
    }

    this.playerPos = {
      left: 50,
      top: gameSize.h - this.playerSize.h - 50,
      base: gameSize.h - this.playerSize.h - 50,
    }

    this.playerVel = {
      left: 5,
      top: 5,
    }

    this.isMoving = false
    this.currentDirection = 'RIGHT'
    this.idleFrame = this.currentDirection === 'LEFT' ? 3 : 0

    this.spriteFrames = {
      LEFT: [
        { x: 300, y: 0 },
        { x: 375, y: 0 },
        { x: 450, y: 0 },
        { x: 525, y: 0 },
      ],
      RIGHT: [
        { x: 0, y: 0 },
        { x: 75, y: 0 },
        { x: 150, y: 0 },
        { x: 225, y: 0 },
      ],
    }

    this.playerSprite = {
      backgroundPositionX: 0,
      currentFrame: this.idleFrame,
      frameSpeed: 7,
    }

    this.isJumping = false
    this.jumpHeight = 7
    this.gravity = .2
    this.jumpSpeed = 0

    this.canMove = {
      right: false,
      left: false,
      up: false,
    }

    this.init()
  }

  init() {
    this.playerElement = document.createElement('div')

    this.playerElement.style.position = 'absolute'
    this.playerElement.style.width = `${this.playerSize.w}px`
    this.playerElement.style.height = `${this.playerSize.h}px`
    this.playerElement.style.left = `${this.playerPos.left}px`
    this.playerElement.style.top = `${this.playerPos.top}px`

    this.playerElement.style.backgroundImage = 'url(./img/phantom.png)'
    this.playerElement.style.backgroundSize = '600px 75px'

    this.playerElement.style.overflow = 'hidden'
    this.playerElement.style.backgroundRepeat = 'no-repeat'
    this.playerElement.style.backgroundPositionX = '0px'

    this.gameScreen.appendChild(this.playerElement)
  }

  move(framesIndex) {
    if (this.isMoving) {
      this.animateSprite(framesIndex)
    }
    this.updatePosition()

    if (this.isJumping) {
      this.playerPos.top += this.jumpSpeed
      this.jumpSpeed += this.gravity

      this.canMove.right = false    ////////////  con esto no se mueve al saltar
      this.canMove.left = false     ////////////

      if (this.playerPos.top >= this.playerPos.base) {
        this.playerPos.top = this.playerPos.base
        this.isJumping = false
      }
    }
  }

  moveLeft() {
    this.playerPos.left -= this.playerVel.left
    this.isMoving = true
    this.currentDirection = 'LEFT'
  }

  moveRight() {
    this.playerPos.left += this.playerVel.left
    this.isMoving = true
    this.currentDirection = 'RIGHT'
  }

  setNotMoving() {
    this.isMoving = false
    this.playerSprite.currentFrame = this.currentDirection === 'LEFT' ? 3 : 0
    this.updateSprite()
  }

  animateSprite(framesIndex) {
    if (framesIndex % this.playerSprite.frameSpeed == 0) {
      const currentFrames = this.spriteFrames[this.currentDirection]
      this.playerSprite.currentFrame = (this.playerSprite.currentFrame + 1) % currentFrames.length
    }

    this.updateSprite()
  }

  updateSprite() {
    const currentFrame = this.spriteFrames[this.currentDirection][this.playerSprite.currentFrame]
    this.playerSprite.backgroundPositionX = -currentFrame.x
    this.playerElement.style.backgroundPositionX = `${this.playerSprite.backgroundPositionX}px`
  }

  updatePosition() {
    this.playerElement.style.left = `${this.playerPos.left}px`
    this.playerElement.style.top = `${this.playerPos.top}px`
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true
      this.playerPos.top -= 20
      this.jumpSpeed = -this.jumpHeight
    }
  }
}
