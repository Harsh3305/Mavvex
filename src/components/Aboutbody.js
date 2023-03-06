import styles from "@/css/aboutpage.module.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
export default function Aboutbody() {
    return (<div className={styles.contact}>
        <div className={styles.detailbox}>
        <h2 className={styles.heading}
        >Contact us</h2>
        <div className={styles.subheading}>
            Tell us about your project, ask a question or request a demo. 
        </div>
        <div className={styles.form}>
            <form>
                <label>
                    FirstName
                    <input type="text" />
                </label>
                <div>
                <label>
                    LastName
                    <input type="text" />
                </label>
                </div>
                <div>
                <label>
                    Email
                    <input type="text" />
                </label>
                </div>
                <div>
                <label>
                    Suggest
                    <input type="text" />
                </label>
                </div>
            </form>



        </div>

        </div>
       </div>
    )


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Aboutbody />);    
}
