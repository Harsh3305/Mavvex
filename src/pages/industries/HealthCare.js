import styles from "@/styles/HealthCare.module.css"
import MainContent from "@/components/industryComponents/MainContent";
import UseCases from "@/components/industryComponents/UseCases";
export default function Comp() {
    return <div className={styles.main}>
        <div className={styles.container}>
            <MainContent
                industryType={"HealthCare"}
                content={"Artificial intelligence (AI) is transforming the healthcare industry by enabling faster," +
                    " more accurate diagnosis, and treatment of diseases. AI-powered tools such as machine learning" +
                    " algorithms and natural language processing can analyze vast amounts of medical data, including" +
                    " patient records, medical images, and genomic data, to identify patterns and make predictions."}
                imageUrl={"http://localhost:3000/image_assets/features.svg"}
            />
            <UseCases

            />
        </div>
    </div>
}