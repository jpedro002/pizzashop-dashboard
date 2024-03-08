import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from 'recharts'

const data = [
  { date: '01/01', revenue: 4000 },
  { date: '02/01', revenue: 2000 },
  { date: '03/01', revenue: 21000 },
  { date: '04/01', revenue: 6700 },
  { date: '05/01', revenue: 3400 },
  { date: '06/01', revenue: 45000 },
  { date: '07/01', revenue: 23400 },
]

export const RevenueChart = () => {
  return (
    <Card className="col-span-6">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle>Receita no Periodo</CardTitle>
          <CardDescription>Receita diaria no perioda</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              dataKey="revenue"
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              dx={-10}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <XAxis
              dataKey="date"
              stroke="#888"
              axisLine={false}
              tickLine={false}
              dy={16}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line type="linear" strokeWidth={2} dataKey="revenue" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
