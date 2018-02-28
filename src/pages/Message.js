import React,{ Component } from 'react';
import { Calendar } from 'antd';
import "../css/Message.css";
import { Button } from 'antd';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { List, Avatar } from 'antd';
import { Tag } from 'antd';

	function onPanelChange(value, mode) {
		  console.log(value, mode);
	}
		
	class Message extends Component{
		constructor(){
			super();
			this.state = {
				dataarr : []
			}
		}
		componentWillMount(){
				if(localStorage.getItem("datalist")){
						let lists = JSON.parse(localStorage.getItem("datalist"));
						console.log(lists);
						for(var i = 0; i<lists.length;i++){
								this.state.dataarr.push(lists[i])
						}
				}
		}
				
				
	 render(){
			const data = this.state.dataarr;
					
			return(
				<ReactCSSTransitionGroup transitionName='example' transitionAppear={true} transitionAppearTimeout={1000}>
					<div className="msgbackground">
						<Button ghost style={{position: "absolute",top:"180px",left:"48%",fontSize:"18px",fontWeight:300}}>留  言  板  </Button>
						<div style={{position: "absolute",top:"472px",right:"10px",width: 320, border: '1px solid #d9d9d9', borderRadius: 4,color:"white"}}>
					   		 <Calendar fullscreen={false} onPanelChange={onPanelChange} />
					 	</div>
					 	<Button ghost style={{position: "absolute",top:"30px",left:"20px",fontSize:"18px",fontWeight:300}}>
					 		<Link to="/home">返回主页</Link>
					 	</Button>  
					</div>
						<Tag color="#87d068">留言列表</Tag>
						<br/>
								<div className="msgs">
									 <List itemLayout="horizontal"
									    dataSource={data}
									    renderItem={item => (
									      <List.Item>
									        <List.Item.Meta
									          title={<p>发表人:   {item.username}</p>} description={<h3>{item.content}</h3>} />
									      </List.Item>
									    )} />
								</div>
							<br/><br/>
							
				</ReactCSSTransitionGroup>)
				}
		}
			export default Message;