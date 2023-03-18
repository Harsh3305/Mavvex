import styles from "@/css/aboutpage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    
  } from "@fortawesome/free-brands-svg-icons";
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
function Aboutbody() {
    const [fname , setfname] = useState('');
    const [lname , setlname] = useState('');
    const [email , setEmail] = useState('');
    const [org , setorg] = useState('');
    const [sug , setsug] = useState('');
 
    // function to update state of name with
    // value enter by user in form
    const handlefnameChange =(e)=>{
      setfname(e.target.value);
    }
    const handlelnameChange =(e)=>{
        setlname(e.target.value);
      }
    // function to update state of age with value
    // enter by user in form
    // const handleAgeChange =(e)=>{
    //   setAge(e.target.value);
    // }
    // function to update state of email with value
    // enter by user in form
    const handleorgChange =(e)=>{
      setorg(e.target.value);
    }
      // function to update state of password with
      // value enter by user in form
    const handlesugChange =(e)=>{
      setsug(e.target.value);
    }
      // function to update state of confirm password
      // with value enter by user in form
    // const handleConfPasswordChange =(e)=>{
    //   setConfPassword(e.target.value);
    // }
    // below function will be called when user
    // click on submit button .
    // const handleSubmit=(e)=>{
    //   if(password!=confPassword)
    //   {
    //     // if 'password' and 'confirm password'
    //     // does not match.
    //     alert("password Not Match");
    //   }
    //   else{
    //     // display alert box with user
    //     // 'name' and 'email' details .
    //     alert('A form was submitted with Name :"' + name +
    //     '" ,Age :"'+age +'" and Email :"' + email + '"');
    //   }
    //   e.preventDefault();
 
    
    return (<div className={styles.contact}>

<div className={styles.App}>

    <header className={styles.Appheader}>
    <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit()
        function will be called .*/}
    <h2> Contact Us </h2>
    <h3> Tell us about your project, ask a question or request or suggest </h3>
        <label >
          FirstName:
        </label><br/>
        <input className={styles.orgn} id="fname" type="text" placeholder="FirstName"  value={fname} required onChange={(e)=> {handlefnameChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
        <label >
          LastName:
        </label><br/>
        <input className={styles.orgn} type="text" placeholder="LastName" value={lname} required onChange={(e)=> {handlelnameChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
        
        <label>
          Email:
        </label><br/>
        <input className={styles.orgn} type="text" placeholder="Email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
          {/* when user write in email input box , handleEmailChange()
              function will be called.*/}
        <label>
          Organization:
        </label><br/>
        <input className={styles.orgn} type="text" placeholder="Organization/Instituition" value={org} required onChange={(e)=> {handleorgChange(e)}} /><br/>
              {/* when user write in password input box ,
                  handlePasswordChange() function will be called.*/}
        <label>
          Suggestions:
        </label><br/>
        <input className={styles.sugg} type="text" placeholder="Anything...." value={sug} required onChange={(e)=> {handlesugChange(e)}} /><br/>
                {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called.*/}
        <input className={styles.button} type="submit" value="Submit"/>
      </form>
    </header>

    </div>

    <div className={styles.socialcontainer}>
      <h3>Support Us At</h3>
      <a href="https://www.youtube.com"
        className={styles.youtube}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com"
        className={styles.facebook}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className={styles.twitter}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com"
        className={styles.instagram}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>

       </div>
    )


   
}

export default Aboutbody;