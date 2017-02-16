# Frontend frameworks / libraries comparison 

I'm setting out on a journey to test different front-end frameworkrs / libraries and see how they compare with standard javascript. 

The goal is to implement a simple script that inspect a page where there are input text controls with class "perc_input" and then make sure that the sum of the value of all the controls (inside one div block) is always 100 (Basically i'm implementing a percentage input block). 

To start with i would like to compare: 

* Default Javascript 
* AngularJS
* React 

Let's get started....

# Javascript 

The javascript one was obviously the easiest to start. No learning curve (if you already know javascript and DOM). Only discovery was that i could use Arry.from (part of ES6) in Chrome (basic support from version 45). I used this to iterate through the div and inout elements in the page. I later discovered i could use instead document.querySelectorAll() which already returned an object that can be iterate with forEach. 

§ 
