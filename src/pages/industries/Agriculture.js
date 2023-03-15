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
                content={loadData("agricultureContent")}
                imageUrl={"/image_assets/industries_image/Agriculture.svg"}
            />
            <UseCases
                data={data}
            />
        </div>
    </div>
}