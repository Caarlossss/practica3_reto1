basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.pause(500)
    } else {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    }
})
