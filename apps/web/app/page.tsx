"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { CreateNote, Header, NoteCard } from "@app/web/shared/components";

const Dashboard = () => {
	const [state, setState] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:4000/notes").then(({ data: { data } }) => setState(data));
	}, []);

	return (
		<div className="flex size-full flex-col">
			<Header />
			<div className="flex flex-1 flex-col items-center justify-evenly gap-4 overflow-y-auto">
				<CreateNote />
				<div className="flex flex-wrap justify-center gap-4">
					{state?.map((note, i) => (
						<NoteCard
							data={note}
							index={i}
							key={i}
							onDelete={index => {
								console.log(`Delete: ${index}`);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
