const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },

    framesCounter: 0,

    background: undefined,
    player: undefined,
    keys: {
        RIGHT: "ArrowRight",
        LEFT: "ArrowLeft",
        JUMP: "ArrowUp"
    },

    init() {
        this.setDimensions()
        this.setEventListerners()
        this.start()
    },

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    setEventListerners() {
        document.addEventListener("keydown", e => {
            switch (e.code) {

                case this.keys.JUMP:
                    this.player.jump()
                    break;
                case this.keys.RIGHT:
                    this.player.move()
                    break;
            }
        })
    },

    start() {
        this.createElements()
        this.gameLoop()
    },

    gameLoop() {
        this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

        this.moveAll()
        this.clearAll()

        window.requestAnimationFrame(() => this.gameLoop())
    },

    moveAll() {
        this.background.move()
        this.player.move()
    },

    gameOver() {
        alert('GAME OVER')
    }

}