'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    console.log(ctx.request.body)
    ctx.body = ctx.request.body;
  }
}

module.exports = UserController;
