def on_button_pressed_a():
    cuteBot.forward()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    cuteBot.stopcar()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    cuteBot.backforward()
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_leds("""
    # . . # #
    # . # . .
    # . . # .
    # # # . #
    . . # # .
    """)

def on_forever():
    while True:
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0x00ffff)
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0x0000ff)
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xffffff)
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0x007fff)
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0x0000ff)
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xffffff)
basic.forever(on_forever)
