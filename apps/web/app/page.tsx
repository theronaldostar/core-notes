"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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
	const params = useSearchParams();

	const [search, setSearch] = useState(params.get("search") || "");
	const [state, setState] = useState([]);

	useEffect(() => {
		handleFetch();
		// eslint-disable-next-line
	}, [search]);

	const filtered = state?.filter(filter => filter.title?.includes(search));

	const handleFetch = () => {
		const url = "http://localhost:8000/api/notes";
		axios.get(url).then(({ data: { data } }) => setState(data));
	};

	const handleDelete = (id: number) => {
		const url = `http://localhost:8000/api/delete-note/${id}`;
		axios
			.delete(url)
			.then(({ data: { data } }) => setState(data))
			.finally(() => alert("Note deleted successfully!"))
			.catch(() => alert("Error deleting note!"));
	};

	return (
		<article className="flex size-full flex-col">
			<Header onSearch={data => setSearch(data)} />
			<main className="flex flex-1 flex-col items-center justify-center gap-10 py-4">
				<Create onCreate={handleFetch} />
				<section className="flex flex-wrap justify-center gap-4">
					{filtered.length >= 1 ? (
						filtered.map(note => <NoteCard data={note} key={note.id} onChange={handleFetch} onDelete={handleDelete} />)
					) : (
						<Notfound />
					)}
				</section>
			</main>
		</article>
	);
};

export default Dashboard;
