import React from 'react';

import Header from './Header';
// import TaskList from './TaskList';
// import AddTask from './AddTask';
import Widget from './Widget';

class TaskKeeperApp extends React.Component {
	state = {
		tasks: [],
	};

	componentDidMount() {
		const taskListFromLS = JSON.parse(localStorage.getItem('taskList'));

		if (!!taskListFromLS) {
			this.setState(() => ({ tasks: taskListFromLS }));
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.tasks !== this.state.tasks) {
			const taskListString = JSON.stringify(this.state.tasks);
			localStorage.setItem('taskList', taskListString);
		}
	}

	handleDeleteAllTasks = () => {
		this.setState(() => ({ tasks: [] }));
	};

	handleDeleteTask = (task) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.filter((taskText) => taskText !== task),
		}));
	};

	handleAddTask = (newTaskText) => {
		if (this.state.tasks.includes(newTaskText)) {
			return 'Task already added';
		} else if (newTaskText === '') {
			return 'Please enter a valid Task';
		} else {
			this.setState((prevState) => ({
				tasks: prevState.tasks.concat(newTaskText),
			}));
			return undefined;
		}
	};

	render() {
		return (
			<div>
				<Header />

				<Widget
					taskList={this.state.tasks}
					handleDeleteTask={this.handleDeleteTask}
					handleDeleteAllTasks={this.handleDeleteAllTasks}
					handleAddTask={this.handleAddTask}
				/>
			</div>
		);
	}
}

export default TaskKeeperApp;
