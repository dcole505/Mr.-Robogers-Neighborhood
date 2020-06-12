# _{Mr.-Robogers-Neighborhood}_

#### _{This applications serves as practice on arrays and loops and allows the user to enter a number and recieve a response depending on the input.}, {6/12/2020}_

#### By _**{David Cole}**_

## Description

_This application was build using HTML, CSS, Bootstrap 3.3.7 JavaScript, and jQuery 3.5.1. The purpose of this project is to create a functional website which allows the user to enter a numerical input. The program will then use the business logic portion of the scripts.js file to process the input and determine if it is valid. If it is, the program will perform various logical checks to determine which response to output to the user. If the user fails to enter the correct input type, the program will continue to prompt them for input until they succeed._

## Specs

* Spec: The program continues to prompt for input if the user inputs non-numerical character
  * Input: "dav"
  * Output: "Please enter a valid numerical input"
* Spec: The program returns a range of numbers from 0 to the users inputted number
  * Input: "4"
  * Output: "0, 1, 2, 3, 4"
* Spec: The program replaces ALL instances of the number 1 with "Beep!"
  * Input: "11"
  * Output: "Beep!, Beep!
* Spec: The program replaces ALL instances of the number 2 with "Boop"
  * Input: "22"
  * Output: "Boop, Boop"
* Spec: The change to number 2 will take precedence over the change to number 1. Those changes will be ignored.
  * Input: "12"
  * Output: "Boop"
* Spec: The program replaces ALL instances of the number 3 with "Won't you be my neighbor?"
  * Input: "33"
  * Output: "Won't you be my neighbor?, Won't you be my neighbor?"
* Spec: The change to number 3 will take precedence over the changes to 1 & 2. Those changes will be ignored.
  * Input: "123"
  * Output: "Won't you be my neighbor?"


## Setup/Installation Requirements

* _In your web browser, navigate to [dcole505 Mr.-Robogers-Neighborhood repository](https://github.com/dcole505/Mr.-Robogers-Neighborhood)_
* _In terminal, type '$ git clone https://github.com/dcole505/Mr.-Robogers-Neighborhood.git' To clone the project from GitHub onto your local machine_
* _Navigate to the file folder that contains the GitHub repository you've cloned._
* _Right click on the .HTML file and open it in your web browser to view_
* _or_
* _Open the file in the IDE of your choice to make changes to the file._


## Known Bugs

_Bugs go here_

## Support and contact details

_For bugs or any other issues relating to this project, contact: David Cole - davidtcole@yahoo.com_

## Technologies Used

_HTML, CSS, JavaScript, jQuery 3.5.1, Bootstrap 3.3.7, GitHub_

### License

*MIT License

Copyright (c) [2020] [David Cole]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (my-portfolio), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*