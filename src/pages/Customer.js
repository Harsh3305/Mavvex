import React from 'react'
import styles from "../styles/Customer.module.css"
import Image from 'next/image'
import loadData from '@/dao/loadData';
function Customer() {
  const para = loadData("CustomerPageIntroPara")
  return (
    <div className={styles.customer_main}>
        <div className={styles.page_intro}>
            <div className={styles.left_container}>
                <h1>Customers</h1>
                <p>{!para?"":`${para}`}</p>
                <button className='cust_btn'>Case Studies</button>
            </div>
            <Image className={styles.right_container} 
            src={'/image_assets/customers/customer_icon.svg'}
            width={500}
            height={250}
            alt="cutomer-icon"
            />

        </div>

        <div className={styles.banner}>
            <p>Join global category leaders eliminating friction with <span>Mavvex</span></p>
            <Image src={"/image_assets/customers/banner_img.png"}
            width={502+20}
            height={90+20} 
            className={styles.banner_img}
            alt="banner_img"
            />
        </div>
        <div className={styles.middle_heading}>
          <h1> MAVVEX IS TRUSTED BY THE WORLD’S MOST INNOVATIVE COMPANIES</h1>
          <p>Leading merchants in virtually all industries trust Mavvex to approve more orders, assume chargeback liability and manage risk, so they can focus on doing what they do best.</p>
        </div>
        <div className={styles.customer_section}>
          <h3>Our Customers</h3>
          <Image 
            src={"/image_assets/customers/customers_img.jpg"}
            height={660}
            width={1164}
            className={styles.customers_img}
            alt="customers-img"
          />
        </div>
        <div className={styles.review_section}>
          <h2>Customers That Achieved Incredible Results</h2>
          <div className={styles.review_container}>
            <div className={styles.arrow_cont}>
              <Image 
              src={"/image_assets/customers/left_arrow.svg"}
              height={40}
              width={25}
              alt="left_arrow"
              />
              <div className={styles.review_card}>
                <div className={styles.review_left}>
                  <Image 
                    src="/image_assets/customers/quotation.svg"
                    height={44}
                    width={59}
                    alt="quotation-mark"
                    className={styles.quotation_mark}
                  />
                  <p>{loadData("CustomerFeedback")}</p>
                  <div className={styles.profile}>
                    <Image 
                    src="/image_assets/customers/usman-yousaf-q2q5CdLuWnI-unsplash.jpg"
                    height={100}
                    width={100}
                    alt="profile-photo"
                    className={styles.profile_photo}
                    />
                    <div className={styles.user_info}>
                      <h2>CHIEF REVENUE OFFICER</h2>
                      <Image 
                        src="/image_assets/customers/gym_shark.png"
                        width={221}
                        height={63}
                        alt="company-logo"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.review_right}>
                  <Image src={"/image_assets/customers/3x_logo.svg"} 
                  height={120}
                  width={120}
                  alt="3x-logo"
                  className={styles.growth_logo}
                  />
                  <p>Revenue Growth Tripled</p>
                </div>
              </div>
              <Image 
              src={"/image_assets/customers/right_arrow.svg"}
              height={40}
              width={25}
              alt="right_arrow"
              />
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Customer