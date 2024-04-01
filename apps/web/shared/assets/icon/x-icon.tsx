import type { SVGProps } from "react";
import { colors } from "@app/web/shared/theme";

const XIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg width={14} height={15} viewBox="0 0 14 15" {...props}>
		<path
			d="M13.4156 2.2405L12.092 0.91687L6.8444 6.16445L1.59682 0.91687L0.273193 2.2405L5.52077 7.48807L0.273193 12.7357L1.59682 14.0593L6.8444 8.8117L12.092 14.0593L13.4156 12.7357L8.16803 7.48807L13.4156 2.2405Z"
			fill={colors.input}
		/>
	</svg>
);

export { XIcon };
