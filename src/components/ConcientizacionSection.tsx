import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Globe, TrendingDown, Lightbulb, Database, Truck, MapPin, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const etapasPerdida = [
  { etapa: "Producción Agropecuaria", porcentaje: 40.5, color: "hsl(4, 72%, 50%)" },
  { etapa: "Distribución y Retail", porcentaje: 20.6, color: "hsl(35, 90%, 55%)" },
  { etapa: "Hogares (Consumo)", porcentaje: 15.6, color: "hsl(145, 45%, 40%)" },
];

const cifrasClave = [
  {
    icon: Globe,
    valor: "30%",
    unidad: "de alimentos globales",
    texto: "de los alimentos producidos en el mundo se pierden o desperdician cada año.",
    fuente: "FAO, 2023",
    tipo: "warning" as const,
  },
  {
    icon: TrendingDown,
    valor: "9.76M",
    unidad: "toneladas/año",
    texto: "de alimentos se pierden en Colombia, equivalente al 34% de la oferta total de comida del país.",
    fuente: "DNP, 2023",
    tipo: "critical" as const,
  },
  {
    icon: AlertTriangle,
    valor: "8M+",
    unidad: "personas",
    texto: "podrían alimentarse durante un año completo con lo que Colombia desperdicia. Equivale a toda Bogotá.",
    fuente: "FAO / Banco de Alimentos",
    tipo: "critical" as const,
  },
  {
    icon: Lightbulb,
    valor: "3er",
    unidad: "emisor mundial",
    texto: "Si el desperdicio de alimentos fuera un país, sería el tercer mayor emisor de gases de efecto invernadero.",
    fuente: "FAO SOFA Report",
    tipo: "warning" as const,
  },
];

const cardBg: Record<string, string> = {
  critical: "border-alert-critical/30 bg-alert-critical/5",
  warning: "border-alert-warning/30 bg-alert-warning/5",
};

const iconColor: Record<string, string> = {
  critical: "text-alert-critical",
  warning: "text-alert-warning",
};

const CustomBarTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border rounded-lg p-3 shadow-lg text-sm">
      <p className="font-bold text-foreground">{d.etapa}</p>
      <p className="text-muted-foreground">{d.porcentaje}% de la pérdida total</p>
    </div>
  );
};

export default function ConcientizacionSection() {
  return (
    <div className="space-y-6">
      {/* Título Impactante */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
          Paradoja Colombiana:{" "}
          <span className="text-gradient-earth">Hambre en la Despensa</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Colombia produce suficientes alimentos para todos, pero millones de toneladas se pierden antes de llegar a quienes más los necesitan.
        </p>
      </div>

      {/* Cifras Clave - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cifrasClave.map((item, i) => (
          <Card key={i} className={`border shadow-md hover:shadow-lg transition-shadow ${cardBg[item.tipo]}`}>
            <CardContent className="p-5">
              <item.icon className={`w-6 h-6 mb-3 ${iconColor[item.tipo]}`} />
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-3xl font-extrabold text-foreground">{item.valor}</span>
                <span className="text-xs text-muted-foreground">{item.unidad}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.texto}</p>
              <p className="text-xs text-muted-foreground/60 mt-2">Fuente: {item.fuente}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gráfico: ¿Dónde Ocurre la Falla? */}
      <Card className="border-none shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-bold text-foreground">¿Dónde Ocurre la Falla?</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Distribución de la pérdida y desperdicio de alimentos (PDA) en Colombia por etapa de la cadena.
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={etapasPerdida} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis type="number" domain={[0, 50]} tick={{ fontSize: 11 }} unit="%" />
              <YAxis dataKey="etapa" type="category" width={180} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar dataKey="porcentaje" radius={[0, 6, 6, 0]} barSize={32}>
                {etapasPerdida.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-3 flex items-center gap-2 text-xs">
            <span className="inline-block w-3 h-3 rounded-sm bg-alert-warning" />
            <span className="text-muted-foreground font-medium">
              Distribución y Retail — Aquí es donde actúa tu Proyecto SQL de trazabilidad logística.
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Solución SQL */}
      <Card className="gradient-earth border-none shadow-md">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-primary-foreground mb-4 flex items-center gap-2">
            <Database className="w-5 h-5" /> El Cruce de Datos Logísticos: Tu Solución
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-5 border border-primary-foreground/10">
              <AlertTriangle className="w-6 h-6 text-alert-warning mb-2" />
              <h4 className="font-bold text-primary-foreground mb-1">El Problema</h4>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">
                Los alimentos perecederos se vencen en los centros de acopio por falta de trazabilidad.
                No hay cruce entre inventario y necesidad territorial.
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-5 border border-primary-foreground/10">
              <Truck className="w-6 h-6 text-alert-ok mb-2" />
              <h4 className="font-bold text-primary-foreground mb-1">La Solución del Dashboard</h4>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">
                Cruzar la <strong>Fecha de Vencimiento</strong> de un producto con el{" "}
                <strong>Índice de Pobreza Multidimensional (IPM)</strong> de un municipio para priorizar despachos.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 bg-background/15 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/15 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-alert-ok mt-0.5 shrink-0" />
            <p className="text-sm text-primary-foreground leading-relaxed">
              <strong>Usa este Dashboard</strong> para priorizar el despacho de alimentos próximos a vencer hacia las zonas de mayor IPM:{" "}
              <strong>Uribia (92.2)</strong>, <strong>Quibdó (65.8)</strong>, <strong>Tumaco</strong> y otros municipios vulnerables.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
