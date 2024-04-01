import type { SVGProps } from "react";

const Pencil = (props: SVGProps<SVGSVGElement>) => (
	<svg width={25} height={25} viewBox="0 0 25 25" {...props}>
		<path
			d="M14.0725 9.63188L14.9603 10.5197L6.38473 19.0763H5.51584V18.2074L14.0725 9.63188ZM17.4725 3.96521C17.2364 3.96521 16.9908 4.05965 16.8114 4.2391L15.0831 5.96743L18.6247 9.5091L20.3531 7.78077C20.7214 7.41243 20.7214 6.79854 20.3531 6.4491L18.1431 4.2391C17.9542 4.05021 17.7181 3.96521 17.4725 3.96521ZM14.0725 6.97799L3.62695 17.4235V20.9652H7.16862L17.6142 10.5197L14.0725 6.97799Z"
			fill="#51646E"
		/>
	</svg>
);

export { Pencil };