import styles from '../styles/content/components/projectcard.module.scss'

const Technologies = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <g
            stroke="#292D32"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            className={styles.svgColorStroke2}
        >
            <path
                d="m8 10-2 2 2 2M16 10l2 2-2 2"
            />
            <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM13 9.67l-2 4.66"
            />
        </g>
    </svg>
)
export default Technologies
