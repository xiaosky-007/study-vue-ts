// app/extend/application.js
module.exports = {
    foo(param) {
      // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
      // console.log(this.config.api)
      return this.config.api
    },
  };