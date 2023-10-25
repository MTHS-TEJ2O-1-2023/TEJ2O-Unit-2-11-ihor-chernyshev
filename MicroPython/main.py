"""
Created by: Ihor Chernyshev
Created on: Oct 25
This module is a Micro:bit MicroPython program
"""

from microbit import *
import random

randomNumberOne = random.randint(0, 99)
randomNumberTwo = random.randint(0, 99)

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.was_pressed():
        display.show(randomNumberOne)
