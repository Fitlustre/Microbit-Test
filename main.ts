// Quando botão A é pressionado, o carro anda em oito.
input.onButtonPressed(Button.A, function () {
    while (true) {
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(100, 40)
        basic.pause(1500)
        cuteBot.forward()
        basic.pause(300)
        cuteBot.motors(40, 100)
        basic.pause(1500)
        cuteBot.forward()
        basic.pause(200)
    }
})
// Quado o botão "AB" é pressionado, segue andando ao longo da linha preta
input.onButtonPressed(Button.AB, function () {
    while (true) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            for (let index = 0; index < 3; index++) {
                cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
                basic.pause(100)
                cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ffff)
            }
            cuteBot.motors(50, 0)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            for (let index = 0; index < 3; index++) {
                cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
                basic.pause(100)
                cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ffff)
            }
            cuteBot.motors(0, 50)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(100, 100)
        }
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
// Stop the car
input.onButtonPressed(Button.B, function () {
    cuteBot.stopcar()
})
// Led "LS"
basic.showLeds(`
    # . . # #
    # . # . .
    # . . # .
    # # # . #
    . . # # .
    `)
