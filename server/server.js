const express = require('express');
//新建app
const mongoose  = require('mongoose');
//链接mongo
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function () {
    console.log("链接数据库成功")
});
//类似于mysql的表 mongo里有文档 字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}));
//新增数据
// User.create({
//     user:'aaaaaaa',
//     age:55
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// });

//新建app
const app = express();
//删除数据
User.remove({age:55},function(err,doc){
    if(!err){
        console.log('delete success');
        User.find({},function(e,d){
            console.log(d)
        })
    }
});
//改
User.update({'user':'Uzi'},{'$set':{age:30}},function(err,doc){
    console.log(doc)
});

app.get('/',function(req,res){
   res.send('aaa')
});
app.get('/data',function(req,res){
   User.find({user:'Uzi'},function(err,doc){
       res.json(doc)
   })
});
app.listen(9093,function(){
    console.log('node app start at port 9093')
});
