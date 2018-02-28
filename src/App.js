import React, { Component } from 'react';
import mylogo from './img/mine.jpg';
import { Link } from "react-router";
import "./App.css";
import "./reset.css";
import { Button } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




class App extends Component {
			  render(){
			    return(
			    	 <ReactCSSTransitionGroup
                transitionName='examplebtn'
                transitionAppear={true}
                transitionAppearTimeout={1000}>
		              <div className="box">
		                  
												<img className="mylogostyle" src={mylogo} alt="头像"/>
													 <Button ghost className="start">
													 		<Link to="/home">进入</Link>
													 </Button>
					     						
						     					<ReactCSSTransitionGroup
					                	transitionName='exampletext'
					                	transitionAppear={true}
					                	transitionAppearTimeout={1000}>
						     							<p>"  邱美慧   "</p>
						     							<p>欢迎走进我的世界</p>
						     					</ReactCSSTransitionGroup>
					     	  </div>
            </ReactCSSTransitionGroup>
			      
			    )
			  }
	  	}

export default App;