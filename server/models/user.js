/**
 * @filename 
 * @authors remy
 * @creatTime 2018-11-30 15:00:35
 * @description 
 * @version 0.0.1
 */

const { sequelize, initModel } = require('./index'),
  uuidv1 = require('uuid/v1');

// Model与数据库的映射
const mapping = {
  id: {
    type: 'STRING',
    len: 64,
    primaryKey: true
  },
  username: {
    type: 'STRING',
    len: 64,
    allowNull: false,
    validate: {
      len: {
        args: [2, 20],
        msg: '请输入2到20位用户名'
      }
    }
  },
  password: {
    type: 'STRING',
    len: 64,
    validate: {
      len: {
        args: [6, 16],
        msg: '请输入6到16位密码'
      }
    }
  },
  cellphone: {
    type: 'STRING',
    len: 16,
    validate: {
      isCellphone(value){
        if(!(/^1[3456789][0-9]{9}$/.test(value))){
          throw new Error('无效的手机号码');
        }
      }
    }
  },
  email: {
    type: 'STRING',
    len: 64,
    validate: {
      isEmail: {
        msg: '无效的邮箱'
      }
    }
  },
  createtime: {
    type: 'DATE'
  },
  updatetime: {
    type: 'DATE'
  },
  version: {
    type: 'BIGINT',
    len: 20
  }
},
  editFields = ['username', 'cellphone', 'email'],
  queryFields = ['username', 'cellphone', 'email'];

const Model = initModel('user', mapping);

async function findAll(query) {
  const _query = {};
  queryFields.forEach(field => {
    const value = query[field];
    value && (_query[field] = value);
  });
  return await Model.findAll({
    where: _query
  });
}

async function findById(id) {
  if(!id) throw new Error('Validation error: 缺少参数id');
  const model = await Model.findByPk(id);
  if(model){
    return model;
  }else{
    throw new Error('Validation error: 用户不存在');
  }
}

async function findOne(query){
  if(!query.username || !query.password){
    throw new Error('Validation error: 缺少参数username或password');
  }
  const model = await Model.findOne({
    where: {
      username: query.username,
      password: query.password
    }
  });
  if(model){
    return model;
  }else{
    throw new Error('Validation error: 用户名或密码错误');
  }
}

// 生成一个数据库没有的UUID，保证唯一性
async function generateUUID(){
  const id = uuidv1();
  const model = await findById(id);
  if(model){
    return await generateUUID();
  }else{
    return id;
  }
}

async function create(data){
  const formData = {
    id: await generateUUID(),
    createtime: Date.now(),
    password: data.password,
    version: 1
  };
  editFields.forEach(field => {
    formData[field] = data[field];
  });
  return await Model.create(formData);
}

async function update(data){
  const model = await findById(data.id);
  editFields.forEach(field => {
    model[field] = data[field];
  });
  model.updatetime = Date.now();
  model.version++;
  return await model.save();
}

async function updatePwd(data){
  const model = await findById(data.id);
  if(!data.oldPwd){
    throw new Error('Validation error: 缺少参数oldPwd');
  }
  if(!data.newPwd){
    throw new Error('Validation error: 缺少参数newPwd');
  }
  if(model.password === data.oldPwd){
    model.password = data.newPwd;
    model.version++;
  }else{
    throw new Error('Validation error: 旧密码不正确');
  }
  return await model.save();
}

async function del(id){
  const model = await findById(id);
  return await model.destroy();
}

module.exports = {
  findAll: findAll,
  findById: findById,
  findOne: findOne,
  create: create,
  update: update,
  updatePwd: updatePwd,
  del: del
};