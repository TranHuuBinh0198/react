import React, { Component } from 'react';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}
	}

	componentDidMount() {
		this.onGenerateData();
	}

	addTodo = (todo) => {
		var tasks = this.state.tasks;
		tasks = [...tasks, todo];
		this.setState({ tasks: tasks });
	}

	deleteTodo = (id) => {
		var tasks = this.state.tasks;
		tasks = tasks.filter(value => value.id !== id);
		this.setState({ tasks: tasks });
	}

	onGenerateData = () => {
		var tasks = [
			{
				id: this.generateID(),
				name: "học lâp trình ReactJS",
				status: true,
			},
			{
				id: this.generateID(),
				name: "học lâp trình Readux",
				status: false,
			},
			{
				id: this.generateID(),
				name: "học lâp trình ReactJS",
				status: true,
			}
		];
		//console.log(tasks);
		this.setState({
			tasks: tasks
		});

		localStorage.setItem("tasks", tasks);
	}
	s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	generateID() {
		return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4();
	}

	render() {
		return (
			<div className="container">
				<div className="text-center">
					<h1>Quản Lý Công Việc</h1>
					<hr />
				</div>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						{/*    form */}
						<TaskForm addTodo={this.addTodo}/>
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<button type="button" className="btn btn-primary">
							<span className="fa fa-plus mr-5" />Thêm Công Việc
      					</button>
						<button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>
							<span className="fa fa-plus mr-5" /> Generate Data
      					</button>
						<Control />
						<div className="row mt-15">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<TaskList deleteTodo={this.deleteTodo} tasks={this.state.tasks} />
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default App;