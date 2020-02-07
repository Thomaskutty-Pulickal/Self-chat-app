import React from 'react'

class tableContent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			tableData:[]
		}
	}

	// handlerMethod(){
	// 	let data = this.props.data;
	// 	if (data.length > 10){
	// 		data = data.slice(0,10);
	// 	}

	// 	return(
	// 		data.map((item) =>{
	// 			<td>item</td>
	// 		})
	// 	)
	// }
	render(){
		let data = this.props.data;
		if (data.length > 10){
			let c = data.length;
			data = data.slice(c-10,c);
		}
		let arr = data.map((item,index) =>{
			return(
				<li className="msg_container" key={index}>
				  <p className='msg' >{item}</p>
				</li>
			)
		})
		return(
			<div className="tableii" >
			   <ul className="tabley" >
			       {arr}
			   </ul>
			</div>
		)
	}
}

export default tableContent