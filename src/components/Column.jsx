import React from "react";
import TaskComponent from "./Task";

const ColumnComponent = ({ title, color }) => {
	return (
		<div
			className="flex flex-col w-64 rounded-sm drop-shadow-md"
			style={{ backgroundColor: color }}
		>
			<h1 className="text-xl self-center p-2 text-white">{title}</h1>
			<div className="flex flex-col bg-slate-50 ml-3">
				<TaskComponent
					title={"Design"}
					description={"Create new components"}
				/>
				<h1 className="p-3"> Add Item</h1>
			</div>
		</div>
	);
};

export default ColumnComponent;
