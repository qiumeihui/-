import React,{ Component } from 'react';
import { Link } from 'react-router';
import "../css/Myheader.css";
import mylogo from "../img/mine.jpg";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MyHeader extends Component{
	constructor(){
		super();
		this.state = {
			text1:"←"
		}
		this.handleEnter = this.handleEnter.bind(this);
    	this.handleMove = this.handleMove.bind(this);
	}
	
	handleEnter(){
		this.setState({
			text1:" 返回开始页"
		})
	}

	handleMove(){
		this.setState({
			text1:"back"
		})
	}

	render(){
		var obj = {
			color:"white",
			height:"60px",
			display:"block"
		}
		return(
		<div>	
			<div className = "header">
				<img className="logo" src={mylogo} alt="头像"/>
				<p>欢迎来到我的主页</p>
				<ul className = "nav">
						<li onMouseEnter={this.handleEnter} onMouseLeave={this.handleMove}>
							<ReactCSSTransitionGroup
					             transitionName='exampletext1'
					             transitionAppear={true}
					             transitionAppearTimeout={1000}>
							<Link to="/" style={obj}>{this.state.text1}</Link>
							</ReactCSSTransitionGroup>	
						</li>
					<li><Link to="/message" style={obj}>留言板</Link></li>
					<li><Link to="/photos" style={obj}>相册</Link></li>
					<li><Link to="/article" style={obj}>文章</Link></li>
				</ul>
			</div>
		</div>
		)
	}
}

export default MyHeader;




