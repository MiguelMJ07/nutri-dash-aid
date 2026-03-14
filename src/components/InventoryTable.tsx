import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { inventario, getProductoById, getDonanteById, getDaysUntilExpiry, getCategoriaById } from "@/data/mockData";
import { Package, Clock, Search } from "lucide-react";

function expiryColor(days: number): string {
  if (days <= 2) return "bg-alert-critical";
  if (days <= 5) return "bg-alert-warning";
  return "bg-alert-ok";
}

function expiryProgress(days: number): number {
  if (days <= 0) return 100;
  if (days >= 30) return 5;
  return Math.min(100, Math.max(5, ((30 - days) / 30) * 100));
}

function statusBadge(estado: string) {
  switch (estado) {
    case "Disponible": return <Badge className="bg-primary/15 text-primary border-primary/20 hover:bg-primary/20">Disponible</Badge>;
    case "Reservado": return <Badge className="bg-accent/15 text-accent border-accent/20 hover:bg-accent/20">Reservado</Badge>;
    case "Despachado": return <Badge className="bg-alert-ok/15 text-alert-ok border-alert-ok/20 hover:bg-alert-ok/20">Despachado</Badge>;
    case "Vencido": return <Badge variant="destructive">Vencido</Badge>;
    default: return <Badge variant="outline">{estado}</Badge>;
  }
}

export default function InventoryTable() {
  const [filter, setFilter] = useState("");

  const filtered = inventario.filter((inv) => {
    const prod = getProductoById(inv.producto_id);
    const don = getDonanteById(inv.donante_id);
    const q = filter.toLowerCase();
    return (
      !q ||
      prod?.nombre.toLowerCase().includes(q) ||
      don?.nombre.toLowerCase().includes(q) ||
      inv.lote.toLowerCase().includes(q)
    );
  });

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" /> Inventario Activo
        </CardTitle>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Buscar producto, donante, lote..."
            className="pl-9 pr-3 py-2 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring w-64"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-muted-foreground">
              <th className="pb-3 font-medium">Producto</th>
              <th className="pb-3 font-medium">Donante</th>
              <th className="pb-3 font-medium">Lote</th>
              <th className="pb-3 font-medium text-right">Kg</th>
              <th className="pb-3 font-medium">Vencimiento</th>
              <th className="pb-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inv) => {
              const prod = getProductoById(inv.producto_id);
              const don = getDonanteById(inv.donante_id);
              const days = getDaysUntilExpiry(inv.fecha_vencimiento);
              const cat = prod ? getCategoriaById(prod.categoria_id) : null;

              return (
                <tr key={inv.id} className="border-b border-border/50 hover:bg-muted/40 transition-colors">
                  <td className="py-3">
                    <div>
                      <span className="font-medium text-foreground">{prod?.nombre}</span>
                      <span className="block text-xs text-muted-foreground">{cat?.nombre}</span>
                    </div>
                  </td>
                  <td className="py-3 text-muted-foreground">{don?.nombre}</td>
                  <td className="py-3 font-mono text-xs">{inv.lote}</td>
                  <td className="py-3 text-right font-semibold">{inv.cantidad_kg.toLocaleString("es-CO")}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2 min-w-[160px]">
                      <Clock className={`w-3.5 h-3.5 ${days <= 3 ? "text-alert-critical" : days <= 5 ? "text-alert-warning" : "text-alert-ok"}`} />
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{inv.fecha_vencimiento}</span>
                          <span className="font-semibold">{days}d</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${expiryColor(days)}`}
                            style={{ width: `${expiryProgress(days)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">{statusBadge(inv.estado)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
