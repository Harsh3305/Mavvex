// import "@/css/title.css";

import Image from "next/image";

export default function Title() {
    return <div className="title_main">
    <div className="inner_div">
        <div className="inner_div_1">

        </div>
        <div className="inner_div_2">
            
        {/* AI synthetic data that is faster, safer and fairer */}
        </div>
        <div className="text_div">
            <h1 className="title_text gradient_text">
                AI synthetic data
            </h1>
            <h1 className="title_text clamp">
            that is faster, safer and fairer
            </h1>
            <p className="meta_data_text">
            Transform your production data into privacy-preserving ad highly realistic synthetic data. Share, access and build with data safely across teams, businesses, and international borders.
            </p>
            <div className="button_grp">
                <button className="btn primary">
                    Get in touch
                </button>
                <button className="btn secondary">
                    Find out more
                </button>
            </div>
        </div>
        
    </div>
    <div className="comp_div">
        <div className="comp_inner_div">
            <div className="comp_left  comp_col">
                <div className="side_col">
                    <Image src={"/image_assets/community_icon.svg"} width={80} height={80} alt="community icon"/>
                    <p className="side_col_heading">
                    Faster data, faster innovation
                    </p>
                    <p className="side_col_para">
                    Lorem ipsum dolor sit amet consectetur. Elit vel tellus vitae morbi eros facilisis purus. Vitae nibh nunc vel nibh commodo sit quam nascetur purus.
                    </p>
                </div>
            </div>
            <div className="comp_middle comp_col">
                <div className="middle_col">
                    <div className="middle_col_l">
                        <p className="side_col_heading middle_heading">Safer data with privacy by design</p>
                        <p className="side_col_para middle_para">Lorem ipsum dolor sit amet consectetur. Elit vel tellus vitae morbi eros facilisis purus. Vitae nibh nunc vel nibh commodo sit quam nascetur purus.</p>
                    </div>
                    <div className="middle_col_m">
                        <Image src="/image_assets/thunder_icon.svg" 
                            width={80} height={80} alt="thunder-icon"
                        />
                    </div>
                    <div className="middle_col_r">
                        <p className="side_col_heading middle_heading">Fairer data, fairer AI</p>
                        <p className="side_col_para middle_para">Lorem ipsum dolor sit amet consectetur. Elit vel tellus vitae morbi eros facilisis purus. Vitae nibh nunc vel nibh commodo sit quam nascetur purus.</p>
                    </div>
                </div>
            </div>
            <div className="comp_right comp_col">
                <div className="side_col">
                    <Image src={"/image_assets/community_icon.svg"} width={80}  height={80} alt="community icon"/>
                    <p className="side_col_heading">
                    Anonymized data with maximum utility
                    </p>
                    <p className="side_col_para">
                    Lorem ipsum dolor sit amet consectetur. Elit vel tellus vitae morbi eros facilisis purus. Vitae nibh nunc vel nibh commodo sit quam nascetur purus.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="use_case_div">
        <div className="use_case_semi">

        </div>
        <div className="use_case_cont">
            <div className="image_div">
                <Image src={"/image_assets/community_icon.svg"} height={80} width={80} alt={"community-icon"} />
            </div>
            <h1>
                Enable your team to move faster and safer
            </h1>
            <div className="use_case_meta" id="meta_1">
                <p>Product Development and Testing</p>
                <p>
                Lorem ipsum dolor sit amet consectetur. Elit vel tellus vitae morbi eros facilisis purus. Vitae nibh nunc vel nibh commodo sit quam nascetur purus. Interdum tincidunt non scelerisque interdum in.
                </p>
            </div>
            <div className="use_case_meta" id="meta_2">
                <p>Data collaborations</p>
                <p>
                Lorem ipsum dolor sit amet consectetur. Elit vel tellus vitae morbi eros facilisis purus. Vitae nibh nunc vel nibh commodo sit quam nascetur purus. Interdum tincidunt non scelerisque interdum in.
                </p>
            </div>
            <div className="use_case_meta" id="meta_3">
                <p>Data Privacy Verification</p>
                <p>
                Lorem ipsum dolor sit amet consectetur. Elit vel tellus vitae morbi eros facilisis purus. Vitae nibh nunc vel nibh commodo sit quam nascetur purus. Interdum tincidunt non scelerisque interdum in.
                </p>
            </div>
            <div className="use_case_meta" id="meta_4">
                <p>Bias & Imbalance mitigation</p>
                <p>
                Lorem ipsum dolor sit amet consectetur. Elit vel tellus vitae morbi eros facilisis purus. Vitae nibh nunc vel nibh commodo sit quam nascetur purus. Interdum tincidunt non scelerisque interdum in.
                </p>
            </div>
            <div className="use_case_btn_grp">
                <button className="btn primary">
                    See more use cases
                </button>
                <button className="btn secondary">
                    Have another use case? let us know
                </button>
            </div>
        </div>
    </div>
</div>
}