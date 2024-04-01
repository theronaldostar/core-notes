import type { SVGProps } from "react";
import { colors } from "@app/web/shared/theme";

const XMark = (props: SVGProps<SVGSVGElement>) => (
	<svg width={14} height={15} viewBox="0 0 14 15" {...props}>
		<path
			fill={colors.input}
			d="M13.22 2.3 11.896.975 6.65 6.223 1.4.976.078 2.299l5.247 5.248-5.247 5.247L1.4 14.118 6.65 8.87l5.247 5.248 1.324-1.324-5.248-5.247 5.248-5.248Z"
		/>
	</svg>
);

export { XMark };
