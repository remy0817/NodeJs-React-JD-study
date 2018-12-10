/**
 * @authors remy
 * @creatTime 2018-12-03 09:31:28
 * @description 
 * @version 0.0.1
 */

const Sequelize = require('sequelize'),
  config = require('../config/mysql'),
  typeUtil = require('../utils/type');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 5,
    idle: 30000
  }
});

function initModel(name, options) {
  const opts = {};
  Object.keys(options).forEach(field => {
    const item = opts[field] = {};
    const props = options[field];
    if(props.type){
      item.type = typeUtil.isNumber(props.len) ? Sequelize[props.type](props.len) : Sequelize[props.type];
    }else{
      throw new Error(`model ${name} 的屬性 ${field} 未定义数据类型type`);
    }
    props.primaryKey === true && (item.primaryKey = true);
    typeUtil.isBoolean(props.allowNull) && (item.allowNull = props.allowNull);
    typeUtil.isObject(props.validate) && (item.validate = props.validate);
  });
  const model = sequelize.define(name, opts, {
    timestamps: false
  });
  return model;
}

module.exports = {
  sequelize: sequelize,
  initModel: initModel
};