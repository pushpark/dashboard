import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"
  
  
  const PostsChart= (props) => {
    const {userData}=props
    const DataFormatter = (number) => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }
  
    return (
      <ResponsiveContainer width={300} height={300}>
        <p className="text">Users count according gender</p>
        <BarChart
          data={userData}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="userId"
            tick={{
              stroke: "gray",
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: "gray",
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="postsCount" name="users" fill="#1f77b4" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
  
  export default PostsChart