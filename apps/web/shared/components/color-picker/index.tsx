import { colors } from "@app/web/shared/theme";
import { Circle } from "@app/web/shared/assets/icon";

type ColorPickerProps = {
	onChange: (value: string) => void;
};

const ColorPicker = (props: ColorPickerProps) => {
	const { onChange, ...rest } = props;

	const entries = Object.entries(colors.notes);

	return (
		<div className="border-default absolute z-10 flex flex-col gap-2 rounded-lg border bg-slate-400 p-2 hover:z-40" {...rest}>
			{[...Array(Math.ceil(entries.length / 6))].map((data, $) => (
				<div key={$} className="flex gap-2">
					{entries.slice($ * 6, $ * 6 + 6).map(([i, color]) => (
						<Circle className="h-8 w-8 cursor-pointer" key={i} onClick={() => onChange(color)} fill={color} />
					))}
				</div>
			))}
		</div>
	);
};

export { ColorPicker, type ColorPickerProps };
