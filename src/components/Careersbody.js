import styles from "@/css/career.module.css";
import Image from "next/image";

function Careersbody(){

return (


    <div className={styles.maincontainer}>
            {/* <div className={styles.img}>
                
            </div> */}
            <div className={styles.careercont}>
            <h1 className={styles.container}>
                    Careers
                </h1>
            </div>
            <div className={styles.contleft}>
            
            <div className={styles.container2}>
                <h2 className={styles.h2}>JOIN OUR TEAM</h2>
            <div>
                <p className={styles.para}>
                The Mavvex Team develops cutting-edge technology that helps global eCommerce companies overcome complex challenges. We are innovating and evolving rapidly. Our team is made up of highly intelligent and dedicated team members, all working and building together, no matter their role.


                We’re looking for bright, proactive, driven, and naturally curious people to join our team.
                </p>
                
            </div>


            
            </div>
            <div>
                <h2 className={styles.sub}>
                    Are you ready to grow with Us ?
                </h2>
            </div>
            
            {/* <div className={styles.rolescont}>
                <h1 className={styles.roles}>
                    Roles
                </h1>

                <h2 className={styles.subhead}>
                    Engineering
                </h2>

                <div className={styles.subhead1}>
                    SDE
                </div>
                <div className={styles.subhead2}>
                    ML Engineer
                </div>
            </div> */}

            
            </div>
            {/* left cont div */}

            <div className={styles.contright}>


            <Image classname={styles.imgcont} src="/image_assets/Rectangle_48.png" height={590} width={490}/>
            
            </div>
            {/* right container div */}

            {/* <div className={styles.rolescont2}>

                <h2 className={styles.subhead}>
                    Research & Developement
                </h2>

                <div className={styles.subhead3}>
                    Research Fellow
                </div>
                <div className={styles.subhead4}>
                Research Engineer
                </div>
            </div> */}

            <div className={styles.roletitle}>
                Roles
            </div>
            {/* <div className={styles.parent1}> */}
                <div className={styles.col1}>
                    Engineering
                    </div>

                <div className={styles.col2}>
                Research & Developement
                </div>

                <div className={styles.col3}>
                Business
                </div>



                <div className={styles.subcol1}>
                    SDE
                    <Image className={styles.arrow} src="/image_assets/Vector20.png" height={10} width={10}/>
                </div>

                <div className={styles.subcol2}>
                Research Fellow
                <Image className={styles.arrow} src="/image_assets/Vector20.png" height={10} width={10}/>
                </div>

                <div className={styles.subcol3}>
                Business
                <Image className={styles.arrow} src="/image_assets/Vector20.png" height={10} width={10}/>
                </div>



                <div className={styles.subcol1}>
                    ML Engineer
                    <Image className={styles.arrow} src="/image_assets/Vector20.png" height={10} width={10}/>
                </div>

                <div className={styles.subcol2}>
                Research Engineer
                <Image className={styles.arrow} src="/image_assets/Vector20.png" height={10} width={10}/>
                </div>


            {/* </div> */}
         







    </div>
    // main cont div

    

)



}

export default Careersbody
