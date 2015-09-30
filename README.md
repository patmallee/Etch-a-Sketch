Etch-A-Sketch

This project was put together as an assignment for the Odin Project's introductory section.

I was very new to the world of CSS and JQuery when I first wrote this (So try not to go too hard on me!). But suggestions are very much welcome, as I'd like to come back to it and expand upon it (as other students have done) in the near future once I work through some more front-end projects.

Assignment was to build a webpage that acted as an Etch-a-Sketch screen by using JQuery hover calls to add color to moused-over spaces.


In my rendition, each pass over with the mouse pointer will darken a pixel by 10% until it reaches full opacity. This is accomplished with JQuery calls that modify the CSS opacity setting for that individual pixel.

Each time the user resets the screen, they are asked how big of a new screen they would like. The program will create a new grid of n-by-n 'pixels', where 'n' is the user's input value. Pixels will be sized appropriately to fill the 400-by-400px screen space.


Finished repo contains 4 files:

1. index.html - actual webpage
2. EAS.css - typical css script, contains classes for both pre- and post-hovered states
3. EAS.js - contains JQuery commands to modify tile classes and rest board on button click
4. This Readme