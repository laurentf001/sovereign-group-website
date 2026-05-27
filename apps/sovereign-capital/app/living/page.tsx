import type { Metadata } from "next";
import { businessUnits } from "@sovereign/content";
import { BusinessUnitPage } from "../_components/BusinessUnitPage";

const unit = businessUnits.find((u) => u.slug === "living")!;

export const metadata: Metadata = {
  title: unit.name,
  description: unit.proposition,
};

export default function LivingPage() {
  return <BusinessUnitPage slug="living" />;
}
