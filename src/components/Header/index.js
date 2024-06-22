import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Header = () => {
  const navigate=useNavigate()
  const onClickLogout = () => {
    Cookies.remove('token')
    navigate('/login')
  }

    return (
        <div>
         <div className="navbar-container">
           <h1 className='heading'>Dashboard</h1>
           <button type="button" className="button" onClick={onClickLogout}>
              Logout
           </button> 
        </div>
        <div className='description-container'>
            <h1 className='welcome-heading'>Welcome to Social Media Users Dashboard</h1>
            <p className='description'>social media users dashboard is a powerful tool designed to aggregate, analyze, and visualize data related to social media profiles and activities. This dashboard is typically used by social media managers, marketers, and analysts to gain insights into user engagement, track performance metrics, and inform strategic decisions</p>
        </div>
     </div>
        )
}
export default Header