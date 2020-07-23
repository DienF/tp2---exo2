function chute() {
    
    goutte = randint(0, 4)
    while (i < 4) {
        led.plot(goutte, i)
        basic.pause(500)
        led.unplot(goutte, i)
        i += 1
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (truc != 0) {
        led.unplot(truc, 4)
        truc += -1
        led.plot(truc, 4)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (truc != 4) {
        led.unplot(truc, 4)
        truc += 1
        led.plot(truc, 4)
    }
    
})
let i = 0
let goutte = 0
let truc = 0
truc = 2
led.plot(truc, 4)
chute()
basic.forever(function on_forever() {
    if (true) {
        
    }
    
})
