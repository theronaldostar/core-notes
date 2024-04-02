"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { Create, Header, NoteCard } from "@app/web/shared/components";

const Notfound = () => (
	<div className="flex items-center justify-center">
		<div className="flex flex-col rounded-md text-center">
			<label className="text-note-700 text-2xl font-semibold">No Notes!</label>
			<label className="text-font">No notes found at the moment, or it's loading!</label>
		</div>
	</div>
);

const Dashboard = () => {
	const [search, setSearch] = useState("");
	const [state, setState] = useState([]);

	useEffect(() => {
		fetchData().then(() => {});
		// eslint-disable-next-line
	}, [search]);

	const fetchData = async () => {
		const url = "http://localhost:4000/notes";
		return await axios.get(url).then(({ data: { data } }) => setState(data));
	};

	const filtered = state.filter(filter => filter.title?.includes(search));

	return (
		<article className="flex size-full flex-col">
			<Header onSearch={data => setSearch(data)} />
			<main className="flex flex-1 flex-col items-center justify-center gap-10 py-4">
				<Create />
				<section className="flex flex-wrap justify-center gap-4">
					{filtered.length >= 1 ? (
						filtered
							.filter(filter => filter.title?.includes(search))
							.map((note, i) => (
								<NoteCard
									data={note}
									index={i}
									key={i}
									onDelete={index => {
										console.log(`Delete: ${index}`);
									}}
								/>
							))
					) : (
						<Notfound />
					)}
				</section>
			</main>
		</article>
	);
};

export default Dashboard;
