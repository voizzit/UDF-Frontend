import WidgetBlocks from "@/components/WidgetBlocks";
import { LEADER_PAGE } from "@/constants/apiRoutes";
import { getCategories, getHomeProducts } from "@/lib/getHome";
import nextFetch from "@/utils/nextFetch";

export default async function LeaderPage({ params: { lang } }) {
  const data = await nextFetch(LEADER_PAGE, lang);
  const widgetData = data?.data?.widgets
  return (
    <main className="min-h-screen">
      <WidgetBlocks widgets={widgetData} />
    </main>
  )
}