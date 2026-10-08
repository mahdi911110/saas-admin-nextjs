import { BreadcrumbDemo } from "@/components/BreadcrumbDemo"
import CardList from "@/components/CardList";
import { ChartLineMultiple } from "@/components/ChartLineMultiple";
import Information from "@/components/Information";
import UserBadge from "@/components/UserBadge";
import UserDescribe from "@/components/UserDescribe";
import { fakeData } from "@/data/data";

export default function UserPage() {
  return (
    <div className="h-full flex flex-col px-4 gap-4">
      <BreadcrumbDemo />
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-1/3 space-y-6">
          <div>
            <UserBadge />
          </div>
          <div>
            <Information />
          </div>
          <div className="h-100">
            <CardList title="Recent Transaction" data={fakeData} />
          </div>
        </div>
        <div className="w-full xl:w-2/3 space-y-6">
          <div>
            <UserDescribe />
          </div>
          <div>
            <ChartLineMultiple />
          </div>
        </div>
      </div>
    </div>
  );
}