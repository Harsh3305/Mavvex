import styles from "@/styles/Carrers.module.css";
import Image from "next/image";

export default function Careers() {
    return (
        <div className={styles.main}>
            <div className={styles.topContainer}>
                <Image
                    className="contact_image_div"
                    src={"/image_assets/background_image.jpg"}
                    width={200} height={200} alt="back-img"
                />
                <div className={styles.title}>
                    Careers
                </div>
            </div>

        </div>
    )
}