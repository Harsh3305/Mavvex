import MainContent from "@/components/industryComponents/MainContent";
import loadData from "@/dao/loadData";
import styles from "@/styles/Industries.module.css"
export default function Comp() {
    return <div className={styles.main}>
        <div className={styles.container}>
            <MainContent
                name={"Use Cases"}
                industryType={"Deep Tech Product Development"}
                content={loadData("useCasesContent")}
                imageUrl={"/image_assets/usecases_image/block.svg"}
            />
        </div>

    </div>
}