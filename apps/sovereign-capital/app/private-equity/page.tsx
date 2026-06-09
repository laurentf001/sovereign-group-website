import type { Metadata } from "next";
import { businessUnits } from "@sovereign/content";
import { BusinessUnitPage } from "../_components/BusinessUnitPage";

const unit = businessUnits.find((u) => u.slug === "private-equity")!;

export const metadata: Metadata = {
  title: unit.name,
  description: unit.proposition,
};

export default function PrivateEquityPage() {
  return <BusinessUnitPage slug="private-equity" />;
}
