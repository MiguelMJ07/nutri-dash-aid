import HeroStats from "@/components/HeroStats";
import LossByStageChart from "@/components/LossByStageChart";
import HeatMapIPM from "@/components/HeatMapIPM";
import ResourceLossInfographic from "@/components/ResourceLossInfographic";
import EnvironmentalCostSection from "@/components/EnvironmentalCostSection";
import StructuralCausesSection from "@/components/StructuralCausesSection";
import FoodSecurityImpact from "@/components/FoodSecurityImpact";
import ValueProposition from "@/components/ValueProposition";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Truck, MapPin, AlertTriangle } from "lucide-react";

export default function ConcientizacionSection() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
          Impacto y Realidad:{" "}
          <span className="text-gradient-earth">La Crisis Alimentaria en Colombia</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Colombia produce suficientes alimentos para todos, pero 9.76 millones de toneladas se pierden cada año.
          Este dashboard busca cerrar esa brecha.
        </p>
      </div>

      {/* 1. Hero Stats — "12.2M colombianos" */}
      <HeroStats />

      {/* 2. Loss By Stage Chart — 40.5% producción, 20.6% distribución */}
      <LossByStageChart />

      {/* 3. El Costo Ambiental Invisible — huella hídrica, CO₂, uso de tierras */}
      <EnvironmentalCostSection />

      {/* 4. Causas Estructurales — infraestructura, redes de frío, asimetría */}
      <StructuralCausesSection />

      {/* 5. Heat Map — mapa de calor de desnutrición por IPM */}
      <HeatMapIPM />

      {/* 6. Impacto en la Seguridad Alimentaria */}
      <FoodSecurityImpact />

      {/* 7. Resource Loss Infographic — agua, metano, Doña Juana */}
      <ResourceLossInfographic />

      {/* 8. SQL Solution Card */}
      <Card className="gradient-fao border-none shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-primary-foreground mb-4 flex items-center gap-2">
            <Database className="w-5 h-5" /> El Cruce de Datos Logísticos: Tu Solución
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10">
              <AlertTriangle className="w-6 h-6 text-amber-400 mb-2" />
              <h4 className="font-bold text-primary-foreground mb-1">El Problema</h4>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">
                Los alimentos perecederos se vencen en los centros de acopio por falta de trazabilidad.
                No hay cruce entre inventario y necesidad territorial.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10">
              <Truck className="w-6 h-6 text-green-400 mb-2" />
              <h4 className="font-bold text-primary-foreground mb-1">La Solución del Dashboard</h4>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">
                Cruzar la <strong>Fecha de Vencimiento</strong> de un producto con el{" "}
                <strong>Índice de Pobreza Multidimensional (IPM)</strong> de un municipio para priorizar despachos.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
            <p className="text-sm text-primary-foreground leading-relaxed">
              <strong>Usa este Dashboard</strong> para priorizar el despacho de alimentos próximos a vencer hacia las zonas de mayor IPM:{" "}
              <strong>Uribia (92.2)</strong>, <strong>Manaure (89.5)</strong>, <strong>Alto Baudó (88.1)</strong> y otros municipios vulnerables.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 9. Propuesta de Valor — Justicia Alimentaria */}
      <ValueProposition />
    </div>
  );
}
