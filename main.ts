input.onButtonPressed(Button.A, function () {
    if (truc != 0) {
        led.unplot(truc, 4)
        truc += -1
        led.plot(truc, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (truc != 4) {
        led.unplot(truc, 4)
        truc += 1
        led.plot(truc, 4)
    }
})
let i = 0
let goutte = 0
let truc = 0
let score = 0
truc = 2
led.plot(truc, 4)
basic.forever(function () {
    goutte = randint(0, 4)
    i = 0
    while (i < 4) {
        led.plot(goutte, i)
        basic.pause(400)
        led.unplot(goutte, i)
        i += 1
    }
    if (goutte == truc) {
        score += 1
        music.ringTone(523)
    } else {
        music.ringTone(175)
        basic.pause(1000)
        basic.showString("Score:")
        basic.showNumber(score)
        basic.pause(1000)
    }
})
