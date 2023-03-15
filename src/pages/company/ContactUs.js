import Image from "next/image"

export default function ContactUs() {

    return <div className="contact_body">
        <Image 
        className="image_div"
        src={"/image_assets/background_image.jpg"}
            width={200} height={200} alt="back-img"
        />
        <div className="form_outer_most">
            <div className="form_outer">
                <div className='form_left'>
                    <Image
                        className='contact_icon'
                        src={"/image_assets/contact_icon.svg"}
                        height={150}
                        width={150}
                        alt="contact-icon"
                    />
                    <h1>Contact Us</h1>
                    <div className="dot_wrapper">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <div className="company_info">
                        <Image className="logo" src='/image_assets/logo.svg' width={171.86} height={99} alt="mavvex_logo"/>
                        <p className='address_div footer_text'>1197 Sainik Colony Sector 49, Faridabad HR 121001 India</p>
                        <p className='footer_email footer_text'>Email: admin@mavvexlabs.com</p>
                        <p className='footer_text_high footer_text'>Follow us!</p>
                        <div className='social_btn'>
                          <div className='footer_icons_btn'>
                            <Image src="/image_assets/linkedin.svg"  width={40} height={40} className="image" alt='linkedin-icon'/>
                          </div>
                          <div className='footer_icons_btn'>
                            <Image src="/image_assets/youtube.svg"  width={37.93} height={26.73} className="image" alt='youtube-icon'/>
                          </div>
                          <div className='footer_icons_btn'>
                            <Image src="/image_assets/twitter.svg" width={40} height={32.49} className="image" alt='twitter-icon'/>
                          </div>
                        </div>
                    </div>
                    
                </div>
                <form className='contact_form'>
                    <label style={{
                        gridcolumnStart:2,
                        gridColumnEnd:3,
                        gridRowStart:2,
                        gridRowEnd:3
                    }}>
                        <p>First Name</p>
                        <input name="firstName" />
                    </label>
                    <label style={{
                        gridcolumnStart:4,
                        gridColumnEnd:5,
                        gridRowStart:2,
                        gridRowEnd:3
                    }}>
                        <p>Last Name</p>
                        <input name="lastName" />
                    </label>
                    <label style={{
                        gridcolumnStart:2,
                        gridColumnEnd:3,
                        gridRowStart:4,
                        gridRowEnd:5
                    }}>
                        <p>Company</p>
                        <input name="companyName" />
                    </label>
                    <label style={{
                        gridcolumnStart:4,
                        gridColumnEnd:5,
                        gridRowStart:4,
                        gridRowEnd:5
                    }}>
                        <p>Work Email</p>
                        <input name="workEmail" />
                    </label>
                    <label >
                        <p>Any more questions?</p>
                        <input name="questions" />
                    </label>
                    <button>
                        Send Message <span> <Image src="/image_assets/arrow_icon.svg"
                        height={20}
                        width={20}
                        alt="arrow icon"
                        />
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>

}