/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Sep 2023
 * This program shows a temperature of a microprocessor
*/

let t = input.temperature()

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  input.temperature()
    basic.showString('The temperature is:' + (t.toString()) + 'C')
})
