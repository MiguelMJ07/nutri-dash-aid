import { Card, CardContent } from "@/components/ui/card";
import { getMunicipiosAltoIPM, getDepartamentoById } from "@/data/mockData";
import { AlertTriangle, Heart, Users } from "lucide-react";

const topMunicipios = getMunicipiosAltoIPM().slice(0, 6);

const cifras = [
    {
        icon: AlertTriangle,
        valor: "30%",
        descripcion: "de los colombianos se encuentran en situación de inseguridad alimentaria moderada o grave.",
        fuente: "FAO, 2023",
        color: "text-red-600",
        bg: "bg-red-50",
    },
    {
        icon: Heart,
        valor: "Desnutrición Crónica",
        descripcion:
            "En departamentos como La Guajira y Chocó, la desnutrición afecta la capacidad de desarrollo cognitivo de miles de niños, generando un ciclo de pobreza intergeneracional.",
        fuente: "INS / Minsalud",
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        icon: Users,
        valor: "12.2M",
        descripcion: "de colombianos no tienen acceso constante a tres comidas al día, lo que significa que viven sin seguridad alimentaria básica.",
        fuente: "ABACO Colombia",
        color: "text-fao",
        bg: "bg-blue-50",
    },
];

export default function FoodSecurityImpact() {
    return (
        <Card className="border-none shadow-md overflow-hidden">
            <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 px-6 py-5">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Heart className="w-6 h-6" /> Impacto en la Seguridad Alimentaria
                    </h3>
                    <p className="text-sm text-white/80 mt-1">
                        Mientras se desperdician millones de toneladas, las cifras de desnutrición en Colombia son alarmantes.
                    </p>
                </div>

                <div className="p-6 space-y-6">
                    {/* Key figures */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {cifras.map((c, i) => (
                            <div key={i} className={`rounded-xl ${c.bg} p-5 border border-border/30`}>
                                <c.icon className={`w-6 h-6 ${c.color} mb-3`} />
                                <p className={`text-2xl font-black ${c.color} mb-1`}>{c.valor}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{c.descripcion}</p>
                                <p className="text-xs text-muted-foreground/50 mt-2">Fuente: {c.fuente}</p>
                            </div>
                        ))}
                    </div>

                    {/* Most affected municipalities from our DB */}
                    <div>
                        <p className="text-sm font-semibold text-foreground mb-3">
                            Municipios más afectados en nuestra base de datos:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                            {topMunicipios.map((m) => {
                                const depto = getDepartamentoById(m.departamento_id);
                                return (
                                    <div
                                        key={m.id}
                                        className="rounded-lg bg-red-50 border border-red-200/50 p-3 text-center hover:shadow-md transition-all"
                                    >
                                        <p className="text-lg font-black text-red-700">{m.ipm}</p>
                                        <p className="text-xs font-semibold text-foreground">{m.nombre}</p>
                                        <p className="text-xs text-muted-foreground">{depto?.nombre}</p>
                                        <p className="text-xs text-red-500 mt-0.5">{m.mortalidad_infantil}‰ mort.</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
