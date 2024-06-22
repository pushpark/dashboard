import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
import './index.css'

const PieChartComponent = (props) => {
  const {usersData}=props
  
  const maleUsers=usersData.filter(user=>user.gender==="Male")
  const femaleUsers=usersData.filter(user=>user.gender==="Female")
  const diverseUsers=usersData.filter(user=>user.gender==="Diverse")
  
  const data=[{
    gender:"Male",
    count:maleUsers.length
  },
  {
    gender:"Female",
    count:femaleUsers.length
  },
  {
    gender:"Diverse",
    count:diverseUsers.length
  },

]

  return (  
    <ResponsiveContainer width={500} height={300}>
    <p className="text">Users count according gender</p>
      <PieChart>
        <Pie
          cx="40%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#fecba6" />
          <Cell name="Female" fill="#b3d23f" />
          <Cell name="Diverse" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="middle"
        />
      </PieChart>
    </ResponsiveContainer> 
  )
}

export default PieChartComponent