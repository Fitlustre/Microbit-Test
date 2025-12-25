input.onButtonPressed(Button.A, function () {
    cuteBot.forward()
})
input.onButtonPressed(Button.AB, function () {
    cuteBot.stopcar()
})
input.onButtonPressed(Button.B, function () {
    cuteBot.backforward()
})
basic.showLeds(`
    # . . # #
    # . # . .
    # . . # .
    # # # . #
    . . # # .
    `)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ffff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffffff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffffff)
})
