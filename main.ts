input.onButtonPressed(Button.A, function () {
    basic.showString("ola vc tem lixo ?")
    basic.showString("ola meu nome e lixeira jogue seu lixo aqui por favor")
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("primeiro jogue o lixo e depois aperte o botao b")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("obrigado o meio ambiente agradece")
    basic.showIcon(IconNames.Heart)
})
