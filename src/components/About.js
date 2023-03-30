import styles from "@/css/about.module.css";
import loadData from "@/dao/loadData";
import Image from "next/image";
import {useRouter} from "next/router";
function About(){
    const router = useRouter();
    function navigate(path) {
        router.push(path).then()
    }
    return(
        <div className={styles.maincont}>
            <div className={styles.title_container}>
                <Image 
                className={styles.about_back_image}
                src={"/image_assets/background_image.jpg"}
                width={200} height={200} alt="back-img"
                />
                <h1 className={styles.page_title}>About Us</h1>
            </div>

            <div className={styles.content_container}>
                <div className={styles.left}>
                    <h1>Our Mission</h1>
                    <p className={styles.para}>
                    {loadData("aboutPagePara1")}
                    </p>
                    <h3 className={styles.heading_sec}>{loadData("aboutPagePara2")}</h3>
                    <p className={styles.para}>{loadData("aboutPagePara3")}</p>
                </div>
                <div className={styles.right}>
                    <Image className={styles.building_image} src = "/image_assets/building2.png" height={650} width={500} alt="building-image"/>
                </div>
            </div>
            

            <div className={styles.team}>
                <h1>Meet The Team</h1>
                <div className={styles.key_peoples_cont}>
                    <div className={styles.key_people}>
                        <Image src={"/image_assets/man1.png"} width={250} height={250} className={styles.profile_image} alt="profile-image"/>
                        <h3 className={styles.name}>Rohan Duggal</h3>
                        <p className={styles.position}>CEO & CoFounder</p>
                    </div>
                    
                    <div className={styles.key_people}>
                        <Image src={"/image_assets/man2.png"} width={250} height={250} className={styles.profile_image} alt="profile-image"/>
                        <h3 className={styles.name}>Ayan Kapoor</h3>
                        <p className={styles.position}>CTO</p>
                    </div>
                    
                    <div className={styles.key_people}>
                        <Image src={"/image_assets/woman1.png"} width={250} height={250}  className={styles.profile_image}alt="profile-image"/>
                        <h3 className={styles.name}>Neha Duggal</h3>
                        <p className={styles.position}>CFO</p>
                    </div>
                </div>

            </div>


            <div className={styles.additional_info}>
                <h1>Want to Join Us?</h1>
                <h1>go to our careers page.</h1>
               <button className={styles.button} onClick={()=>{navigate("/company/Careers")}}>Careers</button>
            </div>
            
        </div>
    )
}
export default About