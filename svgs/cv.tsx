import { SVGProps } from "react";

import styles from "./svg.module.scss";

function CV(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={50}
			height={50}
			viewBox="0 0 24 24"
			{...props}
		>
			<title />
			<g
				className={styles.svgColorStroke}
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			>
				<path d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.1a2 2 0 0 1 1.5.6l4.9 5.2a2 2 0 0 1 .5 1.4V20a2 2 0 0 1-2 2ZM7.9 17.5h8.2M7.9 13.5h8.2M8 9.5h5" />
			</g>
		</svg>
	);
}
export { CV };
