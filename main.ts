radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0.1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
