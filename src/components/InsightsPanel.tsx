import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, TrendingDown, Users } from "lucide-react";

const insights = [
  {
    icon: TrendingDown,
    stat: "9.76M",
    unit: "toneladas/año",
    text: "de alimentos se desperdician en Colombia, equivalente al 34% de la oferta alimentaria nacional.",
    source: "DNP, 2023",
  },
  {
    icon: Users,
    stat: "8M+",
    unit: "personas",
    text: "podrían alimentarse por un año entero con los alimentos que Bogotá desperdicia anualmente.",
    source: "FAO / Banco de Alimentos",
  },
  {
    icon: Lightbulb,
    stat: "70%",
    unit: "del desperdicio",
    text: "ocurre en las etapas de producción y distribución, donde la trazabilidad logística puede hacer la diferencia.",
    source: "ABACO Colombia",
  },
];

export default function InsightsPanel() {
  return (
    <Card className="border-none shadow-md gradient-fao">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-primary-foreground mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Insights: ¿Por qué importa?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <item.icon className="w-5 h-5 text-amber-400 mb-2" />
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-2xl font-extrabold text-primary-foreground">{item.stat}</span>
                <span className="text-xs text-primary-foreground/70">{item.unit}</span>
              </div>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">{item.text}</p>
              <p className="text-xs text-primary-foreground/50 mt-2">Fuente: {item.source}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
