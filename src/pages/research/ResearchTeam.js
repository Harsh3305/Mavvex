import styles from "@/styles/Industries.module.css"
import MainContent from "@/components/industryComponents/MainContent";
import UseCases from "@/components/industryComponents/UseCases";
import loadData from "@/dao/loadData";
export default function ResearchTeam() {
    const data = loadData("useCases");

    return <div className={styles.main}>
        <div className={styles.container}>
            <MainContent
                name={"Research"}
                industryType={"Research Team"}
                content={loadData("researchTeamContent")}
                imageUrl={"/image_assets/research_image/team.svg"}
            />
            <UseCases
                data={data}
            />
        </div>
    </div>
}