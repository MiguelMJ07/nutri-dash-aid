import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { donantes, productos } from "@/data/mockData";
import { PlusCircle, Check } from "lucide-react";
import { toast } from "sonner";

export default function DonationForm() {
  const [form, setForm] = useState({
    producto_id: "",
    donante_id: "",
    cantidad_kg: "",
    fecha_vencimiento: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.producto_id || !form.donante_id || !form.cantidad_kg || !form.fecha_vencimiento) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    setSubmitted(true);
    const prod = productos.find((p) => p.id === Number(form.producto_id));
    toast.success(`Lote de ${prod?.nombre} registrado exitosamente`);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ producto_id: "", donante_id: "", cantidad_kg: "", fecha_vencimiento: "" });
    }, 2000);
  };

  const selectClass = "w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
  const inputClass = selectClass;

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-primary" /> Registrar Donación
        </CardTitle>
        <CardDescription>Ingresa un nuevo lote de alimentos al inventario</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Producto</label>
            <select
              className={selectClass}
              value={form.producto_id}
              onChange={(e) => setForm({ ...form, producto_id: e.target.value })}
            >
              <option value="">Seleccionar...</option>
              {productos.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Donante</label>
            <select
              className={selectClass}
              value={form.donante_id}
              onChange={(e) => setForm({ ...form, donante_id: e.target.value })}
            >
              <option value="">Seleccionar...</option>
              {donantes.map((d) => (
                <option key={d.id} value={d.id}>{d.nombre} ({d.tipo})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Cantidad (kg)</label>
            <input
              type="number"
              className={inputClass}
              placeholder="Ej: 500"
              value={form.cantidad_kg}
              onChange={(e) => setForm({ ...form, cantidad_kg: e.target.value })}
              min="1"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Fecha de Vencimiento</label>
            <input
              type="date"
              className={inputClass}
              value={form.fecha_vencimiento}
              onChange={(e) => setForm({ ...form, fecha_vencimiento: e.target.value })}
            />
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" className="w-full" disabled={submitted}>
              {submitted ? (
                <><Check className="w-4 h-4 mr-1" /> Registrado</>
              ) : (
                <><PlusCircle className="w-4 h-4 mr-1" /> Registrar Lote</>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
