import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getImpactReport } from "@/data/mockData";
import { FileText, Package, Droplets, Wind, MapPin, Users, Apple } from "lucide-react";

export default function ImpactReportButton() {
    const [open, setOpen] = useState(false);
    const report = getImpactReport();

    const metrics = [
        {
            icon: Package,
            label: "Kilos Rescatados",
            value: report.totalKgRescatados.toLocaleString("es-CO"),
            unit: "kg",
            color: "text-fao",
            bg: "bg-fao/10",
        },
        {
            icon: Users,
            label: "Raciones Salvadas",
            value: report.totalRaciones.toLocaleString("es-CO"),
            unit: "raciones",
            color: "text-green-600",
            bg: "bg-green-100",
        },
        {
            icon: Apple,
            label: "Micro-nutrientes",
            value: report.kgMicronutrientes.toLocaleString("es-CO"),
            unit: "kg frutas/verduras",
            color: "text-orange-600",
            bg: "bg-orange-100",
        },
        {
            icon: Droplets,
            label: "Agua Ahorrada",
            value: report.litrosAguaAhorrados.toLocaleString("es-CO"),
            unit: "litros",
            color: "text-blue-600",
            bg: "bg-blue-100",
        },
        {
            icon: Wind,
            label: "Metano Evitado",
            value: report.kgMetanoEvitados.toLocaleString("es-CO"),
            unit: "kg CH₄",
            color: "text-amber-600",
            bg: "bg-amber-100",
        },
        {
            icon: MapPin,
            label: "Municipios Beneficiados",
            value: report.municipiosBeneficiados.toString(),
            unit: "municipios",
            color: "text-red-600",
            bg: "bg-red-100",
        },
    ];

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                size="lg"
                className="w-full sm:w-auto gradient-fao text-white font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] border-none"
            >
                <FileText className="w-5 h-5 mr-2" />
                Generar Reporte de Impacto
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-xl flex items-center gap-2">
                            <FileText className="w-6 h-6 text-fao" />
                            Reporte de Impacto — Simulacro
                        </DialogTitle>
                        <DialogDescription>
                            Resumen de raciones salvadas, recursos ahorrados y beneficiarios en esta simulación.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                        {metrics.map((m, i) => (
                            <div
                                key={i}
                                className={`rounded-xl ${m.bg} p-4 text-center`}
                            >
                                <m.icon className={`w-6 h-6 ${m.color} mx-auto mb-2`} />
                                <p className="text-2xl font-black text-foreground">{m.value}</p>
                                <p className="text-xs text-muted-foreground font-medium mt-0.5">{m.unit}</p>
                                <p className="text-xs text-muted-foreground/70 mt-1">{m.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Top Donors */}
                    <div className="mt-4 rounded-lg bg-muted/50 p-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Principales Donantes</p>
                        <div className="flex flex-wrap gap-2">
                            {report.donantesPrincipales.map((name) => (
                                <span key={name} className="text-xs bg-fao/10 text-fao font-medium px-2.5 py-1 rounded-full">
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tonnage summary */}
                    <div className="mt-3 text-center text-sm text-muted-foreground border-t pt-4">
                        <p>
                            Se desviaron <strong className="text-foreground">{report.toneladasDesviadas.toFixed(1)} toneladas</strong> de rellenos sanitarios hacia comunidades vulnerables.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
