import { useDrag } from "react-dnd";
import {
	EditOutlined,
	DeleteOutlined,
	CloseCircleOutlined,
} from "@ant-design/icons";
import { Button, notification } from "antd";
import { useState } from "react";
import EditModalComponent from "./EditModal";

const TaskComponent = ({ title, description, task, tasks, setTasks }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "task",
		item: { id: task.id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	console.log(isDragging);
	const [isEditingModal, setIsEditingModal] = useState(false);
	const [currentTodo, setCurrentTodo] = useState({});

	const handleRemoveTask = (id) => {
		const Task = tasks.filter((t) => t.id !== id);
		localStorage.setItem("tasks", JSON.stringify(Task));
		setTasks(Task);
		console.log("task has removed succesfully");
	};

	const handleEditInputChange = () => {
		setIsEditingModal(true);
		setCurrentTodo(task);
	};

	const handleUpdateTask = (id, updatedTask) => {
		console.log(id, "id", updatedTask, "updatedd");
		if (
			updatedTask?.name?.length === 0 ||
			updatedTask?.description?.length === 0
		)
			return notification.open({
				message: "Error",
				description: "Please fill all the datas!",
				icon: <CloseCircleOutlined style={{ color: "red" }} />,
			});
		const updatedItem = tasks.map((task) => {
			return task.id === id ? updatedTask : task;
		});
		setIsEditingModal(false);
		localStorage.setItem("tasks", JSON.stringify(updatedItem));
		setTasks(updatedItem);
	};

	const handleSubmit = (taskToUpdateCompleted) => {
		const completedItem = tasks.map((task) => {
			return task.id === taskToUpdateCompleted.id
				? {
						...task,
						status: "closed",
				  }
				: task;
		});
		console.log(completedItem, "updated");
		localStorage.setItem("tasks", JSON.stringify(completedItem));
		setTasks(completedItem);
	};

	return (
		<div
			ref={drag}
			className={`flex flex-col bg-white drop-shadow-md m-1  rounded-lg ${
				isDragging ? "opacity-25" : "opacity-100"
			}`}
		>
			<h1 className="text-xl p-2">{title}</h1>
			<p className="text-m p-2 text-slate-700 font-light">
				{description}
			</p>

			<div className="flex  m-2 gap-2 pr-4 pb-3 justify-between items-center">
				<a
					onClick={() => handleSubmit(task)}
					className={`${
						task.status === "closed"
							? "text-green-700"
							: "text-red-700"
					} text-sm font-normal uppercase`}
				>
					{task.status === "closed" ? "Completed" : "Incompleted"}
				</a>
				<div className="flex items-center justify-end">
					<Button
						onClick={() => {
							handleEditInputChange();
						}}
						icon={<EditOutlined />}
						className="border-none  "
					></Button>
					<Button
						onClick={() => {
							handleRemoveTask(task.id);
						}}
						icon={<DeleteOutlined />}
						className="border-none text-red-600"
					></Button>
				</div>

				{isEditingModal && (
					<EditModalComponent
						setCurrentTodo={setCurrentTodo}
						currentTodo={currentTodo}
						visible={isEditingModal}
						onCancel={() => setIsEditingModal(false)}
						handleEditSubmit={() =>
							handleUpdateTask(currentTodo.id, currentTodo)
						}
					/>
				)}
			</div>
		</div>
	);
};

export default TaskComponent;
