import { Card, CardContent } from "@/components/ui/card";
import { Scale, Zap, ArrowRight } from "lucide-react";

export default function ValueProposition() {
    return (
        <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
                <div className="gradient-fao px-6 py-8 sm:py-10 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                        {/* Icon */}
                        <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                            <Scale className="w-10 h-10 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                            Propuesta de Valor: Justicia Alimentaria
                        </h3>

                        {/* Quote */}
                        <blockquote className="text-base sm:text-lg text-white/90 leading-relaxed font-medium italic">
                            "Nuestro sistema no es solo una base de datos; es una herramienta de{" "}
                            <span className="text-amber-300 font-bold not-italic">Justicia Alimentaria</span>. Al reducir el tiempo de
                            respuesta logística mediante SQL, garantizamos que el excedente de un supermercado en{" "}
                            <span className="text-white font-bold not-italic">Antioquia</span> llegue a una mesa en el{" "}
                            <span className="text-white font-bold not-italic">Chocó</span> antes de convertirse en un residuo ambiental."
                        </blockquote>

                        {/* Action items */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                                <Zap className="w-5 h-5 text-amber-300 mx-auto mb-2" />
                                <p className="text-sm font-bold text-white">Tiempo Real</p>
                                <p className="text-xs text-white/70 mt-1">
                                    Cruce instantáneo de inventario con necesidad territorial
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                                <ArrowRight className="w-5 h-5 text-green-400 mx-auto mb-2" />
                                <p className="text-sm font-bold text-white">Despacho Inteligente</p>
                                <p className="text-xs text-white/70 mt-1">
                                    Prioridad automática por IPM y fecha de vencimiento
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                                <Scale className="w-5 h-5 text-blue-300 mx-auto mb-2" />
                                <p className="text-sm font-bold text-white">Impacto Medible</p>
                                <p className="text-xs text-white/70 mt-1">
                                    Cada ración salvada se traduce en datos y reportes de impacto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
