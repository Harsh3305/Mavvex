import styles from "@/styles/Industries.module.css"
import MainContent from "@/components/industryComponents/MainContent";
import UseCases from "@/components/industryComponents/UseCases";
import loadData from "@/dao/loadData";
export default function ConversationalAI() {
    const data = loadData("useCases");
    return <div className={styles.main}>
        <div className={styles.container}>
            <MainContent
                name={"Industries"}
                industryType={"Conversational Ai"}
                content={loadData("conversationalContent")}
                imageUrl={"/image_assets/industries_image/Conversation.svg"}
            />
            <UseCases
                data={data}
            />
        </div>
    </div>
}