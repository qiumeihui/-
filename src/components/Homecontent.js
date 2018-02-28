import React,{ Component } from 'react';
import { Card } from 'antd';
import { Link } from "react-router";
class Homecontent extends Component{
	render(){
		return(	
			<div className="content">	
				 <div>
				    <Card className="card" title="关于Css推荐文章" bordered={false} style={{height:220, width: 310 ,textAlign:"center"}}
				    >
				      <a href="http://www.imooc.com/article/2181"><p>前端笔试面试中的常用知识点总结CSS</p></a>
				      
				    </Card>
				  </div>  
				  <div>
				    <Card className="card" title="关于Js推荐文章" bordered={false} style={{height:220, width: 310 ,textAlign:"center"}}
				    >
				       <a href="https://segmentfault.com/a/1190000005363885"><p>JavaScript之原型链</p></a>
				      
				    </Card>
				 </div>  
				 <div>
				    <Card className="card" title="关于前端框架推荐文章" bordered={false} style={{height:220, width: 310 ,textAlign:"center"}}
				    >
				       <a href="https://zhuanlan.zhihu.com/p/25194137"><p>选择合适的前端框架,告别选择恐惧症</p></a>
				      
				    </Card>
				  </div>
			</div>
		)
	}
}
export default Homecontent;
