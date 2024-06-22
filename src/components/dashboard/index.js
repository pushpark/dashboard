import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'
import {useState, useEffect } from 'react'
import Navbar from '../Header'
import BarChart from '../barChart'
import PieChartComponent from '../piechart'
import PostsChart from '../postsChart'
import './index.css'

const Dashboard=()=>{
    const [fulldata,setFullData]=useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://dummyapi.online/api/social-profiles")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setFullData(data)
          setData(data)
        })
      },[])

    const token = Cookies.get('token')
    if (token === undefined) {
      return <Navigate to="/login" />
    }

    const onClickVerified=()=>{
      const verified=fulldata.filter(user=>user.verifiedStatus)
      setData(verified)
    }

    const onClickUnverified=()=>{
      const newData=fulldata.filter(user=>!user.verifiedStatus)
      setData(newData)
    }

    return (
      <div>
        <Navbar/>
        <div className='filters'>
          <button className='filter-button' onClick={onClickVerified}>Verified users</button>
          <button className='filter-button' onClick={onClickUnverified}>Unverified users</button>
        </div>
        <div className='charts-container'>
         <BarChart usersData={data}/>
         <PieChartComponent usersData={data}/>
         <PostsChart userData={data}/>
        </div>
      </div>
    )
    }
export default Dashboard