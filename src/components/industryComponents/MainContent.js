import styles from "@/styles/industryComponent/MainContent.module.css"
import Image from "next/image";

export default function MainContent ({name, industryType, content, imageUrl}) {
    return <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.industries}>
                {name}
            </div>
            <div className={styles.industryType}>
                {industryType}
            </div>
            <div className={styles.content}>
                {content}
            </div>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.buttonHighlighted}`}>
                    Get in touch
                </button>
                <button className={`${styles.button} ${styles.normalButton}`}>
                    Find out more
                </button>
            </div>
        </div>
        <Image
            className={styles.image}
            height={500}
            width={500}
            src={imageUrl}
        />
    </div>
}