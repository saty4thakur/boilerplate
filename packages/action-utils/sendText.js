const { allPages } = require(`${process.cwd()}/PageObjects/allPages`);
const { expect } = require('chai')
const assertionUtils = require('../Assertions/index');
const { logs } = require('../Logs/log');

let msg = '';

const enterText = async (valueToSend, locatorKey) => {
  console.log('function to enter text in a text field');
}


module.exports = {
  enterText,

}
