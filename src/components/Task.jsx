import React from "react";

const TaskComponent = ({ title, description }) => {
	return (
		<div className="flex flex-col bg-white drop-shadow-md">
			<h1 className="text-xl p-2">{title}</h1>
			<p className="text-l p-2">{description}</p>
			<div></div>
		</div>
	);
};

export default TaskComponent;
