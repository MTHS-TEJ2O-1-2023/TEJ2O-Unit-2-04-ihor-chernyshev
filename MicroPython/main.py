"""
Created by: Ihor Chernyshev
Created on: Sep 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.was_pressed():
        display.scroll(temperature())