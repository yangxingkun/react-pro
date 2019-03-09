import React from "react";
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Index from "./Index";
import Logined from "./Logined";
import Shop from "./Shop";
import Social from "./Social";
import Active from "./Active";
import './../css/home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            str:''
        }
    }
    render(){
        return(
            <div >
                <Router>
                    <div className="zhu">
                        <header></header>
                        <div className="sec">
                        <Switch>
                            <Route path="/logined" component={Logined}></Route>
                            <Route path="/index" component={Index}></Route>
                            <Route path="/shop" component={Shop}></Route>
                            <Route path="/social" component={Social}></Route>
                            <Route path="/active" component={Active}></Route>
                            <Redirect to="/logined"/>
                        </Switch>
                        </div>
                        <footer className="foot">
                            <NavLink to="/index"><dl><dt><i class="iconfont">&#xe60b;</i></dt><dd>电影</dd></dl></NavLink>
                            <NavLink to="/active"><dl><dt><i class="iconfont">&#xe649;</i></dt><dd>活动</dd></dl></NavLink>
                            <NavLink to="/social"><dl><dt><i class="iconfont">&#xe62a;</i></dt><dd>社区</dd></dl></NavLink>
                            <NavLink to="/shop"><dl><dt><i class="iconfont">&#xe654;</i></dt><dd>商店</dd></dl></NavLink>
                            <NavLink to="/logined"><dl><dt><i class="iconfont">&#xe603;</i></dt><dd>我的</dd></dl></NavLink>
                        </footer>

                    </div>
                </Router>
            </div>
        )
    }
}
export default Home;