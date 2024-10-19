import WidgetBlocks from "@/components/WidgetBlocks";
import { HOME_PAGE } from "@/constants/apiRoutes";
import { getCategories, getHomeProducts } from "@/lib/getHome";
import nextFetch from "@/utils/nextFetch";

export default async function Home() {
  const data = await nextFetch(HOME_PAGE);
  const widgetData = data?.data?.widgets
  return (
    <main className="min-h-screen">
      <WidgetBlocks widgets={widgetData} />
    </main>
  );
}

