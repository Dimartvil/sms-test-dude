const config = require('../config')
const client = require('twilio')(config.accountSid, config.authToken);
require('dotenv').config();

async function sendMessage(body, phone){
  try{
      const message = await client.messages.create({
      to: phone,
      from: process.env.NUMBER,
      body: body
      })
      console.log(message.sid);
      return message;
  }catch(error){
    console.log(error);
  }

}

module.exports = {sendMessage};