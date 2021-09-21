const click = require('./click');
const isPresent = require('./isPresent')
const swipe = require('./swipe');
const sendText = require('./sendText');

module.exports = {
  ...click,
  ...isPresent,
  ...swipe,
  ...sendText,
}
