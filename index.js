import express from 'express';
import bodyParser from 'body-parser';
import user from './models/users.js';

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    return res.status(200).send({
        status:200,
        message: Users
    })
})
app.post('/auth/users',(req,res)=>{
    
    const newUser={
        id:user.length+1,
        email:req.body.email,
        password:req.body.password
    }
    user.push(newUser);
    
    // if (res.status == 201) {
    //     return res.status(201).send({

    //     })
    // }
    return res.status(201).send({
        status:201,
        message:"User created successfully",
        data:newUser
     })
})
app.delete('/users/:id',(req,res)=>{
    const checkUser=user.find(userId=>userId.id===parseInt(req.params.id,10));
    console.log(checkUser);
    if (!checkUser) {
        return res.status(404).send({
            status:404,
            message: `User with id ${req.params.id} not found`
        })
    }
    const index=user.indexOf(checkUser);
    user.splice(index,1);
    return res.status(200).send({
        status:200,
        message: `User with id ${req.params.id} is deleted successfully`
    })
})
app.get('/api/v1/users',(req,res)=>{
    return res.status(200).send({
        status:200,
        message:"all users successfull retrieved",
        data:user
    })
})
const port=3000;
app.listen(port,console.log(`App is running on port ${port}`));

export default index;