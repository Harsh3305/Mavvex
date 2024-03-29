import Image from 'next/image'
import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Link from "next/link";
import { useRouter } from 'next/router';

const use_cases = ["Deep Tech Product Development", "Enabling Data Privacy in Machine Learning Model", "Better Language Transcription and Translation Services"]
const use_cases_routes = ["/usecase/DeepTech", "/usecase/EnablingData", "/usecase/BetterData"]

const industries = ["Healthcare", "Retail", "Agriculture", "Conversational AI", "Security and Privacy in AI"]
const industries_routes = ["/industries/HealthCare", "/industries/Retail", "/industries/Agriculture", "/industries/ConversationalAI", "/industries/Security"]

const research = ["Publications", "Research Team"]
const research_routes = ["/research/Publication", "/research/ResearchTeam"]

const company = ["About us", "Contact us", "Careers"]
const company_routes = ["/company/AboutUs", "/company/ContactUs", "/company/Careers"]
const defaultTags = ["Use Cases", "Industries", "Customers", "Research", "Company", "Blog"];


export default function Header() {

  const [tags, setTag] = useState(defaultTags);
  const [menuState, setMenuState] = useState(0);
  const router = useRouter()
  const currentPath = `${router.pathname}`;
  const [highlightedTag, setHighlightedTag] = useState(-1);
  console.log({
    highlightedTag: highlightedTag
  })
  function navigate(path) {
    router.push(path).then()
  }
  if (currentPath.includes("usecase")) {
    setPath(0)
  }
  else if (currentPath.includes("industries")) {
    setPath(1)
  }
  else if (currentPath.includes("Customer")) {
    setPath(2)
  }
  else if (currentPath.includes("research")) {
    setPath(3)
  }
  else if (currentPath.includes("company")) {
    setPath(4)
  }
  else {
    setPath(-1)
  }
  function setPath(index) {
    if (index !== highlightedTag) {
      var newTags = Array.from(defaultTags);
      newTags[index] = <div style={{color: "#0669FD"}}>
        {defaultTags[index]}
        </div>
      setTag(newTags)
      setHighlightedTag(index)
    }
  }
  return (
    <div className='header_body'>

      {/* header divided into three parts */}
      <div className='header_inner_body'>

        {/* this section contains logo of the company */}
        <div className='logo_section'>
          <Link href={"/"}>
            <Image className='logo_image' src="/image_assets/logo.svg" width={171.86} height={99} alt="company-logo" />
          </Link>
          <Image className='menu_icon' src={menuState==0 ? "/image_assets/hamburger_open.svg" : "/image_assets/hamburger_close.svg"} width={20} height={16} alt="menu-icon" onClick={(e) => setMenuState((menuState+1)%2)}/>

        </div>

        {/* heading section */}
        <ul className={`heading_section ${menuState==0 ?"menu_open" : "menu_close"}`}>

          <div className='dropdown'>
            <li className='header_text heading dropdown_btn'>{tags[0]} <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={use_cases} routes={use_cases_routes}/>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>{tags[1]} <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={industries} routes={industries_routes}/>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>{
              <Link href={"/Customer"}>
                {tags[2]}
            </Link>}</li>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>{tags[3]} <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={research} routes={research_routes}/>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>{tags[4]} <span><Image className='header_dropdown' src="/image_assets/dropdown.svg" width={8} height={4} alt="dropdown-icon" /></span></li>
            <Dropdown list={company} routes={company_routes}/>
          </div>

          <div className='dropdown'>
            <li className='header_text heading'>
              <a href={"https://medium.com/"} target={"_blank"} rel={"noreferrer"}>
                {tags[5]}
              </a>
            </li>
          </div>

        </ul>

        {/* button section */}
        <div className='button_section'>
          {/* <div className='header_btn'>
            <p className='header_text button_text'>Get in touch</p>
          </div> */}
          <button className='header_btn' onClick={() => {navigate("/company/ContactUs") }}>
            Get in touch
          </button>
        </div>
      </div>
    </div>
  )
}
