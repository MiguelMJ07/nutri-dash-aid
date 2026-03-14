import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPrioridadNutricional } from "@/data/mockData";
import { Target, AlertTriangle, ArrowUp } from "lucide-react";

const prioridades = getPrioridadNutricional();

function getAccionBadge(accion: string) {
    switch (accion) {
        case "INMEDIATA":
            return (
                <Badge className="bg-red-600 text-white border-none animate-pulse-alert text-xs">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Inmediata
                </Badge>
            );
        case "ALTA":
            return (
                <Badge className="bg-amber-500 text-white border-none text-xs">
                    <ArrowUp className="w-3 h-3 mr-1" /> Alta
                </Badge>
            );
        default:
            return (
                <Badge variant="secondary" className="text-xs">
                    Media
                </Badge>
            );
    }
}

export default function NutritionalPriorityTable() {
    return (
        <Card className="border-none shadow-md">
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-abaco" /> Ranking de Prioridad Nutricional
                </CardTitle>
                <CardDescription>
                    Lógica: <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">IPM × Kg Próximos a Vencer = Score</code>. Los valores más altos requieren acción inmediata.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="py-3 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">#</th>
                                <th className="py-3 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Municipio</th>
                                <th className="py-3 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Departamento</th>
                                <th className="py-3 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">IPM</th>
                                <th className="py-3 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Kg a Vencer</th>
                                <th className="py-3 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Score</th>
                                <th className="py-3 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prioridades.slice(0, 15).map((p, idx) => (
                                <tr
                                    key={p.municipio.id}
                                    className={`border-b last:border-b-0 transition-colors hover:bg-muted/50 ${p.accion === "INMEDIATA" ? "bg-red-50/50" : ""
                                        }`}
                                >
                                    <td className="py-3 px-2 font-bold text-muted-foreground">{idx + 1}</td>
                                    <td className="py-3 px-2 font-semibold text-foreground">{p.municipio.nombre}</td>
                                    <td className="py-3 px-2 text-muted-foreground">{p.departamento.nombre}</td>
                                    <td className="py-3 px-2 text-right">
                                        <span className={`font-bold ${p.municipio.ipm >= 80 ? "text-red-600" : p.municipio.ipm >= 60 ? "text-amber-600" : "text-foreground"}`}>
                                            {p.municipio.ipm}
                                        </span>
                                    </td>
                                    <td className="py-3 px-2 text-right font-medium">{p.kgProximosVencer.toLocaleString("es-CO")} kg</td>
                                    <td className="py-3 px-2 text-right">
                                        <span className="font-bold text-foreground">{p.score.toLocaleString("es-CO")}</span>
                                    </td>
                                    <td className="py-3 px-2 text-center">{getAccionBadge(p.accion)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
