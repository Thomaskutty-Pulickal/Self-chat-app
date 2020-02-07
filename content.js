import React from 'react'
import Tablecontent from './tableContent.js'

class content extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:[],
			current:'',
			id: 0
		}
		this.inputHandler = this.inputHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	inputHandler(e){
		const {value} = e.target;
		return(
			this.setState({
				current:value
			})
		)
	}
	submitHandler(e){
		e.preventDefault()
		let a = this.state.current;
		let arr = this.state.data;
		if (a != ''){
			arr.push(a);
		}
		// return(
		// 	this.setState({
		// 		data:arr,
		// 		current:'',
		// 		id:a
		// 	})
		// )
		return(
			this.setState((prev) => {
				return{
					data:arr,
					current:'',
					id:prev.id++
				}
				})
			)
	}
	render(){
		return(
			<div className='container'>
			   <h1>The Self Messaging App</h1>
			   <Tablecontent key={this.state.id} data={this.state.data} />
			   <form onSubmit={this.submitHandler}>
			     <input onChange={this.inputHandler} placeholder='Type Something' value={this.state.current} />
			     <button>Send</button>
			   </form>
			</div>
		)
	}
}

export default content;