import CardList from "@/components/CardList";
import { ChartAreaGradient } from "@/components/ChartAreaGradient";
import { ChartBarMultiple } from "@/components/ChartBarMultiple";
import { ChartPieDonutText } from "@/components/ChartPieDonutText";
import TodoList from "@/components/TodoList";
import { fakeData } from '@/data/data';

export default function Home() {
  return (
    <div className="grid h-full min-h-0 w-full grid-cols-1 gap-4 p-2 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <ChartBarMultiple />
      </div>
      <div className="min-h-100 xl:min-h-0">
        <CardList title="Latest Transactions" data={fakeData} />
      </div>
      <div>
        <ChartPieDonutText />
      </div>
      <div className="min-h-100 xl:min-h-0">
        <TodoList />
      </div>
      <div className="min-h-100 xl:min-h-0">
        <CardList title="Popular Content" data={fakeData} />
      </div>
      <div className="lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <ChartAreaGradient />
      </div>
    </div>
  );
}
