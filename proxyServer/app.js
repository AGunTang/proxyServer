// 导入express
const express = require('express')
const axios = require('axios')

// 创建app
const app = express()

// 后台开启CORS，允许跨域
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authentication')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    next()
})

// 监听浏览器的请求
app.get('/api/movie/top250',(req,res) => {
   axios.get('http://api.douban.com/v2/movie/top250').then(result=>{
        // console.log(res.data)
        res.send(result.data)
   })
})

// 开启监听
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }

    console.log('star ok!!!')
})
//运行文件 nodemon server/chatServer/app.js