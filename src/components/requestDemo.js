import styles from "@/css/requestDemo.module.css";

export default function Demo() {
    return <div className={styles.main}>
        <div className={styles.thunder_icon} />
        <div className={styles.title}>Request a personal demo</div>
        <div className={styles.inputForm}>
            <input
                className={styles.emailForm}
                placeholder=" Your email@xyz.com"
                type="email"
            />
            <button className={styles.button}>
                Request
            </button>
        </div>
    </div>
}
