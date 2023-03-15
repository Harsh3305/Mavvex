import styles from "@/styles/Industries.module.css"
import MainContent from "@/components/industryComponents/MainContent";
import UseCases from "@/components/industryComponents/UseCases";
import loadData from "@/dao/loadData";

export default function HealthCare() {
    const data = loadData("useCases");
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