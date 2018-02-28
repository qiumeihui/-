
import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

	class Cal extends React.Component{
		render(){
			return( <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
			    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
			  </div>)
		}
	}
 export default Cal;

          