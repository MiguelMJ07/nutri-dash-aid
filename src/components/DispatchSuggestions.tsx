import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDespachosSugeridos } from "@/data/mockData";
import { Truck, AlertTriangle, MapPin, ArrowRight } from "lucide-react";

const suggestions = getDespachosSugeridos();

export default function DispatchSuggestions() {
  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Truck className="w-5 h-5 text-accent" /> Despachos Sugeridos
        </CardTitle>
        <CardDescription>
          Cruce automático: productos con ≤5 días de vida útil → municipios con mayor IPM
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {suggestions.map((s) => (
            <div
              key={s.inventario.id}
              className={`rounded-lg border p-4 transition-all hover:shadow-md ${
                s.prioridad === "CRÍTICA" ? "border-alert-critical/30 bg-alert-critical/5" : "border-alert-warning/30 bg-alert-warning/5"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  {s.prioridad === "CRÍTICA" ? (
                    <Badge className="bg-alert-critical text-primary-foreground border-none animate-pulse-alert">
                      <AlertTriangle className="w-3 h-3 mr-1" /> CRÍTICA
                    </Badge>
                  ) : (
                    <Badge className="bg-alert-warning text-earth-dark border-none">ALTA</Badge>
                  )}
                  <span className="text-xs text-muted-foreground font-mono">{s.inventario.lote}</span>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{s.producto.nombre}</p>
                    <p className="text-xs text-muted-foreground">
                      {s.inventario.cantidad_kg.toLocaleString("es-CO")} kg · Donante: {s.donante.nombre}
                    </p>
                  </div>

                  <ArrowRight className="hidden sm:block w-4 h-4 text-muted-foreground" />

                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">{s.municipio.nombre}</p>
                      <p className="text-xs text-muted-foreground">
                        {s.departamento.nombre} · IPM {s.municipio.ipm}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`text-sm font-bold ${s.diasRestantes <= 2 ? "text-alert-critical" : "text-alert-warning"}`}>
                      {s.diasRestantes} día{s.diasRestantes !== 1 ? "s" : ""}
                    </p>
                    <p className="text-xs text-muted-foreground">restantes</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
