import styles from "@/styles/industryComponent/UseCases.module.css"

export default function UseCases({data }) {
    return <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.title}>
                Use Cases
            </div>
            <div className={styles.points}>
                {
                    data.map(function (healthCare, index) {
                        return (<div key={index} className={styles.point}>
                            <div className={styles.bullet}>
                                •
                            </div>
                            <div className={styles.body}>
                                <div className={styles.heading}>
                                    {healthCare.heading}
                                </div>
                                <div className={styles.content}>
                                    {healthCare.content}
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    </div>
}