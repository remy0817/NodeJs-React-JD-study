/**
 * @authors remy
 * @creatTime 2018-12-03 11:13:48
 * @description 
 * @version 0.0.1
 */

const userControllers = require('./user'),
  testControllers = require('./test'),
  authControllers = require('./auth');

const controllers = Object.assign({}, userControllers, testControllers, authControllers);

function initControllers(router){
  Object.keys(controllers).forEach(key => {
    const [ url, method = 'get'] = key.split('|');
    const controllerFn = controllers[key];
    router[method](url, controllerFn);
  });
}

module.exports = initControllers;