import styles from "@/css/aboutpage.module.css";

export default function Abouttitle() {
    return <div className={styles.main}>
       <div className={styles.content}>
           <div className={styles.title}>
               <div className={styles.boldTitle}>
                   Get In Touch
               </div>
            
           </div>
           {/* <div className={styles.metaData}>
               Transform your production data into privacy-preserving ad highly realistic
               synthetic data. Share, access and build with data safely across teams,
               businesses, and international borders.
           </div>
           <div className={styles.buttons}>
               <button className={styles.getInTouchButton}>
                   Get in touch
               </button>
               <button className={styles.findOutMore}>
                   Find out more
               </button>

           </div> */}
        <div className={styles.text6}>
        We love to talk about how we can work together.
        </div>

        
       </div>
       <div className={styles.contact}>
        
       </div>

    </div>
}