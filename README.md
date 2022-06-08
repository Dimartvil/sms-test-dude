ABOUT
-----

This is a small app that works with Twilio to send messages to a mobile phone number and also to receive messages.

HOW TO USE
-----------

To send a message first we need to register our phone number here:

https://console.twilio.com/us1/develop/phone-numbers/manage/verified?frameUrl=%2Fconsole%2Fphone-numbers%2Fverified%3Fx-target-region%3Dus1

I will send credentials by mail.
After we register our number we can send a message from the app.

To send a message to the application we need to send a regular message to a specific phone number that I will send by mail too. 
Messages should be displayed instantly. 

NOTE: To be able to receive messages we need to have a real online URL.
For testing, I used ngrok to create a temporal tunnel from local to the web. 

I will send a small use tutorial video.

TOOLS
-----------
Main tools:
Node.js
Express 
Sockets.io
MongodbAtlas
Twilio

Helpers:
Bootstrap
Notifimy 
timeago

COMMANDS
--------
npm run dev -> developtment
npm start -> deployment



ENVS
----

ACCOUNT -> twilio
TOKEN -> twilio
NUMBER -> twilio
DATABASE -> mongodb atlas
PORT -> default