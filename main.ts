input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    if (sprite.isTouching(treasure)) {
        game.addScore(1)
        treasure.delete()
        treasure = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let treasure: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
treasure = game.createSprite(randint(0, 4), randint(0, 4))
game.startCountdown(30000)
basic.forever(function () {
	
})
