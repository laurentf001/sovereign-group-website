import type { Metadata } from "next";
import { businessUnits } from "@sovereign/content";
import { BusinessUnitPage } from "../_components/BusinessUnitPage";

const unit = businessUnits.find((u) => u.slug === "impact")!;

export const metadata: Metadata = {
  title: unit.name,
  description: unit.proposition,
};

export default function ImpactPage() {
  return <BusinessUnitPage slug="impact" />;
}
