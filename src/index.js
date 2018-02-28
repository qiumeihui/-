import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//引入antd的css
import 'antd/dist/antd.css';
import App from './App';
import { Router,Route,browserHistory } from "react-router";
import registerServiceWorker from './registerServiceWorker';
//引入页面
import Home from './pages/Home.js';
import Article from './pages/Article.js';
import ArticleDetail from './pages/ArticleDetail.js';
import Photos from './pages/Photos.js';
import Message from './pages/Message.js';

//配置路由
ReactDOM.render(
	<Router history={browserHistory}> 
			<Route path="/" component={App} />
			<Route path="/home" component={Home} />
			<Route path="/article" component={Article} />
			<Route path="/articledetail" component={ArticleDetail} />
			<Route path="/photos" component={Photos} />
			<Route path="/message" component={Message} />
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
