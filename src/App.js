import React, {Component} from 'react';
import Overview from './Components/Overview';


class App extends Component{
	constructor(){
		super();
		this.state = {
			task: {text: ' '},
			tasks : [],
		}
		this.addTasks = this.addTasks.bind(this);

	}

	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value, 
			}
		});
	};

	addTasks = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: {text: ' '},

		});
	};
	

	
	render(){
		const {task, tasks} = this.state;
		
		return(
			<div className="container m-3 ">
				
				<form onSubmit={this.addTasks}>
				<input  onChange = {this.handleChange}className='form-control w-50' type="text" value={task.value} id="inp" placeholder='Enter your task'> 
				</input>
				<br />
				<button className='btn btn-success w-50' type="submit" onClick = {this.addTasks}>Submit</button>
				</form>
				<Overview tasks={tasks} />
				
			
			</div>
		)
	}
}
export default App;