import Image from 'next/image'
import React from 'react'
import Link from "next/link";
const use_cases_routes = ["/usecase/DeepTech", "/usecase/EnablingData", "/usecase/DeepTech"]
const industries_routes = ["/industries/HealthCare", "/industries/Retail", "/industries/Agriculture", "/industries/ConversationalAI", "/industries/Security"]
const research_routes = ["/research/Publication", "/research/ResearchTeam"]
const company_routes = ["/company/AboutUs", "/company/ContactUs", "/company/Careers"]
export default function Footer() {
  return (
    <div className="footer_body">
      <div className="footer_inner_body">
        <div className="company_info">
          <Image src='/image_assets/logo.svg' width={171.86} height={99} alt="mavvex_logo" className='footer_logo'/>
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
            <li className='srvc_list_items footer_text'><Link href={use_cases_routes[0]}>Deep Tech Product Development</Link></li>
            <li className='srvc_list_items footer_text'><Link href={use_cases_routes[1]}>Enabling Data Privacy in Machine Learning Model</Link></li>
            <li className='srvc_list_items footer_text'><Link href={use_cases_routes[2]}>Better Language Transcription and Translation Services</Link></li>
          </ol>
        </div>
        <div className='company_info cmp_srvc'>
          <p className='company_info_title'>
            Industries
          </p>
          <ol className='srvc_list'>
            <li className='srvc_list_items footer_text'><Link href={industries_routes[0]}>Healthcare</Link></li>
            <li className='srvc_list_items footer_text'><Link href={industries_routes[1]}>Retail</Link></li>
            <li className='srvc_list_items footer_text'><Link href={industries_routes[2]}>Agriculture</Link></li>
            <li className='srvc_list_items footer_text'><Link href={industries_routes[3]}>Conversational</Link></li>
            <li className='srvc_list_items footer_text'><Link href={industries_routes[4]}>Security and Privacy in AI</Link></li>
          </ol>
        </div>
        <div className='company_info cmp_srvc'>
          <p className='company_info_title'>
            Research
          </p>
          <ol className='srvc_list'>
            <li className='srvc_list_items footer_text'><Link href={research_routes[0]}>Publications</Link></li>
            <li className='srvc_list_items footer_text'><Link href={research_routes[1]}>Research Team</Link></li>
          </ol>
        </div>
        <div className='company_info cmp_srvc'>
          <p className='company_info_title'>
            Company
          </p>
          <ol className='srvc_list'>
            <li className='srvc_list_items footer_text'><Link href={company_routes[0]}>About us</Link></li>
            <li className='srvc_list_items footer_text'><Link href={company_routes[1]}>Contact us</Link></li>
            <li className='srvc_list_items footer_text'><Link href={company_routes[1]}>Careers</Link></li>
          </ol>
        </div>
      </div>
      
    </div>
  )
}

