import styles from "@/styles/Carrers.module.css";
import Image from "next/image";
import loadData from "@/dao/loadData";

export default function Careers() {
    return (
        <div className={styles.main}>
            <div className={styles.title_container}>
                <Image
                    className={styles.career_back_image}
                    src={"/image_assets/background_image.jpg"}
                    width={200} height={200} alt="back-img"
                />
                <div className={styles.page_title}>
                    Careers
                </div>
            </div>
            <div className={styles.content_container}>
                <div className={styles.left}>
                    <h1>Our Mission</h1>
                        <p className={styles.para}>
                            {loadData("careerTeam")}
                        </p>
                        <h2 className={styles.joinNow}>
                            Are you ready to grow with us?
                        </h2>
                </div>
                <div className={styles.right}>
                    <Image
                        src="/image_assets/Rectangle_48.png"
                        width={500}
                        height={500}
                        alt="career-page-image"
                        className={styles.business_image} 
                    />
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <h1 className={styles.categoryHeading}>
                    Roles
                </h1>
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
            <h2 className={styles.categoryTitle}>
                {categoryName}
            </h2>
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
            <h2 className={styles.nameOfRole}>
                {role}
            </h2>
            <Image
                src={"/image_assets/Vector20.png"}
                width={10}
                height={10}
                alt="tilted_arrow"
            />
        </div>
    }
}
