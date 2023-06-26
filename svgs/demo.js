import styles from '../styles/content/components/projectcard.module.scss'

const Demo = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <path
          className={styles.svgColorFill}
          fillRule="nonzero"
          d="M6.343 4.939a1 1 0 0 1 0 1.414 8.003 8.003 0 0 0 0 11.317 1 1 0 0 1-1.414 1.414c-3.907-3.906-3.907-10.24 0-14.145a1 1 0 0 1 1.414 0Zm12.731 0c3.907 3.906 3.907 10.24 0 14.145a1 1 0 0 1-1.414-1.414 8.003 8.003 0 0 0 0-11.317 1 1 0 1 1 1.414-1.414ZM9.31 7.812a1 1 0 0 1 0 1.414 3.92 3.92 0 0 0 0 5.544 1 1 0 0 1-1.414 1.415 5.92 5.92 0 0 1 0-8.373 1 1 0 0 1 1.414 0Zm6.959 0a5.92 5.92 0 0 1 0 8.373 1 1 0 0 1-1.414-1.415 3.92 3.92 0 0 0 0-5.544 1 1 0 1 1 1.414-1.414Zm-4.187 2.77a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
        />
      </g>
    </svg>
  )
  export default Demo