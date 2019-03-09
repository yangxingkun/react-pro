import React from "react";
import { Button,NavBar, InputItem  } from 'antd-mobile';


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    
    render(){
       
        return(
            <div>
               <NavBar mode="dark">注册</NavBar>
               <InputItem clear placeholder="请输入手机号">手机号</InputItem>
               <InputItem clear placeholder="请输入验证码">验证码</InputItem>
              <Button type="primary"  >注册</Button>
            </div>
        )
    }
}
export default Register;