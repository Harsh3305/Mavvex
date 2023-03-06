import Image from 'next/image'
import React from 'react'
export default function Footer() {
  return (
    <div className="footer_body">
      <div className="footer_inner_body">
        <div className="company_info">
          <Image src='/image_assets/logo.svg' width={171.86} height={99} alt="mavvex_logo"/>
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
        <div className='company_info cmp_srvc'>
          <p className='company_info_title'>
            Use Cases
          </p>
          <ol className='srvc_list'>
            <li className='srvc_list_items footer_text'>Deep Tech Product Development</li>
            <li className='srvc_list_items footer_text'>Enabling Data Privacy in Machine Learning Model</li>
            <li className='srvc_list_items footer_text'>Better Language Transcription and Translation Services</li>
          </ol>
        </div>
        <div className='company_info cmp_srvc'>
          <p className='company_info_title'>
            Industries
          </p>
          <ol className='srvc_list'>
            <li className='srvc_list_items footer_text'>Healthcare</li>
            <li className='srvc_list_items footer_text'>Retail</li>
            <li className='srvc_list_items footer_text'>Agriculture</li>
            <li className='srvc_list_items footer_text'>Conversational AI</li>
            <li className='srvc_list_items footer_text'>Security and Privacy in AI</li>
          </ol>
        </div>
        <div className='company_info cmp_srvc'>
          <p className='company_info_title'>
            Research
          </p>
          <ol className='srvc_list'>
            <li className='srvc_list_items footer_text'>Publications</li>
            <li className='srvc_list_items footer_text'>Research Team</li>
          </ol>
        </div>
        <div className='company_info cmp_srvc'>
          <p className='company_info_title'>
            Company
          </p>
          <ol className='srvc_list'>
            <li className='srvc_list_items footer_text'>About us</li>
            <li className='srvc_list_items footer_text'>Contact us</li>
            <li className='srvc_list_items footer_text'>Careers</li>

          </ol>
        </div>
      </div>
      
    </div>
  )
}

