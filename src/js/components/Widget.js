import React from 'react';

import TaskList from './TaskList';
import AddTask from './AddTask';

const Widget = (props) => (
	<div className="widget__wrapper">
		<div className="container widget">
			<TaskList
				taskList={props.taskList}
				handleDeleteTask={props.handleDeleteTask}
				handleDeleteAllTasks={props.handleDeleteAllTasks}
			/>

			<AddTask 
			handleAddTask={props.handleAddTask}
			/>
		</div>
	</div>
);

export default Widget;
