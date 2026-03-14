import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import KpiCards from "@/components/KpiCards";
import BubbleChartComponent from "@/components/BubbleChart";
import InsightsPanel from "@/components/InsightsPanel";
import InventoryTable from "@/components/InventoryTable";
import DonationForm from "@/components/DonationForm";
import DispatchSuggestions from "@/components/DispatchSuggestions";
import ConcientizacionSection from "@/components/ConcientizacionSection";
import NutritionalPriorityTable from "@/components/NutritionalPriorityTable";
import DonorPanel from "@/components/DonorPanel";
import ImpactReportButton from "@/components/ImpactReportButton";

const Index = () => {
  const [activeTab, setActiveTab] = useState("concientizacion");

  return (
    <div className="min-h-screen bg-background">
      <AppHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="container mx-auto px-4 py-6 space-y-6">
        {activeTab === "concientizacion" && <ConcientizacionSection />}

        {activeTab === "dashboard" && (
          <>
            <KpiCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BubbleChartComponent />
              <DonorPanel />
            </div>
            <InsightsPanel />
            <NutritionalPriorityTable />
            <div className="flex justify-center pt-2">
              <ImpactReportButton />
            </div>
          </>
        )}

        {activeTab === "inventario" && (
          <div className="space-y-6">
            <DonationForm />
            <InventoryTable />
          </div>
        )}

        {activeTab === "despachos" && <DispatchSuggestions />}
      </main>

      <footer className="border-t mt-8 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          SENA-Alimentos: Inteligencia Logística contra el Hambre © 2026 · Proyecto Académico de Trazabilidad Logística · Datos simulados con fines demostrativos
        </div>
      </footer>
    </div>
  );
};

export default Index;
