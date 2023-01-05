import {Link} from 'react-router-dom'
import './CreateButton.css'
const ButtonAdd = () => {
    return <Link className='createLink' to={'/createblog'}>
   <div className='buttonCus'>
       <h4>
        
         Add Blogs
        </h4>
    </div> </Link>
}

export default ButtonAdd;