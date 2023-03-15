import styles from "@/css/about.module.css";
import Image from "next/image";
function About(){
    return(

        <div className={styles.maincont}>
            <Image className={styles.bgimg} src="/image_assets/bg.png" width={50} height={50} />

            <div className={styles.titlecont}>
                <h6 className={styles.title}>About Us</h6>
            </div>

            <div className={styles.left}>

            <div className={styles.container2}>
                <h2 className={styles.h2}>Our Mission</h2>
            <div>
                <p className={styles.para}>
                The Mavvex Team develops cutting-edge technology that helps global eCommerce companies overcome complex challenges. We are innovating and evolving rapidly. Our team is made up of highly intelligent and dedicated team members, all working and building together, no matter their role.


                We’re looking for bright, proactive, driven, and naturally curious people to join our team.
                The Mavvex Team develops cutting-edge technology that helps global eCommerce companies overcome complex challenges.

                </p>
            </div>


            
            </div>



            </div>  
            <div className={styles.right}>
                
                <Image className={styles.imgcont} src = "/image_assets/building2.png" height={650} width={500}/>
            </div>

            <div>
                <h1 className={styles.title2}>Meet The Team</h1>
            </div>
            <div className={styles.parent1}>
            <div className={styles.left2}></div>
            <div className={styles.middle}></div>
            <div className={styles.right2}></div>
            </div>


            <div className={styles.left3}>Rohan Duggal</div>
            <div className={styles.middle3}>Ayan Kapoor</div>
            <div className={styles.right3}>Neha Duggal</div>

            <div className={styles.left4}>CEO & CoFounder</div>
            <div className={styles.middle4}>CTO</div>
            <div className={styles.right4}>CFO</div>

            <div className={styles.title3}>
                <div>Want to Join Us?</div> 
                <div>go to our careers page.</div>
                
            </div>

            <div>
            <input className={styles.button} type="submit" value="Careers"/>
            </div>


        </div>
    )
}
export default About