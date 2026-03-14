import { Card, CardContent } from "@/components/ui/card";
import { municipios, getDepartamentoById } from "@/data/mockData";
import { MapPin } from "lucide-react";

function getIPMColor(ipm: number): string {
    if (ipm >= 80) return "bg-red-600";
    if (ipm >= 60) return "bg-orange-500";
    if (ipm >= 40) return "bg-amber-400";
    return "bg-green-500";
}

function getIPMTextColor(ipm: number): string {
    if (ipm >= 60) return "text-white";
    return "text-foreground";
}

function getMortalityBadge(m: number): string {
    if (m >= 35) return "text-red-200 bg-red-900/40";
    if (m >= 25) return "text-orange-200 bg-orange-900/30";
    if (m >= 15) return "text-amber-800 bg-amber-200/60";
    return "text-green-800 bg-green-200/60";
}

const sortedMunicipios = [...municipios].sort((a, b) => b.ipm - a.ipm);

export default function HeatMapIPM() {
    return (
        <Card className="border-none shadow-md">
            <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-5 h-5 text-abaco" />
                    <h3 className="text-lg font-bold text-foreground">Mapa de Calor: Desnutrición Infantil por Municipio</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    Índice de Pobreza Multidimensional (IPM) y tasa de mortalidad infantil por cada 1.000 nacidos vivos. Los municipios con mayor IPM son los más vulnerables.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {sortedMunicipios.map((m) => {
                        const depto = getDepartamentoById(m.departamento_id);
                        return (
                            <div
                                key={m.id}
                                className={`${getIPMColor(m.ipm)} rounded-lg p-3 transition-all hover:scale-105 hover:shadow-lg cursor-default`}
                            >
                                <p className={`text-sm font-bold ${getIPMTextColor(m.ipm)} leading-tight`}>{m.nombre}</p>
                                <p className={`text-xs ${m.ipm >= 60 ? "text-white/70" : "text-muted-foreground"} mb-1.5`}>
                                    {depto?.nombre}
                                </p>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className={`text-xl font-black ${getIPMTextColor(m.ipm)}`}>{m.ipm}</span>
                                    <span className={`text-xs ${m.ipm >= 60 ? "text-white/60" : "text-muted-foreground"}`}>IPM</span>
                                </div>
                                <span className={`inline-block text-xs font-medium px-1.5 py-0.5 rounded ${getMortalityBadge(m.mortalidad_infantil)}`}>
                                    {m.mortalidad_infantil}‰ mort.
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-600" /> IPM ≥ 80 (Crítico)</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-orange-500" /> IPM 60-79 (Alto)</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-amber-400" /> IPM 40-59 (Medio)</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-green-500" /> IPM &lt; 40 (Bajo)</span>
                </div>
            </CardContent>
        </Card>
    );
}
