module.exports=(option,app)=>{
    //option app 中间键必写
    return async function forbidIp (ctx,next){
        console.log(ctx.request.ip)
        
        var ip="127.0.0.1"
        await next()
    }

}