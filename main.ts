let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        angle = index * 10 + 10
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
    for (let index2 = 0; index2 <= 16; index2++) {
        angle = index2 * -5 - 170
        servos.P0.setAngle(angle)
    }
})
