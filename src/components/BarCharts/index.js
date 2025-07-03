import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    group_name: 'Group A',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'Group B',
    boys: 2000,
    girls: 400,
  },
  {
    group_name: 'Group C',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: 'Group D',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'Group E',
    boys: 700,
    girls: 1400,
  },
]

const BarCharts = () => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width="80%" height={700}>
      <BarChart data={data} margin={{top: 100}}>
        <XAxis
          dataKey="group_name"
          tick={{
            stroke: 'blue',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'red',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarCharts
