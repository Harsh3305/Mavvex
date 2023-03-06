import styles from "@/css/titile.module.css";

export default function Title() {
    return <div className={styles.main}>
       <div className={styles.content}>
           <div className={styles.title}>
               <div className={styles.boldTitle}>
                   AI synthetic data
               </div>
               that is faster, safer
               and fairer
           </div>
           <div className={styles.metaData}>
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

           </div>
       </div>
    </div>
}