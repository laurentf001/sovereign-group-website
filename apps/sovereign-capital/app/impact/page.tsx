import type { Metadata } from "next";
import { businessUnits } from "@sovereign/content";
import { ImpactPage } from "../_components/ImpactPage";

const unit = businessUnits.find((u) => u.slug === "impact")!;

export const metadata: Metadata = {
  title: unit.name,
  description: unit.proposition,
};

export default function ImpactRoute() {
  return <ImpactPage />;
}
