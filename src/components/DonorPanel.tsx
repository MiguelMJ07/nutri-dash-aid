import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { getDonantesRanking } from "@/data/mockData";
import { Users } from "lucide-react";

const ranking = getDonantesRanking();

const tipoBadgeColors: Record<string, string> = {
    Supermercado: "bg-blue-100 text-blue-800 border-blue-200",
    Productor: "bg-green-100 text-green-800 border-green-200",
    Industria: "bg-purple-100 text-purple-800 border-purple-200",
    ONG: "bg-amber-100 text-amber-800 border-amber-200",
};

const barColors = [
    "hsl(207, 90%, 35%)",
    "hsl(207, 80%, 42%)",
    "hsl(207, 70%, 48%)",
    "hsl(207, 60%, 54%)",
    "hsl(207, 50%, 60%)",
    "hsl(207, 45%, 64%)",
    "hsl(207, 40%, 68%)",
    "hsl(207, 35%, 72%)",
    "hsl(207, 30%, 76%)",
    "hsl(207, 25%, 80%)",
];

const chartData = ranking.slice(0, 10).map((d) => ({
    nombre: d.donante.nombre.length > 18 ? d.donante.nombre.slice(0, 16) + "…" : d.donante.nombre,
    nombreCompleto: d.donante.nombre,
    totalKg: d.totalKg,
    tipo: d.donante.tipo,
    numLotes: d.numLotes,
}));

const CustomDonorTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    return (
        <div className="bg-card border rounded-lg p-3 shadow-lg text-sm">
            <p className="font-bold text-foreground">{d.nombreCompleto}</p>
            <p className="text-muted-foreground">{d.tipo}</p>
            <div className="mt-1 space-y-0.5">
                <p>Total: <span className="font-semibold">{d.totalKg.toLocaleString("es-CO")} kg</span></p>
                <p>Lotes: <span className="font-semibold">{d.numLotes}</span></p>
            </div>
        </div>
    );
};

export default function DonorPanel() {
    return (
        <Card className="border-none shadow-md">
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-fao" /> Panel de Donantes
                </CardTitle>
                <CardDescription>
                    Top 10 entidades que más aportan a la mitigación del hambre (kg totales donados)
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={340}>
                    <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 40, left: 10, bottom: 0 }}>
                        <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`} />
                        <YAxis dataKey="nombre" type="category" width={150} tick={{ fontSize: 11 }} />
                        <Tooltip content={<CustomDonorTooltip />} />
                        <Bar dataKey="totalKg" radius={[0, 6, 6, 0]} barSize={24}>
                            {chartData.map((_, idx) => (
                                <Cell key={idx} fill={barColors[idx % barColors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                {/* Type badges legend */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {["Supermercado", "Productor", "Industria", "ONG"].map((tipo) => (
                        <Badge key={tipo} variant="outline" className={`${tipoBadgeColors[tipo]} text-xs`}>
                            {tipo}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
