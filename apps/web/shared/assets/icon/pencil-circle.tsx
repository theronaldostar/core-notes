import type { SVGProps } from "react";
import { colors } from "@app/web/shared/theme";

const PencilCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg width={30} height={30} viewBox="0 0 30 30" {...props}>
		<circle cx={15.0002} cy={15} r={14.4504} fill="#ffe3b3" />
		<path
			style={{ transform: "translate(8%, 8%)" }}
			d="M13.9446 9.16667L14.8324 10.0544L6.2568 18.6111H5.38791V17.7422L13.9446 9.16667ZM17.3446 3.5C17.1085 3.5 16.8629 3.59444 16.6835 3.77389L14.9551 5.50222L18.4968 9.04389L20.2251 7.31556C20.5935 6.94722 20.5935 6.33333 20.2251 5.98389L18.0151 3.77389C17.8262 3.585 17.5901 3.5 17.3446 3.5ZM13.9446 6.51278L3.49902 16.9583V20.5H7.04069L17.4862 10.0544L13.9446 6.51278Z"
			fill={colors.input}
		/>
	</svg>
);

export { PencilCircle };
