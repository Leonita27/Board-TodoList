import { Button, Modal } from "antd";

const EditModalComponent = ({
	visible,
	onCancel,
	currentTodo,
	handleEditSubmit,
	setCurrentTodo,
}) => {
	return (
		<>
			<Modal
				open={visible}
				onCancel={onCancel}
				cancelButtonProps={{ style: { display: "none" } }}
				okButtonProps={{ style: { display: "none" } }}
			>
				<h1 className=" text-center text-xl  font-bold uppercase p-5 ">
					Edit Task
				</h1>
				<form
					onSubmit={handleEditSubmit}
					className="flex flex-col justify-center items-center"
				>
					<div className="mb-9 mt-5 ">
						<label className="block text-gray-700 text-sm font-bold mb-2 text-center">
							Name of Task:
						</label>
						<input
							value={currentTodo.name}
							min="1"
							type="text"
							className="shadow  border rounded  w-72 py-2 px-5 text-gray-700 mt-1  focus:outline-none focus:shadow-outline enabled:hover:border-gray-400 "
							placeholder="Name of Task"
							onChange={(e) =>
								setCurrentTodo({
									...currentTodo,
									name: e.target.value,
								})
							}
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2 text-center">
							Description:
						</label>
						<input
							value={currentTodo.description}
							min="1"
							type="text"
							className="shadow  border rounded w-72 py-2 px-5 text-gray-700  mt-1 focus:outline-none focus:shadow-outline enabled:hover:border-gray-400 "
							placeholder="Name of Task"
							onChange={(e) =>
								setCurrentTodo({
									...currentTodo,
									description: e.target.value,
								})
							}
						/>
					</div>
					<Button
						onClick={handleEditSubmit}
						className="flex justify-center items-center  bg-blue-600 text-white h-12 border-none mt-5"
					>
						Save Task
					</Button>
				</form>
			</Modal>
		</>
	);
};

export default EditModalComponent;
