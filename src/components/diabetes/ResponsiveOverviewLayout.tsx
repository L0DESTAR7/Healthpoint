import getFormFactor from "../../util/getFormFactor";
import LargeOverviewLayout from "./LargeOverviewLayout";
import MediumOverviewLayout from "./MediumOverviewLayout";
import SmallOverviewLayout from "./SmallOverviewLayout";


export default function ResponsiveOverviewLayout() {

  const formFactor = getFormFactor();

  if (formFactor === "lg") {
    return (<LargeOverviewLayout></LargeOverviewLayout>);
  }
  else if (formFactor === "md") {
    return (<MediumOverviewLayout></MediumOverviewLayout>);
  }
  else {
    return (<SmallOverviewLayout></SmallOverviewLayout>);
  }

}
