const Game = {
  gameScreen: document.querySelector("#game-screen"),
  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  player: undefined,

  framesIndex: 0,

  keys: { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', JUMP: 'Space' },

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  start() {
    this.createElements()
    this.gameLoop()
    this.setEventListeners()
  },

  // setEventListeners() {
  //   document.onkeydown = event => {
  //     switch (event.code) {
  //       case this.keys.LEFT:
  //         this.player.moveLeft()
  //         break;
  //       case this.keys.RIGHT:
  //         this.player.moveRight()
  //         break;
  //       case this.keys.JUMP:
  //         this.player.jump()
  //         break;
  //     }
  //   }

  //   document.onkeyup = event => {
  //     switch (event.code) {
  //       case this.keys.LEFT:
  //       case this.keys.RIGHT:
  //         this.player.setNotMoving();
  //         break;
  //     }
  //   }
  // },

  setEventListeners() {
    document.onkeydown = event => {
      switch (event.code) {
        case this.keys.LEFT:
          this.player.canMove.left = true
          break;
        case this.keys.RIGHT:
          this.player.canMove.right = true
          break;
        case this.keys.JUMP:
          this.player.canMove.up = true
          break;
      }
    }

    document.onkeyup = event => {
      switch (event.code) {
        case this.keys.LEFT:
          this.player.canMove.left = false
          this.player.setNotMoving()
          break;
        case this.keys.RIGHT:
          this.player.canMove.right = false
          this.player.setNotMoving()
          break;
        case this.keys.JUMP:
          this.player.canMove.up = false
          this.player.setNotMoving()
          break;
      }
    }

  },

  createElements() {
    this.player = new Player(this.gameScreen, this.gameSize, this.keys)
  },

  gameLoop() {
    this.moveAll()
    this.incrementFrames()
    window.requestAnimationFrame(() => this.gameLoop())
  },

  incrementFrames() {
    this.framesIndex > 5000 ? this.framesIndex = 0 : this.framesIndex++
  },

  moveAll() {
    this.player.move(this.framesIndex)
    if (this.player.canMove.left) this.player.moveLeft()    ///////////
    if (this.player.canMove.right) this.player.moveRight()
    if (this.player.canMove.up) this.player.jump()
  }
}
