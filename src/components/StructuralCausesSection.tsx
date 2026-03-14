import { Card, CardContent } from "@/components/ui/card";
import { Route, Thermometer, Database, ArrowRight } from "lucide-react";

const causas = [
    {
        icon: Route,
        titulo: "Infraestructura Logística",
        porcentaje: "40.5%",
        subtitulo: "de la pérdida se da en el campo",
        descripcion:
            "Las vías terciarias en mal estado impiden sacar las cosechas a tiempo. Municipios como Uribia, Alto Baudó y Guapi quedan aislados durante meses en época de lluvias, dejando toneladas de alimentos pudriéndose en el origen.",
        color: "border-l-red-500",
        iconColor: "text-red-500",
        iconBg: "bg-red-50",
    },
    {
        icon: Thermometer,
        titulo: "Falta de Redes de Frío",
        porcentaje: "20.6%",
        subtitulo: "se pierde en distribución",
        descripcion:
            "Productos como lácteos y carnes se pierden en el transporte por no tener monitoreo térmico constante. La Leche Colanta o el Pollo de El Bucanero pueden dañarse antes de llegar al destino sin cadena de frío trazable.",
        color: "border-l-blue-500",
        iconColor: "text-blue-500",
        iconBg: "bg-blue-50",
    },
    {
        icon: Database,
        titulo: "Asimetría de Información",
        porcentaje: "Crítico",
        subtitulo: "punto de intervención SQL",
        descripcion:
            "Los donantes no saben quién necesita el alimento con urgencia, y los bancos de alimentos no siempre saben qué hay disponible en tiempo real. Aquí es donde tu Dashboard SQL interviene: cruzando oferta con necesidad.",
        color: "border-l-fao",
        iconColor: "text-fao",
        iconBg: "bg-blue-50",
        highlight: true,
    },
];

export default function StructuralCausesSection() {
    return (
        <Card className="border-none shadow-md">
            <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                    Causas Estructurales en Colombia
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
                    Entender <strong>por qué</strong> se pierde la comida es vital para entender por qué un sistema de base de datos como este es la solución.
                </p>

                <div className="space-y-4">
                    {causas.map((c, i) => (
                        <div
                            key={i}
                            className={`rounded-xl border-l-4 ${c.color} bg-card border border-border/50 p-5 transition-all hover:shadow-md ${c.highlight ? "ring-2 ring-fao/20 bg-blue-50/30" : ""
                                }`}
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className={`shrink-0 p-3 rounded-lg ${c.iconBg} self-start`}>
                                    <c.icon className={`w-6 h-6 ${c.iconColor}`} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                                        <h4 className="font-bold text-foreground text-lg">{c.titulo}</h4>
                                        <span className={`text-sm font-bold px-2 py-0.5 rounded-full ${c.highlight
                                                ? "bg-fao/10 text-fao"
                                                : "bg-muted text-muted-foreground"
                                            }`}>
                                            {c.porcentaje}
                                        </span>
                                        <span className="text-xs text-muted-foreground">— {c.subtitulo}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{c.descripcion}</p>
                                    {c.highlight && (
                                        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-fao">
                                            <ArrowRight className="w-4 h-4" />
                                            Este Dashboard resuelve este problema con datos en tiempo real
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
