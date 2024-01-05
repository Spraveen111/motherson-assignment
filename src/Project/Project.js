
import React from 'react'
import './Project.css'

export default function Project(props) {
    const {details}=props
    const {name,description,link,id}=details
    const a=id%2
  return (
    <li class='li'>
        { a===1 ?
        <div className='inside-container'>
            <div className='name-portion'>
            <h1 className='name-text'>{name}</h1>
            <p>{description}</p>
            <a href={link} target='_blank'><button className='linked-button'>View Project</button></a>
            </div>
            <img className='image-d' src='https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=600' alt='a'/>
        
        </div>:
 <div className='inside-container'>
    <img className='image-d' src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600' alt='a'/>

 <div className='name-portion1'>
 <h1 className='name-text'>{name}</h1>
 <p>{description}</p>
 <a href={link} target='_blank'><button className='linked-button'>View Project</button></a>
 </div>
 
</div>}

    </li>
  )
}
