import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getBubbleChartData } from "@/data/mockData";

const data = getBubbleChartData();

function getColor(ipm: number) {
  if (ipm >= 80) return "hsl(4, 72%, 50%)";
  if (ipm >= 60) return "hsl(35, 90%, 55%)";
  if (ipm >= 40) return "hsl(207, 70%, 50%)";
  return "hsl(145, 45%, 55%)";
}

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border rounded-lg p-3 shadow-lg text-sm">
      <p className="font-bold text-foreground">{d.nombre}</p>
      <p className="text-muted-foreground">{d.departamento}</p>
      <div className="mt-2 space-y-1">
        <p>IPM: <span className="font-semibold">{d.ipm}</span></p>
        <p>Kg Enviados: <span className="font-semibold">{d.kgEnviados.toLocaleString("es-CO")}</span></p>
        <p>Población: <span className="font-semibold">{d.poblacion.toLocaleString("es-CO")}</span></p>
        <p>Índice Necesidad: <span className="font-semibold">{d.necesidad.toLocaleString("es-CO")}</span></p>
      </div>
    </div>
  );
};

export default function BubbleChartComponent() {
  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">Mapa de Necesidades vs. Envíos</CardTitle>
        <CardDescription>Relación entre IPM municipal y kg de alimentos enviados. El tamaño representa la población.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={380}>
          <ScatterChart margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
            <XAxis
              dataKey="ipm"
              name="IPM"
              type="number"
              domain={[30, 100]}
              label={{ value: "Índice de Pobreza Multidimensional", position: "bottom", offset: 0, style: { fontSize: 12 } }}
              tick={{ fontSize: 11 }}
            />
            <YAxis
              dataKey="kgEnviados"
              name="Kg Enviados"
              label={{ value: "Kg Enviados", angle: -90, position: "insideLeft", style: { fontSize: 12 } }}
              tick={{ fontSize: 11 }}
            />
            <ZAxis dataKey="poblacion" range={[60, 600]} name="Población" />
            <Tooltip content={<CustomTooltip />} />
            <Scatter data={data} shape="circle">
              {data.map((entry, idx) => (
                <Cell key={idx} fill={getColor(entry.ipm)} fillOpacity={0.75} stroke={getColor(entry.ipm)} strokeWidth={1} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-600 inline-block" /> IPM ≥ 80</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-500 inline-block" /> IPM 60-79</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-fao-light inline-block" /> IPM 40-59</span>
        </div>
      </CardContent>
    </Card>
  );
}
