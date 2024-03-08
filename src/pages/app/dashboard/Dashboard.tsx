import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './MounthRevenueCard'
import { MounthOrdersCard } from './MounthOrdersCard'
import { OrdersDayCard } from './OrdersDayCard'
import { MounthCanceledOrders } from './MounthCanceledOrders'
import { RevenueChart } from './RevenueChart'
import { PopularProductsChart } from './PopularProductsChart'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MounthOrdersCard />
          <OrdersDayCard />
          <MounthCanceledOrders />
        </div>
        <div className="grid grid-cols-9">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
