import Image from 'next/image'
import React from 'react'
import Dropdown from './Dropdown'

const use_cases = ["Deep Tech Product Development", "Enabling Data Privacy in Machine Learning Model", "Better Language Transcription and Translation Services"]
const industries = ["Healthcare", "Retail", "Agriculture", "Conversational AI", "Security and Privacy in AI"]

const research = ["Publications", "Research Team"]
const company = ["About us", "Contact us", "Carrers"]


export default function Header() {
  return (
    <div className='header_body'>

      {/* header divided into three parts */}
      <div className='header_inner_body'>

        {/* this section contains logo of the company */}
        <div className='logo_section'>
          <Image className='logo_image' src="/image_assets/logo.svg" width={171.86} height={99} alt="company-logo" />
        </div>

        {/* heading section */}
        <ul className='heading_section'>

          <div className='dropdown'>
            <li className='header_text heading dropdown_btn'>Use Cases <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={use_cases} />
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Industries <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={industries} />
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Customers</li>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Research <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={research} />
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Company <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={company} />
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>Blog</li>
          </div>

        </ul>

        {/* button section */}
        <div className='button_section'>
          <div className='header_btn'>
            <p className='header_text button_text'>Get in touch</p>
          </div>
        </div>
      </div>
    </div>
  )
}
