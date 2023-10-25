/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Oct 2023
 * This program ...
*/

const rno = randint(0, 99)
const rnt= randint(0, 99)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.showString('# 1 :' + rno.toString())
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  basic.showString('#2 :' + rnt.toString())
  basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
  if (rno > rnt) {
    basic.showString(rno.toString() + '>' + rnt.toString())
    basic.showIcon(IconNames.Sad)
  } else {
    basic.showString(rno.toString() + '<' + rno.toString())
    basic.showIcon(IconNames.Sad)
  }
})
