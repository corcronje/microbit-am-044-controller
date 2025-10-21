function goBackward () {
    radio.sendString("BW")
}
function goForward () {
    radio.sendString("FW")
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
function goRight () {
    radio.sendString("R")
}
function goLeft () {
    radio.sendString("L")
}
input.onButtonPressed(Button.B, function () {
    tiltContol = !(tiltContol)
    if (tiltContol == true) {
        basic.showString("T")
    } else {
        basic.showString("O")
    }
})
let X = 0
let Y = 0
let tiltContol = false
radio.setGroup(1)
basic.forever(function () {
    if (tiltContol) {
        Y = input.acceleration(Dimension.Y)
        X = input.acceleration(Dimension.X)
    } else {
        Y = pins.analogReadPin(AnalogPin.P1)
        X = pins.analogReadPin(AnalogPin.P2)
    }
    if (X > 700) {
        goLeft()
    }
    if (X < 300) {
        goRight()
    }
    if (Y > 700) {
        goBackward()
    }
    if (Y < 300) {
        goForward()
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showString("8")
        return
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        basic.showIcon(IconNames.Skull)
        radio.sendString("F")
        return
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showIcon(IconNames.Ghost)
        radio.sendString("E")
        return
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showIcon(IconNames.Happy)
        radio.sendString("D")
        return
    }
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showIcon(IconNames.Angry)
        radio.sendString("C")
        return
    }
})
