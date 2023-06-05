import { useEffect, useState } from "react";
import ListOfTasksComponent from "../components/ListOfTasks";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import AddModalComponent from "../components/AddModal";

const MainPage = () => {
	const [tasks, setTasks] = useState([]);
	console.log(tasks, "tasks from main page");

	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem("tasks")));
	}, []);

	return (
		<DndProvider backend={HTML5Backend}>
			<div className="m-5">
				<h1 className="text-3xl font-bold mb-5 mt-14">Simple Board</h1>
				<p className="text-l font-light  ">
					This is a tool to menagment a project and follow the
					progress.
				</p>
				<p className="text-l font-light  mb-5">
					Please add the tasks and move them as needed.
				</p>
				<AddModalComponent tasks={tasks} setTasks={setTasks} />
				<div className="w-full h-px bg-slate-300 mb-10 mt-10 rounded-sm"></div>
				<div>
					<ListOfTasksComponent tasks={tasks} setTasks={setTasks} />
				</div>
			</div>
		</DndProvider>
	);
};

export default MainPage;
