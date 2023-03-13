import styles from "@/styles/Agriculture.module.css"
import MainContent from "@/components/industryComponents/MainContent";
import UseCases from "@/components/industryComponents/UseCases";
export default function HealthCare() {
    const data = [
        {
            heading: "Instant access to patients' data",
            content: "Due to data privacy concerns, it is very difficult for healthcare organisations to share patients’ data. If such data could be shared across different departments and organisations while preserving patient privacy, many applications can be unlocked. With betterdata, patients' data can be easily shared within internal teams as well as external organisations."
        },
        {
            heading: "Data augmentation",
            content: "In medical institutes that are highly regulated, data often exists in isolated silos and is insufficient to train an AI model that can offer good accuracy. betterdata offers robust data augmentation techniques to address situations where there is a lack of data, by synthesising data without changing its inherent structure.\n" +
                "Bias mitigation"
        },
        {
            heading: "Bias mitigation",
            content: "ML models are being frequently used for diagnosis of different diseases in the clinical domain. If subject selection is done incorrectly, the dataset can end up being heavily imbalanced and skewed. With betterdata, your datasets can be balanced to ensure that your AI models are not trained on the wrong data."
        }
    ]
    return <div className={styles.main}>
        <div className={styles.container}>
            <MainContent
                name={"Industries"}
                industryType={"Agriculture"}
                content={"Artificial intelligence (AI) is transforming the healthcare industry by enabling faster," +
                    " more accurate diagnosis, and treatment of diseases. AI-powered tools such as machine learning" +
                    " algorithms and natural language processing can analyze vast amounts of medical data, including" +
                    " patient records, medical images, and genomic data, to identify patterns and make predictions."}
                imageUrl={"/image_assets/industries_image/Agriculture.svg"}
            />
            <UseCases
                data={data}
            />
        </div>
    </div>
}