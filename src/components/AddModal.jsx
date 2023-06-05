import { useState } from "react";
import { Button, Modal, notification } from "antd";
import { PlusOutlined, CloseCircleOutlined } from "@ant-design/icons";
import uuid from "react-uuid";

const AddModalComponent = ({ tasks, setTasks }) => {
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [task, setTask] = useState({
		id: "",
		name: "",
		description: "",
		status: "todo",
	});

	const showModal = () => {
		setOpen(true);
	};

	const handleSubmit = (e) => {
		if (task?.name?.length < 3 || task?.description?.length < 3)
			return notification.open({
				message: "Error",
				description: "Please fill all the datas!",
				icon: <CloseCircleOutlined style={{ color: "red" }} />,
			});
		e.preventDefault();
		setTasks((prev) => {
			const list = [...prev, task];
			localStorage.setItem("tasks", JSON.stringify(list));
			return list;
		});
		setConfirmLoading(true);
		setTask({
			id: "",
			name: "",
			description: "",
			status: "todo",
		});
		setTimeout(() => {
			setOpen(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				onClick={showModal}
				icon={<PlusOutlined />}
				className="flex justify-center items-center  bg-blue-600 text-white h-12 border-none"
			>
				Add Task
			</Button>
			<Modal
				open={open}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				cancelButtonProps={{ style: { display: "none" } }}
				okButtonProps={{ style: { display: "none" } }}
			>
				<h1 className=" text-center text-xl  font-bold uppercase p-5 ">
					Add Task
				</h1>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col justify-center items-center"
				>
					<div className="mb-9 mt-5 ">
						<label
							class="block text-gray-700 text-sm font-bold mb-2 text-center"
							for="username"
						>
							Name of Task:
						</label>
						<input
							value={task.name}
							min="1"
							type="text"
							className="shadow  border rounded  w-72 py-2 px-5 text-gray-700 mt-1  focus:outline-none focus:shadow-outline enabled:hover:border-gray-400 "
							placeholder="Name of Task"
							onChange={(e) =>
								setTask({
									...task,
									id: uuid(),
									name: e.target.value,
								})
							}
						/>
					</div>
					<div class="mb-4">
						<label
							class="block text-gray-700 text-sm font-bold mb-2 text-center"
							for="username"
						>
							Description:
						</label>
						<input
							value={task.description}
							min="1"
							type="text"
							className="shadow  border rounded w-72 py-2 px-5 text-gray-700  mt-1 focus:outline-none focus:shadow-outline enabled:hover:border-gray-400 "
							placeholder="Name of Task"
							onChange={(e) =>
								setTask({
									...task,
									description: e.target.value,
								})
							}
						/>
					</div>

					<Button
						onClick={handleSubmit}
						className="flex justify-center items-center  bg-blue-600 text-white h-12 border-none mt-5"
					>
						Create Task
					</Button>
				</form>
			</Modal>
		</>
	);
};

export default AddModalComponent;
