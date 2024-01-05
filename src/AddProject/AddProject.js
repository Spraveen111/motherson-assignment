
import {useState} from 'react'
import './AddProject.css'

import Project from '../Project/Project'
function AddProject(){
    const [store,setStore]=useState([])
    const [name,setName]=useState('')
    const [link,setLink]=useState('')
    const [description,setDescription]=useState('')
    const [count,setCount]=useState(0)

const StoreAll=(e)=>{
    e.preventDefault()
    setCount(count+1)
    const newData={
        name:name,
        link:link,
        description:description,
        id:count
    }
    setStore([...store,newData])
    setName('')
    setLink('')
    setDescription('')
}

console.log(store)
    return (
        <div className='add-main-container'>
            <div className='second-container'>
            <h1 className='add-text'>Add Project</h1>
            <form onSubmit={StoreAll} className='form'>
                <label>Project Name</label>
                <input type='text' className='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Project Link</label>
                <input type='text'  className='name'  value={link} onChange={(e)=>setLink(e.target.value)}/>
                <label>Project Description</label>
                <textarea type='text'  rows='4' column='5'  className='name' value={description}  onChange={(e)=>setDescription(e.target.value)}></textarea>
                <div className='b-container'>
                    <button type='submit' className='project-button'>Add</button>
                </div>
            </form>
           
            </div>
            
        <img 
          src="https://res.cloudinary.com/dtt87dyj1/image/upload/v1704440268/Screenshot_150_tpzpog.png"
          alt="a"
        />
        
    
            
            <div>
                <h1 className='name-text2'>Projects</h1>
                <ul>
  {store.length > 0
    ? store.map((each) => <Project key={each.id} details={each} />)
    : null}
    
</ul>

            </div>
        </div>
    )
}

export default AddProject;