import React from 'react'
import Link from "next/link";

function Dropdown({ list, routes }) {
  if (list) {
    return (
      <ul className='dropdown_content'>
        {
          list.map((item, index) =>
              <li key={index}><p ><a>{
                <Link href={routes[index]}>
                  {item}
                </Link>
              }</a></p></li>
        )}
      </ul>
    )
  }
  else {
    return (
      <></>
    )
  }
}

export default Dropdown