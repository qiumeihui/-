import React,{ Component } from 'react';
import { Card } from 'antd';
import "../css/Article.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';//页面过渡动画所需要引入的
import MyHeader from '../components/MyHeader.js';
import Footer from '../components/Footer';
import { Link } from "react-router";


class Article extends Component{
	render(){
		return(
			<ReactCSSTransitionGroup
		             transitionName='exampleheader'
		             transitionAppear={true}
		             transitionAppearTimeout={1200}>
			<div className="artbox">
				<MyHeader/>
				
				<div className="pagesarticle">
				 <Card title="文章和生活">
				    <p
				      style={{
				        fontSize: 14,
				        color: 'rgba(0, 0, 0, 0.85)',
				        marginBottom: 16,
				        fontWeight: 500,
				      }} >
				      技术
				    </p>
				    <Card className="every"
				      type="inner"
				      title="浅析图片懒加载技术"
				      extra={<Link to="/articledetail">查看</Link>}
				    >
				      1、定义
				图片懒加载是一种网页优化技术。图片作为一种网络资源，在被请求时也与普通静态资源一样，将占用网络资源，
				而一次性将整个页面的所有图片加载完，将大大增加页面的首屏加载时间.
				    </Card>
				    
				  </Card>
			
			</div>
				
				<Footer/>
			</div>
			
			
			
		</ReactCSSTransitionGroup>
		)
	}
}
export default Article;