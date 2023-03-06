import React from 'react'

function Dropdown({ list }) {
  if (list) {
    return (
      <ul className='dropdown_content'>
        {list.map((item, index) => <li key={index}><p ><a>{item}</a></p></li>)}
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