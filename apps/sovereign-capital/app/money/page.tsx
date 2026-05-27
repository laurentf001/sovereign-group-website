import type { Metadata } from "next";
import { businessUnits } from "@sovereign/content";
import { BusinessUnitPage } from "../_components/BusinessUnitPage";

const unit = businessUnits.find((u) => u.slug === "money")!;

export const metadata: Metadata = {
  title: unit.name,
  description: unit.proposition,
};

export default function MoneyPage() {
  return <BusinessUnitPage slug="money" />;
}
