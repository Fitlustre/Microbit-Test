# Quando botão A é pressionado, o carro anda em oito.

def on_button_pressed_a():
    while True:
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
input.on_button_pressed(Button.A, on_button_pressed_a)

# Quado o botão "AB" é pressionado, segue andando ao longo da linha preta

def on_button_pressed_ab():
    while True:
        if cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
            for index in range(3):
                cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff0000)
                basic.pause(100)
                cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0x00ffff)
            cuteBot.motors(50, 0)
        if cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
            for index2 in range(3):
                cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff0000)
                basic.pause(100)
                cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0x00ffff)
            cuteBot.motors(0, 50)
        if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
            cuteBot.motors(100, 100)
        if input.button_is_pressed(Button.B):
            break
input.on_button_pressed(Button.AB, on_button_pressed_ab)

#Stop the car
def on_button_pressed_b():
    cuteBot.stopcar()
input.on_button_pressed(Button.B, on_button_pressed_b)

# Led "LS"
basic.show_leds("""
    # . . # #
    # . # . .
    # . . # .
    # # # . #
    . . # # .
    """)