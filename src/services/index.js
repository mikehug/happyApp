'use strict';
const aiapi = require('./aiapi');
const messages = require('./messages');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(messages);
  app.configure(aiapi);
};
