import React from "react";
import { useDrop } from "react-dnd";
import TaskComponent from "./Task";

const ColumnComponent = ({
	tasks,
	todos,
	inProgress,
	closed,
	title,
	count,
	setTasks,
}) => {
	const [{ isOver }, drop] = useDrop(() => ({
		accept: "task",
		drop: (item) => addItemToSection(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));
	let text = "todo";
	let bgcolor = "bg-slate-500";
	let tasksToMap = todos;
	if (title === "todo") {
		text = "Todo";
		bgcolor = "bg-indigo-900";
		tasksToMap = todos;
	}
	if (title === "inprogress") {
		text = "InProgress";
		bgcolor = "bg-yellow-600";
		tasksToMap = inProgress;
	}
	if (title === "closed") {
		text = "Closed";
		bgcolor = "bg-rose-900";
		tasksToMap = closed;
	}

	const addItemToSection = (id) => {
		setTasks((prev) => {
			const mtasks = prev.map((t) => {
				if (t.id === id) {
					return { ...t, status: title };
				}
				return t;
			});
			console.log("prev,", prev);
			localStorage.setItem("tasks", JSON.stringify(mtasks));
			return mtasks;
		});
	};
	return (
		<div
			ref={drop}
			className={`flex flex-col w-80 ${bgcolor} ${
				isOver ? "bg-slate-200" : ""
			} rounded-lg drop-shadow-md`}
		>
			<div className="flex self-center items-center">
				<h1 className="text-l self-center p-2 text-white uppercase">
					{text}
				</h1>
				<div className="text-white">({tasksToMap.length})</div>
			</div>
			<div
				ref={drop}
				className={`flex flex-col bg-slate-100 ml-3 rounded-lg `}
			>
				{tasksToMap.length > 0 &&
					tasksToMap.map((task) => {
						return (
							<TaskComponent
								key={task.id}
								title={task.name}
								task={task}
								description={task.description}
								setTasks={setTasks}
								tasks={tasks}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default ColumnComponent;
