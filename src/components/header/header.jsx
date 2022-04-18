import './header.css';
import {FaSearch} from 'react-icons/fa'



export default ()=>{
    return(
        <div className="header">
            <div className="search">
                <FaSearch color='rgba(255, 255, 255, 0.603)'/>
                <input type="text" placeholder='Search'/>
            </div>
            <div className="profile-image">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="User" />
            </div>
        </div>
    );

}