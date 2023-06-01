import React from "react";
import ColumnComponent from "../components/Column";
import Colors from "../theme/color";

const MainPage = () => {
	return (
		<div className="m-5">
			<h1 className="text-3xl font-bold mb-5 mt-14">Simple Board</h1>
			<p className="text-l font-light  ">
				This is a tool to menagment a project and follow the progress.
			</p>
			<p className="text-l font-light  mb-5">
				Please add the tasks and move them as needed.
			</p>
			<div className="w-full h-px bg-slate-300 mb-10 mt-10 rounded-sm"></div>
			<div className="flex justify-center justify-between ">
				<ColumnComponent
					title={"Ready to start"}
					color={Colors.violet}
				/>
				<ColumnComponent
					title={"Working on it"}
					color={Colors.orange}
				/>
				<ColumnComponent title={"Stuck"} color={Colors.pink} />
				<ColumnComponent title={"Done"} color={Colors.green} />
				<ColumnComponent title={"Test"} color={Colors.gray3} />
			</div>
		</div>
	);
};

export default MainPage;
