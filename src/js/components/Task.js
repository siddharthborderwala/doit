import React from 'react';

const Task = (props) => (
	<div className="task">
		<label className="task__check-label" htmlFor={`check-${props.position}`}>
			<input className="task__check-box" type="checkbox" id={`check-${props.position}`} />
			<span className="custom-check-box">
				<svg className="check-svg">
					<use xlinkHref="./assets/solid.svg#check-square"></use>
				</svg>
			</span>
			<label className="task__label" htmlFor={`check-${props.position}`}>
				{props.name}
			</label>
		</label>
		<button
			className="btn btn-del task__remove-btn"
			onClick={() => {
				props.handleDeleteTask(props.name);
			}}
		>
			Delete
		</button>
	</div>
);

export default Task;
