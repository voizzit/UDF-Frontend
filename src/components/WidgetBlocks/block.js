"use client"
import { HOME_ABOUT, HOME_ACHIEVEMENTS, HOME_BANNER, HOME_CHOOSE, HOME_ISSUES, HOME_LEADERS, HOME_NEWS, HOME_STAT, DONATE_WIDGET, INNER_BANNER, TIMELINE_WIDGET, CONVENER_WIDGET } from "@/constants/resources";
import DefaultComponent from "./DefaultComponent";
import HomeBanner from "@/widgets/HomeBanner";
import HomeAbout from "@/widgets/HomeAbout";
import HomeStat from "@/widgets/HomeStat";
import HomeAchievements from "@/widgets/HomeAchievements";
import HomeChoose from "@/widgets/HomeChoose";
import HomeIssues from "@/widgets/HomeIssues";
import HomeLeaders from "@/widgets/HomeLeaders";
import HomeNews from "@/widgets/HomeNews";
import DonateWidget from "@/widgets/DonateWidget";
import InnerBanner from "@/widgets/InnerBanner";
import TimelineWidget from "@/widgets/TimelineWidget";
import ConvenerWidget from "@/widgets/ConvenerWidget";


const setComponent = (widget) => {
  const components = {
    [HOME_BANNER]: HomeBanner,
    [HOME_ABOUT]:HomeAbout,
    [HOME_STAT]:HomeStat,
    [HOME_ACHIEVEMENTS]:HomeAchievements,
    [HOME_CHOOSE]:HomeChoose,
    [HOME_ISSUES]:HomeIssues,
    [HOME_LEADERS]:HomeLeaders,
    [HOME_NEWS]:HomeNews,
    [DONATE_WIDGET]:DonateWidget,
    [INNER_BANNER]:InnerBanner,
    [TIMELINE_WIDGET]: TimelineWidget,
    [CONVENER_WIDGET]: ConvenerWidget,
    default: DefaultComponent,
  };
  return components[widget.__component] || components["default"];
};


const Block = ({
  widget,
  slug,
}) => {
  const Widget = setComponent(widget);
  console.log(widget.__component,"widgetwidgetwidget");
  return (
    <Widget
      data={widget}
      {...widget}
      slug={slug}
    />
  );
};

export default Block;


