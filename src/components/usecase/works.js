import styles from "@/styles/usecaseComponent/Work.module.css";
import Feature from "@/components/usecase/feature";

export default function Works () {
    return <div className={styles.main}>
        <h1>How it Works</h1>
        <div className={styles.container}>
            <Feature image_url={"/image_assets/usecases_image/ai.svg"} content={"Use AI Data"}/>
            <Feature image_url={"/image_assets/usecases_image/block.svg"} content={"Test Product"}/>
            <Feature image_url={"/image_assets/usecases_image/speed.svg"} content={"Innovate Faster"}/>
        </div>
    </div>
}