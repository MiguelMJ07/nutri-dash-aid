import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { BarChart3 } from "lucide-react";

const etapasPerdida = [
    { etapa: "Producción Agropecuaria", porcentaje: 40.5, color: "hsl(4, 72%, 50%)" },
    { etapa: "Poscosecha y Almacenamiento", porcentaje: 23.3, color: "hsl(15, 70%, 50%)" },
    { etapa: "Distribución y Retail", porcentaje: 20.6, color: "hsl(207, 90%, 35%)" },
    { etapa: "Hogares (Consumo)", porcentaje: 15.6, color: "hsl(35, 90%, 55%)" },
];

const CustomBarTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    return (
        <div className="bg-card border rounded-lg p-3 shadow-lg text-sm">
            <p className="font-bold text-foreground">{d.etapa}</p>
            <p className="text-muted-foreground">{d.porcentaje}% de la pérdida total en Colombia</p>
        </div>
    );
};

export default function LossByStageChart() {
    return (
        <Card className="border-none shadow-md">
            <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="w-5 h-5 text-fao" />
                    <h3 className="text-lg font-bold text-foreground">¿Dónde Ocurre la Pérdida?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                    Distribución de la pérdida y desperdicio de alimentos (PDA) en Colombia por etapa de la cadena productiva.
                </p>
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={etapasPerdida} layout="vertical" margin={{ top: 5, right: 50, left: 20, bottom: 5 }}>
                        <XAxis type="number" domain={[0, 50]} tick={{ fontSize: 11 }} unit="%" />
                        <YAxis dataKey="etapa" type="category" width={200} tick={{ fontSize: 12 }} />
                        <Tooltip content={<CustomBarTooltip />} />
                        <Bar dataKey="porcentaje" radius={[0, 8, 8, 0]} barSize={36}>
                            {etapasPerdida.map((entry, idx) => (
                                <Cell key={idx} fill={entry.color} />
                            ))}
                            <LabelList dataKey="porcentaje" position="right" formatter={(v: number) => `${v}%`} style={{ fontSize: 13, fontWeight: 700, fill: "hsl(215, 25%, 30%)" }} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                {/* Annotation */}
                <div className="mt-4 rounded-lg bg-fao/5 border border-fao/20 p-3 flex items-start gap-2">
                    <div className="w-4 h-4 rounded-sm mt-0.5 shrink-0" style={{ background: "hsl(207, 90%, 35%)" }} />
                    <p className="text-sm text-foreground">
                        <strong>Distribución y Retail (20.6%)</strong> — Aquí es donde actúa tu Proyecto SQL de trazabilidad logística.
                        <span className="text-muted-foreground"> Cada kilo rescatado en esta etapa llega directamente a quienes más lo necesitan.</span>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
