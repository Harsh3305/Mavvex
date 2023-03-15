import styles from "@/css/about.module.css";
function About(){
    return(
        <div className={styles.maincont}>
            <div className={styles.titlecont}>
                <h1 className={styles.title}>About</h1>
            </div>

            <div className={styles.left}>

            <div className={styles.container2}>
                <h2 className={styles.h2}>Our Mission</h2>
            <div>
                <p className={styles.para}>
                The Mavvex Team develops cutting-edge technology that helps global eCommerce companies overcome complex challenges. We are innovating and evolving rapidly. Our team is made up of highly intelligent and dedicated team members, all working and building together, no matter their role.


                We’re looking for bright, proactive, driven, and naturally curious people to join our team.
                </p>
            </div>


            
            </div>



            </div>  
            <div className={styles.right}>
                
                <div className={styles.imgcont}></div>
            </div>

            <div>
                <h1 className={styles.title2}>Meet The Team</h1>
            </div>

            <div className={styles.left2}></div>
            <div className={styles.middle}></div>
            <div className={styles.right2}></div>


            <div className={styles.left3}>Rohan Duggal</div>
            <div className={styles.middle3}>Ayan Kapoor</div>
            <div className={styles.right3}>Neha Duggal</div>

            <div className={styles.left4}>CEO & CoFounder</div>
            <div className={styles.middle4}>CTO</div>
            <div className={styles.right4}>CFO</div>

            <div className={styles.title3}>
                <h1>Want to Join Us?</h1>
                <h1>go to our careers page.</h1>
            </div>

            <div>
            <input className={styles.button} type="submit" value="Careers"/>
            </div>


        </div>
    )
}
export default About