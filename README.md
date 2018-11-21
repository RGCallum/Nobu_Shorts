# Nobu Filmmakers, a database App created by Rashaunda Guy-Callum

Overview For project #3, I created an app for Independent Filmmakers to showcase their work and connect with other filmmakers. Once new filmmakers sign-up, their film profile is shown on the Featured Filmmakers page, where they can add, edit and delete their film information. Filmmakers can also edit and delete their profile if they so choose. 

The point is to give independent filmmakers without a huge budget a platform to showcase their work when they can't afford the cost of paying a wonderful web developer like myself to build a personal website. Companies like IMDB only display your work after you've been nominated for awards. NoBu Filmmakers get the chance to create a buzz around their film before it even hits the festival circuit! Although their films may have been produced with "No Budget" it can still be treated like a Blockbuster.

For the styling I was determined not to use any libraries as I wanted to hone my CSS skills in React and the Bootstrap NavBar that I used last time was a nightmare. Turns out it was pretty easy and allowed me to easily jump back and forth in between CSS and functions with ease. I even got to code a few animations on text as it actually took less than an hour to get through.  I didn't do as much photoshopping as I normally do, as I was pretty busy with the react functions, but hey somebody had to make that filmstrip vertical and of course none were availabe online.

##Struggles... 😭 
Oh where do I start... I got my routes set-up pretty easily an earlier on so I assumed that most of my battle would be over. How wrong was I!!!!!! Just getting information to show on the screen is a challenge. then once that happens, trying to make to it change dynamically is a challenge in and of itself. Then once I got through that part, I was faced with the notorious update and delete button horrors of no errors and nothing happening! But boy that react inspect tool in definitely a life saver. After finally getting full crud on two models, I'd assumed that I would just be styling the day before the deadline. Wrong Again!! All of a sudden my update is not working on my second model and heroku only shows the idiotic message "WTF is up World" (because I'm soooooo over "Hello World" at this point) I told it to say instead of my actual app.
After struggling with that for a few hours, I finally realized that I had 2 app.get routes in my server.js and since it's read from the top, it never hit my res.send build route. I feel like I struggled the most with this project than any of the others... both with concept and functionality, but if you're reading this I did actually get through it so Yay Me! I wanted to do so much more with this app like adding the socket io chat window, Youtube and Social Searcher APIs but I just literally ran out of time. The good in this situation though is that like always, I've learned so much, and the more problems you run into, the better the debugger it'll make you.💪


## Weblink: https://nobu-filmmakers.herokuapp.com/

## Trello link: https://trello.com/b/ye1Mz1dA/nobu-shorts

## Technologies Used:
Languages - HTML5, CSS3, Javascript, React

Design - Animista.net

Software - Visual Studio, PhotoShop, Handlebars, Express, NodeJS, MongoDB, Mongoose, and Google, Google and more Google.

## Project Planning & User Stories - Trello
Wireframe handwritten on whiteboard

ERD by LucidChart

## Version 2
Social Searcher API

Youtube/Vimeo API 

Chat functionality

User authentication

Better text style

