import { Card, CardContent } from "@/components/ui/card";
import { Droplets, CloudRain, Mountain, Leaf } from "lucide-react";

const costos = [
    {
        icon: Droplets,
        titulo: "Huella Hídrica",
        stat: "Millones",
        unidad: "de m³ de agua dulce",
        descripcion:
            "Se desperdician millones de metros cúbicos de agua dulce utilizados en riego, especialmente en cultivos de arroz y frutas. Cada kilo de arroz requiere ~2.500 litros de agua; cuando se pierde, ese recurso hídrico es irrecuperable.",
        color: "text-blue-600",
        bg: "from-blue-50 to-blue-100/50",
        iconBg: "bg-blue-100",
        barWidth: "92%",
        barColor: "bg-blue-500",
    },
    {
        icon: CloudRain,
        titulo: "Emisiones de CO₂ y Metano",
        stat: "25×",
        unidad: "más potente que el CO₂",
        descripcion:
            "Los alimentos que terminan en vertederos se descomponen anaeróbicamente, produciendo metano, un gas 25 veces más potente que el CO₂ en el calentamiento global. Colombia aporta significativamente a esta crisis desde sus rellenos sanitarios.",
        color: "text-amber-700",
        bg: "from-amber-50 to-orange-100/50",
        iconBg: "bg-amber-100",
        barWidth: "78%",
        barColor: "bg-amber-500",
    },
    {
        icon: Mountain,
        titulo: "Uso de Tierras",
        stat: "Millones",
        unidad: "de hectáreas erosionadas",
        descripcion:
            "Se estima que el área utilizada para cultivar alimentos que se pierden en Colombia equivale a millones de hectáreas de suelo fértil que sufren erosión innecesaria. Tierra productiva devastada para producir basura.",
        color: "text-green-700",
        bg: "from-green-50 to-emerald-100/50",
        iconBg: "bg-green-100",
        barWidth: "85%",
        barColor: "bg-green-600",
    },
];

export default function EnvironmentalCostSection() {
    return (
        <Card className="border-none shadow-md overflow-hidden">
            <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-6 py-5">
                    <div className="flex items-center gap-3 mb-1">
                        <Leaf className="w-6 h-6 text-green-400" />
                        <h3 className="text-xl font-bold text-white">El Costo Ambiental Invisible</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                        No solo se pierde comida; se pierden los recursos que se usaron para producirla. En Colombia, el desperdicio de{" "}
                        <strong className="text-white">9.76 millones de toneladas</strong> de alimentos implica una devastación ambiental silenciosa.
                    </p>
                </div>

                {/* Cards */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {costos.map((c, i) => (
                            <div
                                key={i}
                                className={`rounded-xl bg-gradient-to-br ${c.bg} border border-border/50 p-5 transition-all hover:shadow-lg hover:-translate-y-0.5`}
                            >
                                <div className={`inline-flex p-2.5 rounded-lg ${c.iconBg} mb-3`}>
                                    <c.icon className={`w-6 h-6 ${c.color}`} />
                                </div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                                    {c.titulo}
                                </p>
                                <div className="flex items-baseline gap-1.5 mb-2">
                                    <span className="text-3xl font-black text-foreground">{c.stat}</span>
                                    <span className="text-xs text-muted-foreground">{c.unidad}</span>
                                </div>
                                {/* Visual bar */}
                                <div className="w-full h-1.5 bg-muted rounded-full mb-3 overflow-hidden">
                                    <div
                                        className={`h-full ${c.barColor} rounded-full transition-all duration-1000`}
                                        style={{ width: c.barWidth }}
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {c.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
