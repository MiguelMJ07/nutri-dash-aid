import { Package, AlertTriangle, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getKilosRescatados, getLotesAlertaCritica, getMunicipiosAltoIPM, inventario } from "@/data/mockData";

const kpis = [
  {
    label: "Kilos Rescatados",
    value: getKilosRescatados().toLocaleString("es-CO"),
    suffix: "kg",
    icon: Package,
    color: "text-alert-ok" as const,
    bg: "bg-alert-ok/10" as const,
  },
  {
    label: "Lotes Alerta Crítica",
    value: getLotesAlertaCritica(),
    suffix: "lotes < 72h",
    icon: AlertTriangle,
    color: "text-alert-critical" as const,
    bg: "bg-alert-critical/10" as const,
    pulse: true,
  },
  {
    label: "Municipios Alto IPM",
    value: getMunicipiosAltoIPM().length,
    suffix: "cobertura objetivo",
    icon: MapPin,
    color: "text-accent" as const,
    bg: "bg-accent/10" as const,
  },
  {
    label: "Inventario Activo",
    value: inventario.filter((i) => i.estado === "Disponible").reduce((s, i) => s + i.cantidad_kg, 0).toLocaleString("es-CO"),
    suffix: "kg disponibles",
    icon: TrendingUp,
    color: "text-primary" as const,
    bg: "bg-primary/10" as const,
  },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <Card key={kpi.label} className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{kpi.label}</p>
                <p className={`text-3xl font-extrabold mt-1 ${kpi.color}`}>
                  {kpi.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{kpi.suffix}</p>
              </div>
              <div className={`p-2.5 rounded-lg ${kpi.bg} ${kpi.pulse ? "animate-pulse-alert" : ""}`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
