import styles from "@/styles/Carrers.module.css";
import Image from "next/image";
import loadData from "@/dao/loadData";

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
            <div className={styles.middleContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.content}>
                        <div className={styles.heading}>
                            Join out Team
                        </div>
                        <div className={styles.mainContent}>
                            {loadData("careerTeam")}
                        </div>
                        <div className={styles.joinNow}>
                            Are you ready to grow with us?
                        </div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <Image
                        src="/image_assets/Rectangle_48.png"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className={styles.underline}>

            </div>
        </div>
    )
}