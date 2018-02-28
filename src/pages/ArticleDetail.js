import React,{Component} from "react";
import axios from "axios";
import { Card } from 'antd';
import "../css/ArticleDetail.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';//页面过渡动画所需要引入的
import MyHeader from '../components/MyHeader.js';
import Footer from '../components/Footer';
import a1img from '../img/a1.png';
import yuanlione from '../img/yuanli1.jpg';
import { List, Avatar } from 'antd';
import { Button } from 'antd';
import { Tag } from 'antd';
import { message } from 'antd';

const success = () => {
  message.success('评论成功');
};
const warning = () => {
  message.warning('还未填写评论哦，不能发表');
};


class ArticleDetail extends Component{
	constructor(){
		super();
		this.state = {	
				name:"",
				content:"",
				title:"浅析图片懒加载技术",
				listarr:[]
		}
	}
	handleSubmit(){
		if(!this.refs.yourname.value||!this.refs.words.value){
			warning();
		}else{
			
			this.setState({
				name:this.refs.yourname.value,
				content:this.refs.words.value
		},function(){
			//存入数据
			let getcomment =JSON.parse(localStorage.getItem("浅析图片懒加载技术"))||[];
			let obj = {
				name:this.state.name,
				content:this.state.content
			}
//			console.log(getcomment)
				getcomment.push(obj);
//			console.log(getcomment)
				localStorage.setItem("浅析图片懒加载技术",JSON.stringify(getcomment))
				alert("成功")
			})
		}

		
	}
	//初始加载时获取
		componentWillMount(){
			if(localStorage.getItem("浅析图片懒加载技术")){
					let getcomment =JSON.parse(localStorage.getItem("浅析图片懒加载技术"))||[];
					console.log(getcomment);
					if(getcomment.length==0){
						this.state.listarr.push("暂无评论")
					}else{
						for(var i = 0; i < getcomment.length;i++){
							this.state.listarr.push(getcomment[i])
						}
					}
					
			}
		}
		componentWillUpdate(){
			window.location.href="/articledetail"
		}





	render(){	
		const list = this.state.listarr;
		return(
			<ReactCSSTransitionGroup
		             transitionName='exampledetail'
		             transitionAppear={true}
		             transitionAppearTimeout={1000}>
				<MyHeader/>
				
			<div className="pagesarticle">
				<Card title="文章和生活">
				    <p style={{fontSize: 14,color: 'rgba(0, 0, 0, 0.85)',marginBottom: 16,fontWeight: 500}} >
				      技术
				    </p>
				  <Card className="every" type="inner" title={this.state.title}>
				   	<img src={a1img} />
				   	<br/><br/><br/>
						1、定义<br/>
						图片懒加载是一种网页优化技术。图片作为一种网络资源，在被请求时也与普通静态资源一样，将占用网络资源，
						而一次性将整个页面的所有图片加载完，将大大增加页面的首屏加载时间.而一次性将整个页面的所有图片加载完，
						将大大增加页面的首屏加载时间。为了解决这种问题，通过前后端配合，使图片仅在浏览器当前视窗内出现时才加载该图片，
						达到减少首屏图片请求数的技术就被称为“图片懒加载”。<br/><br/>
						2.原理:<br/>
						<img src={yuanlione} /><br/>
						首先后端直出的页面结构中，img标签中的src为一张占位图，真实图片地址存放在一个伪属性中，
						如:data-src中。当页面滚动时，遍历当前页面需要进行懒加载的图片，
						判断图片是否在可视区域内，如果在的话，则取存放在伪属性中的真实src替换当前的src。
				  </Card>	
				</Card>
				
			</div>	
			<br/>
				<div className='wrapper'>
		       		 <div className='comment-field'>
			          <span className='comment-field-name'>您的笔名：</span>
			          <div className='comment-field-input'>
			            <input ref="yourname" />
	          			</div>
	          	</div>
				 <div className='comment-field'>
			          <span className='comment-field-name'>评论内容：</span>
			          <div className='comment-field-input'>
			            <textarea ref="words" />
			          </div>
		        </div>
				<br/>
				<Button type="primary" onClick={this.handleSubmit.bind(this)}>发表评论</Button>
		        </div>	
		      <div className="tag">
				<Tag color="#87d068">评论列表</Tag>
		      </div>
		        <div className="comments">
					 <List itemLayout="horizontal"
					    dataSource={list}
					    renderItem={item => (
					      <List.Item>
					        <List.Item.Meta
					          title={<p>发表人: {item.name}</p>} description={<h3>{item.content}</h3>} />
					      </List.Item>
					    )} />
				</div>
		        
			<Footer/>	
		</ReactCSSTransitionGroup>
		)
	}
}
export default ArticleDetail;