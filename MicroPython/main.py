"""
Created by: Ihor Chernyshev
Created on: Oct 25
This module is a Micro:bit MicroPython program
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
        display.show("# 1 :" + str(randomNumberOne))
    # shows #2
    if button_b.was_pressed():
        display.show("# 2 :" + str(randomNumberTwo))
    # shows which number is bigger
    if randomNumberOne > randomNumberTwo:
        display.show(str(randomNumberOne) + ">" + str(randomNumberTwo))
    else:
        display.show(str(randomNumberOne) + "<" + str(randomNumberTwo))
