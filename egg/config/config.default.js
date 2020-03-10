/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582698641638_6602';
  config.cluster = {
    listen: {
      port: 8080,
    },
  };
  config.view = {
    mapping: {
      '.html': 'ejs' //左边写成.html后缀，会自动渲染.html文件
    },
  };
  //session配置
  config.session = {
    key: 'neeplus',
    maxAge: 1800 * 1000,
    httpOnly: true,
    encrypt: true,
    renew: true,
  };
  // add your middleware config here
  config.middleware = [
    // 'interceptor',
    'gzip',
    'forbidIp',
    'auth'
  ];
  // config.compress = {
  //   threshold: 2048,
  // };
  config.api = ''
  config.mysql = {
    //database configuration 
    client: {
      //host 
      host: 'localhost',
      //port 
      port: '3306',
      //username 
      user: 'root',
      //password 
      password: '123456',
      //database 
      database: 'test'
    },
    //load into app,default is open //加载到应用程序，默认为打开
    app: true,
    //load into agent,default is close //加载到代理中，默认值为“关闭”
    agent: false,
  };
  config.gzip = {
    params: '你好'

  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};