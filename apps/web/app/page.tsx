"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { Create, Header, NoteCard, type NoteCardProps } from "@app/web/shared/components";

type DashboardState = {
	search: null | string;
	notes: NoteCardProps["data"][];
};

const Dashboard = () => {
	const [state, setState] = useState<DashboardState>({
		search: "",
		notes: [],
	});

	useEffect(() => {
		axios.get("http://localhost:4000/notes").then(({ data: { data } }) => setState(prev => ({ ...prev, notes: data })));
		// console.table(state.notes?.filter(filter => filter.title.includes(state.search)));
	}, [state.search]);

	const handleChange = (value: string) => {
		console.log(`Search?: ${value}`);
		setState(prev => ({ ...prev, search: value }));
	};

	return (
		<article className="flex size-full flex-col">
			<Header onSearch={handleChange} />
			<main className="flex flex-1 flex-col items-center justify-center gap-10 py-4">
				<Create />
				<section className="flex flex-wrap justify-center gap-4">
					{state.notes?.map((note, i) => (
						<NoteCard
							data={note}
							index={i}
							key={i}
							onDelete={index => {
								console.log(`Delete: ${index}`);
							}}
						/>
					))}
				</section>
			</main>
		</article>
	);
};

export default Dashboard;
