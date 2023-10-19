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
  basic.showNumber(randomNumberOne)
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  basic.showNumber(randomNumberTwo)
  basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
  if (randomNumberOne > randomNumberTwo) {
    basic.showString('1st < 2nd')
}
  else {
    basic.showString('1st > 2nd')
  }
  if (randomNumberOne === randomNumberTwo) {
    basic.showString('1st = 2nd')
  }
})
