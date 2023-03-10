import styles from "@/css/career.module.css";

function Careersbody(){

return (
    <div className={styles.maincontainer}>
        
        <h1 className={styles.h2}>JOIN US AT MAVVEX</h1>
        <div>
        <p className={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>
        </div>

        <div>

        <h1 className={styles.h2}>
            Open Positions
        </h1>

        

        </div>

        <div>
        <h2 className={styles.subheading}>
            Engineering
        </h2>
        <input className={styles.button1} type="submit" value="Remote"/>
        <div>

            <h3 className={styles.h3}>
                1. Software Developement
            </h3>


            <h3 className={styles.h3}>
                2. Backend Developement
            </h3>
            <div>
            <input className={styles.button2} type="submit" value="Delhi"/>
            </div>
            <h3 className={styles.h3}>
                3. Data Analyst
            </h3>
            <div>
            <input className={styles.button3} type="submit" value="Bengaluru"/>
            </div>
        </div>

        <div>
        <h2 className={styles.subheading}>
            R&D
        </h2>
        <div>
        <div>
        <input className={styles.button4} type="submit" value="Delhi"/>
            </div>
        <h3 className={styles.h3}>
                1. Research Engineer
            </h3>
            <div>
            <input className={styles.button5} type="submit" value="Chennai"/>
            </div>

            <h3 className={styles.h3}>
                2. Research Assistant
            </h3>
        </div>

        </div>
        <h2 className={styles.cont}>
            Email Resumes at:-
        </h2>
        <h3 className={styles.email}>
            admin@mavvexlabs.com

            </h3>
            <h3 className={styles.note}>
            Kindly specify the role appying for 

            </h3>

        </div>





    </div>
)



}

export default Careersbody
