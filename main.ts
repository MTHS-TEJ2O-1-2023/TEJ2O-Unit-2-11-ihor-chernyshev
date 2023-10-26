/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Oct 2023
 * This program ...
*/

// crearing numbers
const randomNumberOne = randint(0, 99)
const randomNumberTwo = randint(0, 99)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shows #1
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showString('#1 :'); basic.showNumber(randomNumberOne)
  basic.showIcon(IconNames.Happy)
})

// shows #2
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('#2 :'); basic.showNumber(randomNumberTwo)
  basic.showIcon(IconNames.Happy)
})

// shows which number is bigger
input.onGesture(Gesture.Shake, function () {
  if (randomNumberOne > randomNumberTwo) {
    basic.clearScreen()
    basic.showNumber(randomNumberOne); basic.showString('>'); basic.showNumber(randomNumberTwo)
    basic.showIcon(IconNames.Sad)
  } else {
    basic.clearScreen()
    basic.showNumber(randomNumberOne); basic.showString('<'); basic.showNumber(randomNumberTwo)
    basic.showIcon(IconNames.Sad)
  }
})
