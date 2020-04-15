import React from 'react';
import Task from './Task';


const TaskList = (props) => (
	<div className="task-list">
		<div className="task-list__head">
			<h3 className="task-list__title">My Tasks</h3>
			<button className="btn btn-del task-list__remove-all" onClick={props.handleDeleteAllTasks}>Delete All</button>
		</div>
		<div className="task-list__list">
		{props.taskList.length === 0 ? <p className="task-list__empty-msg">Enter new Tasks to get started</p> : undefined}
			{props.taskList.map((taskText, index) => (
				<Task 
				key={taskText} 
				name={taskText} 
				position={index+1}
				handleDeleteTask={props.handleDeleteTask} />
			))}
		</div>
	</div>
);

export default TaskList;