import { Globe, TrendingDown, AlertTriangle, Lightbulb } from "lucide-react";

const heroStat = {
    valor: "12.2",
    unidad: "Millones",
    texto: "de colombianos comen menos de 3 veces al día",
    fuente: "ABACO Colombia, 2023",
};

const secondaryStats = [
    {
        icon: TrendingDown,
        valor: "9.76M",
        unidad: "ton/año",
        texto: "de alimentos se pierden en Colombia — el 34% de la oferta alimentaria nacional.",
        fuente: "DNP, 2023",
    },
    {
        icon: AlertTriangle,
        valor: "8M+",
        unidad: "personas",
        texto: "podrían alimentarse durante un año completo con lo que Colombia desperdicia.",
        fuente: "FAO / Banco de Alimentos",
    },
    {
        icon: Lightbulb,
        valor: "3er",
        unidad: "emisor mundial",
        texto: "Si el desperdicio de alimentos fuera un país, sería el tercer mayor emisor de gases efecto invernadero.",
        fuente: "FAO SOFA Report",
    },
    {
        icon: Globe,
        valor: "30%",
        unidad: "global",
        texto: "de los alimentos producidos en el mundo se pierden o desperdician cada año.",
        fuente: "FAO, 2023",
    },
];

export default function HeroStats() {
    return (
        <div className="space-y-6">
            {/* Hero Stat */}
            <div className="text-center py-8 px-4 rounded-2xl gradient-fao relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="relative z-10">
                    <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-2">
                        Estadística de Acceso Alimentario
                    </p>
                    <div className="flex items-baseline justify-center gap-3 mb-3 animate-count-up">
                        <span className="text-7xl sm:text-8xl font-black text-white tracking-tight">
                            {heroStat.valor}
                        </span>
                        <span className="text-2xl sm:text-3xl font-bold text-white/80">{heroStat.unidad}</span>
                    </div>
                    <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                        {heroStat.texto}
                    </p>
                    <p className="text-xs text-white/40 mt-4">Fuente: {heroStat.fuente}</p>
                </div>
            </div>

            {/* Secondary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {secondaryStats.map((item, i) => (
                    <div
                        key={i}
                        className="rounded-xl border border-border bg-card p-5 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up"
                        style={{ animationDelay: `${i * 100}ms` }}
                    >
                        <item.icon className="w-5 h-5 mb-3 text-fao" />
                        <div className="flex items-baseline gap-1.5 mb-1">
                            <span className="text-3xl font-extrabold text-foreground">{item.valor}</span>
                            <span className="text-xs text-muted-foreground">{item.unidad}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.texto}</p>
                        <p className="text-xs text-muted-foreground/50 mt-2">Fuente: {item.fuente}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
