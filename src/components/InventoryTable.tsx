import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { inventario as initialInventario, getProductoById, getDonanteById, getDaysUntilExpiry, getCategoriaById, categorias, type Inventario } from "@/data/mockData";
import { Package, Clock, Search, Filter, Truck } from "lucide-react";
import { toast } from "sonner";

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
  const [categoryFilter, setCategoryFilter] = useState<number | null>(null);
  const [items, setItems] = useState<Inventario[]>([...initialInventario]);

  const handleDespachar = (id: number) => {
    setItems((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, estado: "Despachado" as const } : inv))
    );
    const inv = items.find((i) => i.id === id);
    const prod = inv ? getProductoById(inv.producto_id) : null;
    toast.success(`Lote ${inv?.lote} de ${prod?.nombre} marcado como Despachado`);
  };

  const filtered = items.filter((inv) => {
    const prod = getProductoById(inv.producto_id);
    const don = getDonanteById(inv.donante_id);
    const q = filter.toLowerCase();
    const matchesText =
      !q ||
      prod?.nombre.toLowerCase().includes(q) ||
      don?.nombre.toLowerCase().includes(q) ||
      inv.lote.toLowerCase().includes(q);
    const matchesCategory = categoryFilter === null || prod?.categoria_id === categoryFilter;
    return matchesText && matchesCategory;
  });

  // Unique categories in use
  const usedCategories = [...new Set(items.map((inv) => getProductoById(inv.producto_id)?.categoria_id).filter(Boolean))] as number[];

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="flex flex-col gap-3 pb-3">
        <div className="flex flex-row items-center justify-between">
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
        </div>
        {/* Category Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <button
            onClick={() => setCategoryFilter(null)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              categoryFilter === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Todas
          </button>
          {usedCategories.map((catId) => {
            const cat = getCategoriaById(catId);
            if (!cat) return null;
            return (
              <button
                key={catId}
                onClick={() => setCategoryFilter(catId)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === catId
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.nombre}
              </button>
            );
          })}
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
              <th className="pb-3 font-medium">Acción</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inv) => {
              const prod = getProductoById(inv.producto_id);
              const don = getDonanteById(inv.donante_id);
              const days = getDaysUntilExpiry(inv.fecha_vencimiento);
              const cat = prod ? getCategoriaById(prod.categoria_id) : null;
              const isUrgent = days <= 3 && inv.estado === "Disponible";

              return (
                <tr
                  key={inv.id}
                  className={`border-b border-border/50 hover:bg-muted/40 transition-colors ${
                    isUrgent ? "animate-pulse-alert" : ""
                  }`}
                >
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
                  <td className="py-3">
                    {inv.estado === "Disponible" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDespachar(inv.id)}
                        className="text-xs gap-1"
                      >
                        <Truck className="w-3.5 h-3.5" /> Despachar
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
