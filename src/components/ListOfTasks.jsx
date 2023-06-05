import React, { useEffect, useState } from "react";
import ColumnComponent from "./Column";
import TaskComponent from "./Task";

const ListOfTasksComponent = ({ tasks, setTasks }) => {
	const [todos, setTodos] = useState([]);
	const [inProgress, setinProgress] = useState([]);
	const [closed, setClose] = useState([]);

	useEffect(() => {
		const Todos = tasks.filter((task) => task.status === "todo");
		const Inprogres = tasks.filter((task) => task.status === "inprogress");
		const Closed = tasks?.filter((task) => task.status === "closed");
		setTodos(Todos);
		setinProgress(Inprogres);
		setClose(Closed);
	}, [tasks]);

	const titles = ["todo", "inprogress", "closed"];
	return (
		<div className="flex justify-center justify-between ">
			{titles.map((titles, index) => {
				return (
					<ColumnComponent
						key={index}
						title={titles}
						tasks={tasks}
						setTasks={setTasks}
						todos={todos}
						inProgress={inProgress}
						closed={closed}
						count={todos.length}
					/>
				);
			})}
		</div>
	);
};

export default ListOfTasksComponent;
