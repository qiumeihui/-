import React,{ Component } from 'react';
import { Card } from 'antd';
import "../css/Photos.css";
import MyHeader from '../components/MyHeader.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Divider } from 'antd';


class Photos extends Component{
	render(){
		return(
			<ReactCSSTransitionGroup transitionName='example'
			  transitionAppear={true} transitionAppearTimeout={1000}>
			 <MyHeader />
			
				<div className="imgbox one">
				
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>	  
						</Card>		
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>			    
						</Card>	
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>   
						</Card>	
				</div>
				
				   <Divider style={{fontWeight:300}}>波澜壮阔</Divider>
				
				<div className="imgbox two">		
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>
						</Card>						
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>
						</Card>	
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>
						</Card>	
				</div>
				
				   <Divider style={{fontWeight:300}}>宁静致远</Divider>
				   
				<div className="imgbox three">			
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>
						</Card>						
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>
						</Card>	
					<Card className="item" style={{borderRadius:"8px", height: 230, width: 300 }}>
						</Card>	
				</div>
				<Divider>未来科技</Divider>
			</ReactCSSTransitionGroup>	
			
		)
	}
}
export default Photos;