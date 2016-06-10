# _You've Been Ponged_

#### _PingPong Game based on division, 6/9/2016_

#### By _**Brian Grant**_

## Description

_User will enter in their name, a number, and their guesses for how many numbers between 1 and the number are divisible by 3, how many are divisible by 5, and how many are divisible by 3 and 5. Will display a list showing numbers with those divisible by 3 replaced by ping, those divisible by 5 replaced by pong, and those divisible by 3 and 5 replaced by pingpong. If user guessed 2 out of 3 correct will be declared winner._

## Specifications

* _It will take user input and produce output:
  * Example Input: 45   Example Output: 45_
* _It will validate if input number valid:
  * Example Input: 25   Example Output: true
  * Example Input: boy  Example Output: false
  * Example Input:      Example Output: false_
* _It will validate if input number is positive integer:
  * Example Input: 0    Example Output: false
  * Example Input: -5   Example Output: false
  * Example Input: 15   Example Output: true_
* _It will make an array of integers between 1 and the input number:
  * Example Input: 10   Example Output: [1,2,3,4,5,6,7,8,9,10]_
* _It will find which numbers in array are divisible by 3:
  * Example Input: [1,2,3,4,5,6,7,8,9,10]   Example Output: [3,6,9]_
* _It will find which numbers in array are divisible by 5:
  * Example Input: [1,2,3,4,5,6,7,8,9,10]   Example Output: [5,10]_
* _It will find which numbers in array are divisible by 3 and 5:
  * Example Input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]   
    Example Output: [15]_
* _It will replace numbers only divisible by 3 with the word ping
  * Example Input: [1,2,3,4,5,6,7,8,9,10]
    Example Output: [1,2,ping,4,5,ping,7,8,ping,10]_
* _It will replace numbers only divisible by 5 with the word pong
  * Example Input: [1,2,ping,4,5,ping,7,8,ping,10]
    Example Output: [1,2,ping,4,pong,ping,7,8,ping,pong]_
* _It will replace numbers divisible by 3 and 5 with the word pingpong
  * Example Input: [1,2,ping,4,5,ping,7,8,ping,10,11,ping,13,14,15]
    Example Output: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong]_
* _It will take number input and output array to screen in an ordered list
  * Example Input: 15
    Example Output: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong]_
* _It will validate name entered:
  * Example Input: Brian Example Output: true
    Example Input:       Example Output: false_
* _It will validate if ping guess number valid:
  * Example Input: 25   Example Output: true
  * Example Input: boy  Example Output: false
  * Example Input:      Example Output: false_
* _It will validate if ping guess is positive integer:
  * Example Input: 0    Example Output: false
  * Example Input: -5   Example Output: false
  * Example Input: 15   Example Output: true_
* _It will validate if pong guess number valid:
  * Example Input: 25   Example Output: true
  * Example Input: boy  Example Output: false
  * Example Input:      Example Output: false_
* _It will validate if pong guess is positive integer:
  * Example Input: 0    Example Output: false
  * Example Input: -5   Example Output: false
  * Example Input: 15   Example Output: true_
* _It will validate if pingpong guess number valid:
  * Example Input: 25   Example Output: true
  * Example Input: boy  Example Output: false
  * Example Input:      Example Output: false_
* _It will validate if pingpong guess is positive integer:
  * Example Input: 0    Example Output: false
  * Example Input: -5   Example Output: false
  * Example Input: 15   Example Output: true_
* _It will calculate number of pings:
  * Example Input: 15   Example Output: 4_
* _It will calculate number of pongs:
  * Example Input: 15   Example Output: 2_        
* _It will calculate number of pingpongs:
  * Example Input: 15   Example Output: 1_  
* _It will compare number of pings to ping guess, if guess correct output true:
  * Example Input: 3,2   Example Output: false
  * Example Input: 3,3   Example Output: true_  
* _It will compare number of pongs to pong guess, if guess correct output true:
  * Example Input: 3,2   Example Output: false
  * Example Input: 3,3   Example Output: true_  
* _It will compare number of pingpongs to pingpong guess, if guess correct output true:
  * Example Input: 3,2   Example Output: false
  * Example Input: 3,3   Example Output: true_
* _It will display winner or looser text and image depending on outcome of correct guess on 2 of 3:
  * Example Input: 2 wins   Example Output: true
  * Example Input: 1 win   Example Output: false_
  
## Setup/Installation Requirements

* _Open page in web browser_

## Known Bugs

_No none bugs._

## Support and contact details

_contact me @ bhgrant8@gmail.com_

## Technologies Used

_This page uses html, css, javascript, Bootstrap v3, and jQuery-1.12.4_

### License

*Open GL license*

Copyright (c) 2016 **_Brian H Grant_**
