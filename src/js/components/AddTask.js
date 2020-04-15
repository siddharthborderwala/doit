import React from 'react';

class AddTask extends React.Component {
	state = {
		error: undefined
	};

	handleNewTask = (e) => {
		e.preventDefault();
		const newTaskText = e.target.elements.newTask.value.trim();
		const error = this.props.handleAddTask(newTaskText);

		e.target.elements.newTask.value = '';

		this.setState(() => ({ error }));
	};

	render() {
		return (
			<div className="add-task">
				{this.state.error && <p className="add-task__error">{this.state.error}</p>}
				<form onSubmit={this.handleNewTask} autoComplete="off" className="add-task__form">
					<input 
					className="add-task__input"
					type="text" 
					name="newTask" 
					placeholder="New task here" />

					<button 
					className="btn btn-add add-task__btn"
					type="submit"
					>Add Task</button>
				</form>
			</div>
		);
	}
}

export default AddTask;