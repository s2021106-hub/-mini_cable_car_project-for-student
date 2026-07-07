grove.onGesture(GroveGesture.Up, function () {
    servos.P2.stop()
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 3; index++) {
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    servos.P2.run(30)
    basic.pause(2000)
    servos.P2.run(-30)
    basic.pause(2000)
    servos.P2.stop()
})
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Happy)
servos.P2.stop()
basic.forever(function () {
    if (input.logoIsPressed()) {
        servos.P2.stop()
        basic.showIcon(IconNames.No)
    }
})
