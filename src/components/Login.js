import React from "react";
import { Button,NavBar, InputItem  } from 'antd-mobile';
class Login extends React.Component{
    render(){
        return(
            <div>
                <NavBar mode="dark">登录</NavBar>
                <InputItem clear placeholder="请输入手机号" ref="ipt">手机号</InputItem>
                <InputItem clear placeholder="请输入验证码">验证码</InputItem>
                <Button type="primary" >登录</Button>
           
            </div>
        )
    }
}
export default Login;