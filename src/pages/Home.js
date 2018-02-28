import React,{ Component } from 'react';
import MyHeader from '../components/MyHeader.js';
import "../css/Home.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Homecontent from '../components/Homecontent';
import Footer from '../components/Footer';
//评论区的样式
import { Input } from 'antd';
import { message,Button } from 'antd';

const success = () => {
  message.success('发表成功，接下来去留言板看看吧');
};
const warning = () => {
  message.warning('还未填写留言哦，请返回填写');
};
const { TextArea } = Input;



class Home extends Component{
	constructor(){
		super();
		this.state = {
			username:"",
			content:""
		}
		this.handleUser = this.handleUser.bind(this);
		this.handleContent = this.handleContent.bind(this);
		this.handleSub = this.handleSub.bind(this);
	}
	handleUser(event){
		this.setState({
			username: event.target.value
		}) 
	}
	handleContent(event){
		this.setState({
			content: event.target.value
		})
	}
	//提交评论
	handleSub(){
		//判断输入
		if(!this.state.username||!this.state.content){
			warning();
		}else{//如果填写了内容之后
			const items = {
				username:this.state.username,
				content:this.state.content
			}
			//首先清空所有输入框
			this.setState({
				username:"",
				content:""
			})
					
			let getdatalist = JSON.parse(localStorage.getItem('datalist'))||[];
			//存入
			if(getdatalist){
					getdatalist.push(items);
					localStorage.setItem('datalist',JSON.stringify(getdatalist))
//					console.log(getdatalist)
					success()
					window.location.href='/message';
				}
			}		
	}
	
	render(){
		var obj = {
			width:"100%",
			height:"400px"
		}
		return(
			<ReactCSSTransitionGroup
		             transitionName='exampleheader'
		             transitionAppear={true}
		             transitionAppearTimeout={1000}>
						 <div className="homebox">
						 	<MyHeader/>
						 </div>
							<p></p>
							
						<Homecontent/>
				<div className="Sendmsg">
					<Input value={this.state.username} onChange={this.handleUser} placeholder="不如留下您的笔名" />
					<br/>
					<br/>
					<TextArea value={this.state.content} onChange={this.handleContent} rows={6} placeholder="顺便留下您想说的，我会展示到我的留言板"/>
					<br/><br/>
					<Button onClick={this.handleSub}
					   style={{width:190,height:40,fontSize:"16px",fontWeight:300,position: "relative",top:"10px",left:"40%"}} type="primary">提交留言</Button>
				</div>
						<Footer/>
		    </ReactCSSTransitionGroup>
			
			
		)
	}
}

export default Home;