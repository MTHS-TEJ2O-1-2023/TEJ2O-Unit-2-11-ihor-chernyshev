/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Oct 2023
 * This program ...
*/

const randomNumberOne = randint(0, 99)
const randomNumberTwo = randint(0, 99)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.showString('#1 :'); basic.showNumber(randomNumberOne)
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  basic.showString('#2 :'); basic.showNumber(randomNumberTwo)
  basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
  if (randomNumberOne > randomNumberTwo) {
    basic.showNumber(randomNumberOne); basic.showString('>'); basic.showNumber(randomNumberTwo)
    basic.showIcon(IconNames.Sad)
  } else {
    basic.showNumber(randomNumberOne); basic.showString('<'); basic.showNumber(randomNumberTwo)
    basic.showIcon(IconNames.Sad)
  }
})
