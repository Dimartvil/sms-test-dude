const {Router} = require('express');
const router = Router();

const {indexController, postMessage, receiveMessage} = require('../controllers/index.controller');

router.get('/', indexController);

router.post('/send-sms',postMessage);

router.post('/new-sms', receiveMessage)


module.exports = router;