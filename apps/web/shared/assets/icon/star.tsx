import type { SVGProps } from "react";
import { colors } from "@app/web/shared/theme";

const Star = (props: SVGProps<SVGSVGElement>) => (
	<svg width={20} height={20} viewBox="0 0 20 20" {...props}>
		<path
			fill={colors.input}
			d="M9.938 13.711 6.3 15.908l.958-4.142L4.045 8.98l4.239-.358 1.654-3.909 1.655 3.91 4.238.357-3.212 2.787.957 4.142m6.038-8.148-6.957-.59L9.938.755 7.22 7.17l-6.957.59 5.274 4.577-1.578 6.803 5.98-3.61 5.98 3.61-1.587-6.803 5.284-4.577Z"
		/>
	</svg>
);

export { Star };
