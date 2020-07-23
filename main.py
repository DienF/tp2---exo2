def on_button_pressed_a():
    global truc
    if truc != 0:
        led.unplot(truc, 4)
        truc += -1
        led.plot(truc, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global truc
    if truc != 4:
        led.unplot(truc, 4)
        truc += 1
        led.plot(truc, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

i = 0
goutte = 0
truc = 0
score = 0
truc = 2
led.plot(truc, 4)

def on_forever():
    global goutte, i, score
    goutte = randint(0, 4)
    while i < 4:
        led.plot(goutte, i)
        basic.pause(500)
        led.unplot(goutte, i)
        i += 1
    if goutte == truc:
        score += 1
    else:
        basic.show_string("Score:")
        basic.show_number(score)
basic.forever(on_forever)
