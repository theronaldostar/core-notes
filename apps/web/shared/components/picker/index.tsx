import { Circle } from "@app/web/shared/assets/icon";
import { picker } from "@app/web/shared/theme";

type PickerProps = {
	onChange: (value: string) => void;
};

const Picker = (props: PickerProps) => {
	const { onChange, ...rest } = props;

	const entries = Object.entries(picker);

	return (
		<div className="border-note-default shadow-primary absolute z-10 flex flex-col gap-2 rounded-lg border bg-white p-2 hover:z-40" {...rest}>
			{[...Array(Math.ceil(entries.length / 6))].map((data, _) => (
				<div key={_} className="flex gap-2">
					{entries.slice(_ * 6, _ * 6 + 6).map(([i, color]) => (
						<Circle className="h-8 w-8 cursor-pointer" key={i} onClick={() => onChange(color)} fill={color} />
					))}
				</div>
			))}
		</div>
	);
};

export { Picker, type PickerProps };
