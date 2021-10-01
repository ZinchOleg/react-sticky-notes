import styles from './Button.module.scss'

interface IButtonProps {
    iconUrl: string
    tooltip: string
    clickHandler: () => void
}

export default function Button ({iconUrl, tooltip, clickHandler}: IButtonProps) {
    return (
        <button onClick={clickHandler} className={styles.btn}>
            <img src={iconUrl} alt={tooltip} />
        </button>
    )
}