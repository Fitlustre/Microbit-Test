input.onButtonPressed(Button.A, function on_button_pressed_a() {
    cuteBot.forward()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    cuteBot.stopcar()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    cuteBot.backforward()
})
basic.showLeds(`
    # . . # #
    # . # . .
    # . . # .
    # # # . #
    . . # # .
    `)
while (true) {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ffff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffffff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffffff)
}
