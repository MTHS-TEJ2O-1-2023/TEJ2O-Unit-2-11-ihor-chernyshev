"""
Created by: Ihor Chernyshev
Created on: Oct 25
This program compare random numbers on MicroBit
"""

from microbit import *
import random

# creating numbers
randomNumberOne = random.randint(0, 99)
randomNumberTwo = random.randint(0, 99)

# setup
display.clear()
display.show(Image.HAPPY)

while True:
    # shows #1
    if button_a.was_pressed():
        display.scroll("# 1 :" + str(randomNumberOne))
        display.show(Image.HAPPY)
    # shows #2
    if button_b.was_pressed():
        display.scroll("# 2 :" + str(randomNumberTwo))
        display.show(Image.HAPPY)
    # shows which number is bigger
    if accelerometer.was_gesture('shake'):
        if randomNumberOne > randomNumberTwo:
            display.scroll(str(randomNumberOne) + ">" + str(randomNumberTwo))
            display.show(Image.SAD)
        else:
            display.scroll(str(randomNumberOne) + "<" + str(randomNumberTwo))
            display.show(Image.SAD)
