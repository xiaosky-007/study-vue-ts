module.exports=(option,app)=>{
    //option app 中间键必写
    return async function gzip (ctx,next){
        // console.log(new Date)
        await next()
    }

}