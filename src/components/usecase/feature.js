import Image from "next/image";
import styles from "@/styles/usecaseComponent/Feature.module.css"
export default function Feature ({image_url, content}) {
    return <div className={styles.main}>
        <div className={styles.imageContainer}>
            <Image
                className={styles.image}
                src={image_url}
                height={100}
                width={100}
            />
        </div>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
                {content}
            </h1>
        </div>
    </div>
}