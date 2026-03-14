import { Card, CardContent } from "@/components/ui/card";
import { RECURSOS_POR_TONELADA } from "@/data/mockData";
import { Droplets, Wind, Trash2 } from "lucide-react";

const recursos = [
    {
        icon: Droplets,
        titulo: "Agua Dulce Desperdiciada",
        valor: RECURSOS_POR_TONELADA.litros_agua.toLocaleString("es-CO"),
        unidad: "litros por tonelada",
        descripcion:
            "de agua dulce se desperdician por cada tonelada de alimentos que termina en rellenos sanitarios. Equivale a llenar una piscina semiolímpica.",
        color: "text-blue-500",
        bg: "bg-blue-500/10 border-blue-500/20",
        barWidth: "100%",
        barColor: "bg-blue-500",
    },
    {
        icon: Wind,
        titulo: "Emisiones de Metano",
        valor: RECURSOS_POR_TONELADA.kg_metano.toLocaleString("es-CO"),
        unidad: "kg CH₄ por tonelada",
        descripcion:
            "de metano se emiten por cada tonelada de residuos orgánicos en descomposición. El metano es 80 veces más potente que el CO₂ a corto plazo.",
        color: "text-amber-600",
        bg: "bg-amber-500/10 border-amber-500/20",
        barWidth: "68%",
        barColor: "bg-amber-500",
    },
    {
        icon: Trash2,
        titulo: "Relleno Doña Juana (Bogotá)",
        valor: RECURSOS_POR_TONELADA.dona_juana_tons_dia.toLocaleString("es-CO"),
        unidad: "toneladas por día",
        descripcion:
            "de residuos llegan diariamente a Doña Juana, el mayor relleno sanitario de Colombia. Una fracción significativa es materia orgánica que pudo alimentar personas.",
        color: "text-red-500",
        bg: "bg-red-500/10 border-red-500/20",
        barWidth: "85%",
        barColor: "bg-red-500",
    },
];

export default function ResourceLossInfographic() {
    return (
        <Card className="border-none shadow-md">
            <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">
                    Impacto Ambiental: Recursos Perdidos por Tonelada
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                    Cada tonelada de comida desperdiciada no solo es hambre que no se sacia, sino recursos naturales irrecuperables.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recursos.map((r, i) => (
                        <div
                            key={i}
                            className={`rounded-xl border p-5 ${r.bg} transition-all hover:shadow-md`}
                        >
                            <r.icon className={`w-8 h-8 ${r.color} mb-3`} />
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                                {r.titulo}
                            </p>
                            <div className="flex items-baseline gap-1.5 mb-2">
                                <span className="text-3xl font-black text-foreground">{r.valor}</span>
                                <span className="text-xs text-muted-foreground">{r.unidad}</span>
                            </div>
                            {/* Progress bar */}
                            <div className="w-full h-2 bg-muted rounded-full mb-3 overflow-hidden">
                                <div className={`h-full ${r.barColor} rounded-full transition-all duration-700`} style={{ width: r.barWidth }} />
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {r.descripcion}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 text-xs text-muted-foreground/60 text-center">
                    Fuentes: FAO, IDEAM, Superservicios Colombia
                </div>
            </CardContent>
        </Card>
    );
}
