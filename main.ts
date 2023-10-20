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
  basic.showString('#1 :'+ (randomNumberOne).toString())
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  basic.showString('#2 :' + (randomNumberTwo).toString())
  basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
  if (randomNumberOne > randomNumberTwo) {
    basic.showString((randomNumberOne).toString() + '>' + (randomNumberTwo).toString())
  }

  else {
    basic.showString((randomNumberOne).toString() + '<' + (randomNumberTwo).toString())
  }
  
  if (randomNumberOne === randomNumberTwo) {
      basic.showString((randomNumberOne).toString() + '=' + (randomNumberTwo).toString())
  }
})
