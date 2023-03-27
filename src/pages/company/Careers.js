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
            <div className={styles.bottomContainer}>
                <div className={styles.categoryHeading}>
                    Roles
                </div>
                <div className={styles.categories}>
                    {generateCategory(
                        "Engineering",
                        ["SDE", "ML Engineer"]
                    )}
                    {generateCategory(
                        "Research & Development",
                        ["Research Fellow", "Research Engineer"]
                    )}
                    {generateCategory(
                        "Business",
                        ["Business"]
                    )}
                </div>
            </div>
        </div>
    )
    function generateCategory(categoryName, roles) {
        return <div className={styles.category}>
            <div className={styles.categoryTitle}>
                {categoryName}
            </div>
                <div className={styles.roles}>
                    {
                        roles.map(function (data, index) {
                            return (generateRole(data, index))
                        })
                    }
                </div>

        </div>
    }
    function generateRole (role, index) {
        return <div className={styles.role} key={index}>
            <div className={styles.nameOfRole}>
                {role}
            </div>
            <Image
                src={"/image_assets/Vector20.png"}
                width={10}
                height={10}
            />
        </div>
    }
}
