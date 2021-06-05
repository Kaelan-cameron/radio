radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("left", 0.1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("left", 0.2)
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("left", input.rotation(Rotation.Roll))
    basic.pause(500)
})
