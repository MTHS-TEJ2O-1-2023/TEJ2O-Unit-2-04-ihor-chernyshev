/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Sep 2023
 * This program shows a temperature of a microprocessor
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let temperature = 0
temperature = input.temperature()

input.onButtonPressed(Button.A, function () {
  basic.showString('The temperature is:' + (temperature).toString() + 'C')
})
