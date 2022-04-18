import './nav.css'
import {FaListUl,
        FaTv,
        FaUserAlt,
        FaLocationArrow,
        FaUserCircle,
        FaKey,
        FaHeart





} from 'react-icons/fa'




export default ()=>{
    return(
        <div className="nav-container">
            <div className="logo">
            <img className='logo' src="https://demos.creative-tim.com/argon-dashboard-react/static/media/argon-react.128d71d3.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li className='navlist'>
                        <FaTv color='#5e72e4'
                        className='fa'/>Dashboard</li>
                    <li className='navlist'>
                        <FaHeart color='#5e72e4'
                        className='fa'/>Icon</li>
                    <li className='navlist'>
                        <FaLocationArrow color='#fb6340'    className='fa'/>Maps</li>
                    <li className='navlist'>
                        <FaUserAlt color='#ffd600'
                        className='fa'/>User Profile</li>
                    <li className='navlist'>
                        <FaListUl color='#f5365c'
                        className='fa'/>Table</li>
                    <li className='navlist'>
                        <FaKey color='#11cdef'
                        className='fa'/>Login</li>
                    <li className='navlist'>
                        <FaUserCircle color='#f3a4b5'
                        className='fa'/>Register</li>
                    
                </ul> 
            </nav>
        </div>

    );
}