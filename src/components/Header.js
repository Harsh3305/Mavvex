import Image from 'next/image'
import React from 'react'
import Dropdown from './Dropdown'
import Link from "next/link";

const use_cases = ["Deep Tech Product Development", "Enabling Data Privacy in Machine Learning Model", "Better Language Transcription and Translation Services"]
const use_cases_routes = ["/usecase/DeepTech", "/usecase/EnablingData", "/usecase/DeepTech"]

const industries = ["Healthcare", "Retail", "Agriculture", "Conversational AI", "Security and Privacy in AI"]
const industries_routes = ["/industries/HealthCare", "/industries/Retail", "/industries/Agriculture", "/industries/ConversationalAI", "/industries/Security"]

const research = ["Publications", "Research Team"]
const research_routes = ["/research/Publication", "/research/ResearchTeam"]

const company = ["About us", "Contact us", "Carrers"]
const company_routes = ["/company/AboutUs", "/company/ContactUs", "/company/Carrers"]


export default function Header() {
  return (
    <div className='header_body'>

      {/* header divided into three parts */}
      <div className='header_inner_body'>

        {/* this section contains logo of the company */}
        <div className='logo_section'>
          <Link href={"/"}>
            <Image className='logo_image' src="/image_assets/logo.svg" width={171.86} height={99} alt="company-logo" />
          </Link>
        </div>

        {/* heading section */}
        <ul className='heading_section'>

          <div className='dropdown'>
            <li className='header_text heading dropdown_btn'>Use Cases <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={use_cases} routes={use_cases_routes}/>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Industries <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={industries} routes={industries_routes}/>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Customers</li>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Research <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={research} routes={research_routes}/>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Company <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={company} routes={company_routes}/>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>
              <a href={"https://medium.com/"} target={"_blank"} rel={"noreferrer"}>
                Blog
              </a>
            </li>
          </div>

        </ul>

        {/* button section */}
        <div className='button_section'>
          {/* <div className='header_btn'>
            <p className='header_text button_text'>Get in touch</p>
          </div> */}
          <button className='header_btn'>
            Get in touch
          </button>
        </div>
      </div>
    </div>
  )
}
