def on_bluetooth_connected():
    basic.show_string("Ligado")
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_string("Desligado")
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

bluetooth.start_uart_service()
basic.show_leds("""
    # . . # #
    # . # . .
    # . . # .
    # # # . #
    . . # # .
    """)