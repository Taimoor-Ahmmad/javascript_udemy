/*Activaing strict mode---->should be on the top always
for avoiding accidental errors in the code
1.Creates visible errors for us
2.forbids us to do certain tasks*/

"use strict";

let hasPassDrivingLiscence = true;
const passTest = true;

if (passTest) hasPassDrivingsLiscence = true;
if (hasPassDrivingLiscence) console.log("I can drive");

const interface = "Audio"; //error-->reserved words
const private = 534; //error--->reserved words


