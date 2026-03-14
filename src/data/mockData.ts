// ==================== TYPES ====================
export interface Departamento {
  id: number;
  nombre: string;
  codigo_dane: string;
}

export interface Municipio {
  id: number;
  departamento_id: number;
  nombre: string;
  codigo_dane: string;
  ipm: number; // Índice de Pobreza Multidimensional
  poblacion: number;
}

export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface Producto {
  id: number;
  categoria_id: number;
  nombre: string;
  unidad_medida: string;
  peso_kg: number;
}

export interface Donante {
  id: number;
  nombre: string;
  tipo: "Supermercado" | "Productor" | "Industria" | "ONG";
  contacto: string;
  ciudad: string;
}

export interface Inventario {
  id: number;
  producto_id: number;
  donante_id: number;
  lote: string;
  cantidad_kg: number;
  fecha_ingreso: string;
  fecha_vencimiento: string;
  estado: "Disponible" | "Reservado" | "Despachado" | "Vencido";
  municipio_destino_id?: number;
}

// ==================== DATA ====================

export const departamentos: Departamento[] = [
  { id: 1, nombre: "La Guajira", codigo_dane: "44" },
  { id: 2, nombre: "Chocó", codigo_dane: "27" },
  { id: 3, nombre: "Cauca", codigo_dane: "19" },
  { id: 4, nombre: "Nariño", codigo_dane: "52" },
  { id: 5, nombre: "Córdoba", codigo_dane: "23" },
  { id: 6, nombre: "Sucre", codigo_dane: "70" },
  { id: 7, nombre: "Bolívar", codigo_dane: "13" },
  { id: 8, nombre: "Magdalena", codigo_dane: "47" },
  { id: 9, nombre: "Cesar", codigo_dane: "20" },
  { id: 10, nombre: "Norte de Santander", codigo_dane: "54" },
  { id: 11, nombre: "Antioquia", codigo_dane: "05" },
  { id: 12, nombre: "Valle del Cauca", codigo_dane: "76" },
  { id: 13, nombre: "Cundinamarca", codigo_dane: "25" },
  { id: 14, nombre: "Boyacá", codigo_dane: "15" },
  { id: 15, nombre: "Santander", codigo_dane: "68" },
  { id: 16, nombre: "Huila", codigo_dane: "41" },
  { id: 17, nombre: "Tolima", codigo_dane: "73" },
  { id: 18, nombre: "Arauca", codigo_dane: "81" },
  { id: 19, nombre: "Vichada", codigo_dane: "99" },
  { id: 20, nombre: "Amazonas", codigo_dane: "91" },
];

export const municipios: Municipio[] = [
  { id: 1, departamento_id: 1, nombre: "Uribia", codigo_dane: "44847", ipm: 92.2, poblacion: 187000 },
  { id: 2, departamento_id: 1, nombre: "Manaure", codigo_dane: "44560", ipm: 89.5, poblacion: 120000 },
  { id: 3, departamento_id: 2, nombre: "Quibdó", codigo_dane: "27001", ipm: 65.8, poblacion: 130000 },
  { id: 4, departamento_id: 2, nombre: "Alto Baudó", codigo_dane: "27025", ipm: 88.1, poblacion: 35000 },
  { id: 5, departamento_id: 3, nombre: "Guapi", codigo_dane: "19318", ipm: 78.3, poblacion: 30000 },
  { id: 6, departamento_id: 3, nombre: "López de Micay", codigo_dane: "19418", ipm: 85.6, poblacion: 22000 },
  { id: 7, departamento_id: 4, nombre: "Barbacoas", codigo_dane: "52079", ipm: 80.1, poblacion: 45000 },
  { id: 8, departamento_id: 4, nombre: "Olaya Herrera", codigo_dane: "52490", ipm: 82.4, poblacion: 33000 },
  { id: 9, departamento_id: 5, nombre: "Tierralta", codigo_dane: "23807", ipm: 72.9, poblacion: 100000 },
  { id: 10, departamento_id: 6, nombre: "San Onofre", codigo_dane: "70713", ipm: 70.5, poblacion: 50000 },
  { id: 11, departamento_id: 7, nombre: "El Carmen de Bolívar", codigo_dane: "13244", ipm: 68.2, poblacion: 75000 },
  { id: 12, departamento_id: 8, nombre: "Santa Marta", codigo_dane: "47001", ipm: 45.3, poblacion: 530000 },
  { id: 13, departamento_id: 9, nombre: "Valledupar", codigo_dane: "20001", ipm: 42.1, poblacion: 480000 },
  { id: 14, departamento_id: 10, nombre: "Tibú", codigo_dane: "54810", ipm: 74.6, poblacion: 55000 },
  { id: 15, departamento_id: 11, nombre: "Medellín", codigo_dane: "05001", ipm: 15.4, poblacion: 2500000 },
  { id: 16, departamento_id: 12, nombre: "Buenaventura", codigo_dane: "76109", ipm: 66.9, poblacion: 420000 },
  { id: 17, departamento_id: 13, nombre: "Bogotá", codigo_dane: "11001", ipm: 12.1, poblacion: 7900000 },
  { id: 18, departamento_id: 14, nombre: "Sogamoso", codigo_dane: "15759", ipm: 25.3, poblacion: 115000 },
  { id: 19, departamento_id: 19, nombre: "Puerto Carreño", codigo_dane: "99001", ipm: 60.2, poblacion: 18000 },
  { id: 20, departamento_id: 20, nombre: "Leticia", codigo_dane: "91001", ipm: 55.8, poblacion: 48000 },
  { id: 21, departamento_id: 1, nombre: "Riohacha", codigo_dane: "44001", ipm: 58.4, poblacion: 280000 },
  { id: 22, departamento_id: 2, nombre: "Istmina", codigo_dane: "27361", ipm: 75.2, poblacion: 28000 },
  { id: 23, departamento_id: 18, nombre: "Arauca", codigo_dane: "81001", ipm: 48.7, poblacion: 92000 },
  { id: 24, departamento_id: 5, nombre: "Montería", codigo_dane: "23001", ipm: 35.2, poblacion: 460000 },
];

export const categorias: Categoria[] = [
  { id: 1, nombre: "Cereales y Granos", descripcion: "Arroz, maíz, trigo, avena", icono: "Wheat" },
  { id: 2, nombre: "Tubérculos", descripcion: "Papa, yuca, ñame, plátano", icono: "Carrot" },
  { id: 3, nombre: "Lácteos", descripcion: "Leche, queso, yogurt", icono: "Milk" },
  { id: 4, nombre: "Proteínas", descripcion: "Pollo, carne, pescado, huevos", icono: "Drumstick" },
  { id: 5, nombre: "Frutas y Verduras", descripcion: "Frutas frescas, hortalizas", icono: "Apple" },
  { id: 6, nombre: "Leguminosas", descripcion: "Frijol, lenteja, garbanzo", icono: "Bean" },
  { id: 7, nombre: "Conservas", descripcion: "Enlatados, conservas, salsas", icono: "Package" },
  { id: 8, nombre: "Aceites y Grasas", descripcion: "Aceite vegetal, mantequilla", icono: "Droplets" },
  { id: 9, nombre: "Bebidas", descripcion: "Jugos, agua, bebidas hidratantes", icono: "GlassWater" },
  { id: 10, nombre: "Panadería", descripcion: "Pan, galletas, harinas", icono: "CakeSlice" },
  { id: 11, nombre: "Snacks", descripcion: "Barras, frutos secos, granola", icono: "Cookie" },
  { id: 12, nombre: "Endulzantes", descripcion: "Azúcar, panela, miel", icono: "Candy" },
  { id: 13, nombre: "Condimentos", descripcion: "Sal, especias, adobos", icono: "Flame" },
  { id: 14, nombre: "Comidas Preparadas", descripcion: "Sopas instantáneas, listas", icono: "Soup" },
  { id: 15, nombre: "Alimentos Infantiles", descripcion: "Papillas, fórmulas, cereales", icono: "Baby" },
  { id: 16, nombre: "Suplementos", descripcion: "Vitaminas, minerales, proteína", icono: "Pill" },
  { id: 17, nombre: "Carnes Procesadas", descripcion: "Jamón, salchicha, mortadela", icono: "Ham" },
  { id: 18, nombre: "Pescados y Mariscos", descripcion: "Atún, sardina, camarón", icono: "Fish" },
  { id: 19, nombre: "Productos de Soya", descripcion: "Leche de soya, tofu", icono: "Leaf" },
  { id: 20, nombre: "Otros", descripcion: "Productos no clasificados", icono: "Box" },
];

export const productos: Producto[] = [
  { id: 1, categoria_id: 1, nombre: "Arroz Diana x 5kg", unidad_medida: "kg", peso_kg: 5 },
  { id: 2, categoria_id: 1, nombre: "Arroz Roa x 1kg", unidad_medida: "kg", peso_kg: 1 },
  { id: 3, categoria_id: 2, nombre: "Papa criolla x 10kg", unidad_medida: "kg", peso_kg: 10 },
  { id: 4, categoria_id: 2, nombre: "Yuca fresca x 5kg", unidad_medida: "kg", peso_kg: 5 },
  { id: 5, categoria_id: 3, nombre: "Leche entera Colanta x 1L", unidad_medida: "litro", peso_kg: 1 },
  { id: 6, categoria_id: 3, nombre: "Yogurt Alpina x 200g", unidad_medida: "unidad", peso_kg: 0.2 },
  { id: 7, categoria_id: 4, nombre: "Pollo entero x 2kg", unidad_medida: "kg", peso_kg: 2 },
  { id: 8, categoria_id: 4, nombre: "Huevos x 30 unidades", unidad_medida: "canasta", peso_kg: 1.8 },
  { id: 9, categoria_id: 5, nombre: "Banano x 1kg", unidad_medida: "kg", peso_kg: 1 },
  { id: 10, categoria_id: 5, nombre: "Tomate x 2kg", unidad_medida: "kg", peso_kg: 2 },
  { id: 11, categoria_id: 6, nombre: "Frijol rojo x 500g", unidad_medida: "kg", peso_kg: 0.5 },
  { id: 12, categoria_id: 6, nombre: "Lenteja x 500g", unidad_medida: "kg", peso_kg: 0.5 },
  { id: 13, categoria_id: 7, nombre: "Atún Van Camps x 160g", unidad_medida: "unidad", peso_kg: 0.16 },
  { id: 14, categoria_id: 7, nombre: "Sardinas Isabel x 425g", unidad_medida: "unidad", peso_kg: 0.425 },
  { id: 15, categoria_id: 8, nombre: "Aceite Girasol x 3L", unidad_medida: "litro", peso_kg: 2.7 },
  { id: 16, categoria_id: 9, nombre: "Agua Cristal x 6L", unidad_medida: "litro", peso_kg: 6 },
  { id: 17, categoria_id: 10, nombre: "Pan tajado Bimbo x 600g", unidad_medida: "unidad", peso_kg: 0.6 },
  { id: 18, categoria_id: 12, nombre: "Panela x 1kg", unidad_medida: "kg", peso_kg: 1 },
  { id: 19, categoria_id: 15, nombre: "Bienestarina x 900g", unidad_medida: "unidad", peso_kg: 0.9 },
  { id: 20, categoria_id: 4, nombre: "Carne molida x 1kg", unidad_medida: "kg", peso_kg: 1 },
  { id: 21, categoria_id: 1, nombre: "Avena Quaker x 400g", unidad_medida: "unidad", peso_kg: 0.4 },
  { id: 22, categoria_id: 2, nombre: "Plátano verde x 5kg", unidad_medida: "kg", peso_kg: 5 },
  { id: 23, categoria_id: 3, nombre: "Queso campesino x 500g", unidad_medida: "kg", peso_kg: 0.5 },
  { id: 24, categoria_id: 5, nombre: "Cebolla cabezona x 2kg", unidad_medida: "kg", peso_kg: 2 },
];

export const donantes: Donante[] = [
  { id: 1, nombre: "Almacenes Éxito", tipo: "Supermercado", contacto: "logistica@exito.com", ciudad: "Medellín" },
  { id: 2, nombre: "Tiendas D1", tipo: "Supermercado", contacto: "donaciones@d1.com", ciudad: "Bogotá" },
  { id: 3, nombre: "Colanta", tipo: "Productor", contacto: "rse@colanta.com", ciudad: "Medellín" },
  { id: 4, nombre: "Alpina", tipo: "Productor", contacto: "social@alpina.com", ciudad: "Sopó" },
  { id: 5, nombre: "Nutresa", tipo: "Industria", contacto: "fundacion@nutresa.com", ciudad: "Medellín" },
  { id: 6, nombre: "Banco de Alimentos Bogotá", tipo: "ONG", contacto: "info@bancodealimentos.org", ciudad: "Bogotá" },
  { id: 7, nombre: "Almacenes Ara", tipo: "Supermercado", contacto: "rse@ara.com", ciudad: "Bogotá" },
  { id: 8, nombre: "Frigorífico Guadalupe", tipo: "Industria", contacto: "ventas@frigogpe.com", ciudad: "Bogotá" },
  { id: 9, nombre: "Hacienda Santa Cruz", tipo: "Productor", contacto: "admin@hdasantacruz.co", ciudad: "Villavicencio" },
  { id: 10, nombre: "Fundación Éxito", tipo: "ONG", contacto: "fundacion@exito.com", ciudad: "Medellín" },
  { id: 11, nombre: "Carulla FreshMarket", tipo: "Supermercado", contacto: "calidad@carulla.com", ciudad: "Bogotá" },
  { id: 12, nombre: "Bimbo Colombia", tipo: "Industria", contacto: "rse@bimbo.co", ciudad: "Tenjo" },
  { id: 13, nombre: "Levapan", tipo: "Industria", contacto: "social@levapan.com", ciudad: "Bogotá" },
  { id: 14, nombre: "Cencosud (Jumbo)", tipo: "Supermercado", contacto: "sostenibilidad@cencosud.co", ciudad: "Bogotá" },
  { id: 15, nombre: "Alquería", tipo: "Productor", contacto: "rse@alqueria.com", ciudad: "Cajicá" },
  { id: 16, nombre: "Postobón", tipo: "Industria", contacto: "social@postobon.com", ciudad: "Medellín" },
  { id: 17, nombre: "PriceSmart", tipo: "Supermercado", contacto: "community@pricesmart.com", ciudad: "Bogotá" },
  { id: 18, nombre: "Makro", tipo: "Supermercado", contacto: "donaciones@makro.co", ciudad: "Bogotá" },
  { id: 19, nombre: "Pollos El Bucanero", tipo: "Productor", contacto: "rse@bucanero.com", ciudad: "Cali" },
  { id: 20, nombre: "Fundación SACIAR", tipo: "ONG", contacto: "info@saciar.org", ciudad: "Medellín" },
];

// Helper to generate dates relative to today
const today = new Date();
const addDays = (d: Date, days: number) => {
  const r = new Date(d);
  r.setDate(r.getDate() + days);
  return r.toISOString().split("T")[0];
};
const subDays = (d: Date, days: number) => addDays(d, -days);

export const inventario: Inventario[] = [
  { id: 1, producto_id: 1, donante_id: 1, lote: "LOT-EX-001", cantidad_kg: 2500, fecha_ingreso: subDays(today, 25), fecha_vencimiento: addDays(today, 2), estado: "Disponible" },
  { id: 2, producto_id: 5, donante_id: 3, lote: "LOT-CO-012", cantidad_kg: 800, fecha_ingreso: subDays(today, 10), fecha_vencimiento: addDays(today, 1), estado: "Disponible" },
  { id: 3, producto_id: 7, donante_id: 8, lote: "LOT-FG-007", cantidad_kg: 1200, fecha_ingreso: subDays(today, 5), fecha_vencimiento: addDays(today, 3), estado: "Disponible" },
  { id: 4, producto_id: 3, donante_id: 9, lote: "LOT-HC-003", cantidad_kg: 3000, fecha_ingreso: subDays(today, 8), fecha_vencimiento: addDays(today, 4), estado: "Disponible" },
  { id: 5, producto_id: 9, donante_id: 2, lote: "LOT-D1-021", cantidad_kg: 500, fecha_ingreso: subDays(today, 3), fecha_vencimiento: addDays(today, 7), estado: "Disponible" },
  { id: 6, producto_id: 11, donante_id: 5, lote: "LOT-NU-015", cantidad_kg: 1500, fecha_ingreso: subDays(today, 15), fecha_vencimiento: addDays(today, 45), estado: "Disponible" },
  { id: 7, producto_id: 13, donante_id: 5, lote: "LOT-NU-022", cantidad_kg: 960, fecha_ingreso: subDays(today, 30), fecha_vencimiento: addDays(today, 180), estado: "Disponible" },
  { id: 8, producto_id: 19, donante_id: 10, lote: "LOT-FE-008", cantidad_kg: 4500, fecha_ingreso: subDays(today, 20), fecha_vencimiento: addDays(today, 90), estado: "Disponible" },
  { id: 9, producto_id: 15, donante_id: 14, lote: "LOT-JM-004", cantidad_kg: 810, fecha_ingreso: subDays(today, 12), fecha_vencimiento: addDays(today, 200), estado: "Disponible" },
  { id: 10, producto_id: 17, donante_id: 12, lote: "LOT-BI-019", cantidad_kg: 360, fecha_ingreso: subDays(today, 2), fecha_vencimiento: addDays(today, 5), estado: "Disponible" },
  { id: 11, producto_id: 20, donante_id: 19, lote: "LOT-BU-006", cantidad_kg: 700, fecha_ingreso: subDays(today, 1), fecha_vencimiento: addDays(today, 2), estado: "Disponible" },
  { id: 12, producto_id: 8, donante_id: 9, lote: "LOT-HC-011", cantidad_kg: 540, fecha_ingreso: subDays(today, 4), fecha_vencimiento: addDays(today, 10), estado: "Disponible" },
  { id: 13, producto_id: 6, donante_id: 4, lote: "LOT-AL-009", cantidad_kg: 200, fecha_ingreso: subDays(today, 6), fecha_vencimiento: addDays(today, 1), estado: "Disponible" },
  { id: 14, producto_id: 10, donante_id: 7, lote: "LOT-AR-014", cantidad_kg: 1800, fecha_ingreso: subDays(today, 3), fecha_vencimiento: addDays(today, 6), estado: "Disponible" },
  { id: 15, producto_id: 18, donante_id: 6, lote: "LOT-BA-017", cantidad_kg: 2200, fecha_ingreso: subDays(today, 7), fecha_vencimiento: addDays(today, 120), estado: "Reservado", municipio_destino_id: 1 },
  { id: 16, producto_id: 2, donante_id: 11, lote: "LOT-CA-020", cantidad_kg: 1000, fecha_ingreso: subDays(today, 14), fecha_vencimiento: addDays(today, 3), estado: "Disponible" },
  { id: 17, producto_id: 4, donante_id: 17, lote: "LOT-PS-005", cantidad_kg: 1600, fecha_ingreso: subDays(today, 6), fecha_vencimiento: addDays(today, 8), estado: "Disponible" },
  { id: 18, producto_id: 12, donante_id: 18, lote: "LOT-MK-023", cantidad_kg: 750, fecha_ingreso: subDays(today, 20), fecha_vencimiento: addDays(today, 60), estado: "Despachado", municipio_destino_id: 3 },
  { id: 19, producto_id: 21, donante_id: 13, lote: "LOT-LV-016", cantidad_kg: 400, fecha_ingreso: subDays(today, 9), fecha_vencimiento: addDays(today, 30), estado: "Disponible" },
  { id: 20, producto_id: 22, donante_id: 1, lote: "LOT-EX-025", cantidad_kg: 2000, fecha_ingreso: subDays(today, 2), fecha_vencimiento: addDays(today, 4), estado: "Disponible" },
  { id: 21, producto_id: 23, donante_id: 15, lote: "LOT-AQ-028", cantidad_kg: 300, fecha_ingreso: subDays(today, 1), fecha_vencimiento: addDays(today, 2), estado: "Disponible" },
  { id: 22, producto_id: 24, donante_id: 2, lote: "LOT-D1-030", cantidad_kg: 1100, fecha_ingreso: subDays(today, 4), fecha_vencimiento: addDays(today, 5), estado: "Disponible" },
  { id: 23, producto_id: 14, donante_id: 20, lote: "LOT-SC-032", cantidad_kg: 680, fecha_ingreso: subDays(today, 18), fecha_vencimiento: addDays(today, 150), estado: "Disponible" },
  { id: 24, producto_id: 16, donante_id: 16, lote: "LOT-PO-035", cantidad_kg: 3600, fecha_ingreso: subDays(today, 5), fecha_vencimiento: addDays(today, 90), estado: "Disponible" },
];

// ==================== HELPERS ====================

export function getDaysUntilExpiry(fecha_vencimiento: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exp = new Date(fecha_vencimiento);
  exp.setHours(0, 0, 0, 0);
  return Math.ceil((exp.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export function getProductoById(id: number) {
  return productos.find((p) => p.id === id);
}

export function getDonanteById(id: number) {
  return donantes.find((d) => d.id === id);
}

export function getMunicipioById(id: number) {
  return municipios.find((m) => m.id === id);
}

export function getDepartamentoById(id: number) {
  return departamentos.find((d) => d.id === id);
}

export function getCategoriaById(id: number) {
  return categorias.find((c) => c.id === id);
}

// KPI calculations
export function getKilosRescatados(): number {
  return inventario
    .filter((i) => i.estado === "Despachado" || i.estado === "Reservado")
    .reduce((sum, i) => sum + i.cantidad_kg, 0);
}

export function getLotesAlertaCritica(): number {
  return inventario.filter(
    (i) => i.estado === "Disponible" && getDaysUntilExpiry(i.fecha_vencimiento) <= 3
  ).length;
}

export function getMunicipiosAltoIPM(): Municipio[] {
  return municipios.filter((m) => m.ipm >= 60).sort((a, b) => b.ipm - a.ipm);
}

// Dispatch suggestions: products expiring in <=5 days → highest IPM municipalities
export function getDespachosSugeridos() {
  const urgentInventory = inventario
    .filter((i) => i.estado === "Disponible" && getDaysUntilExpiry(i.fecha_vencimiento) <= 5)
    .sort((a, b) => getDaysUntilExpiry(a.fecha_vencimiento) - getDaysUntilExpiry(b.fecha_vencimiento));

  const highIPM = getMunicipiosAltoIPM().slice(0, 8);

  return urgentInventory.map((inv, idx) => {
    const producto = getProductoById(inv.producto_id);
    const donante = getDonanteById(inv.donante_id);
    const municipio = highIPM[idx % highIPM.length];
    const depto = getDepartamentoById(municipio.departamento_id);
    return {
      inventario: inv,
      producto: producto!,
      donante: donante!,
      municipio,
      departamento: depto!,
      diasRestantes: getDaysUntilExpiry(inv.fecha_vencimiento),
      prioridad: getDaysUntilExpiry(inv.fecha_vencimiento) <= 2 ? "CRÍTICA" as const : "ALTA" as const,
    };
  });
}

// Bubble chart data: IPM vs kg sent per municipality
export function getBubbleChartData() {
  const sent = inventario.filter((i) => i.estado === "Despachado" || i.estado === "Reservado");
  return municipios
    .filter((m) => m.ipm >= 40)
    .map((m) => {
      const kgEnviados = sent
        .filter((i) => i.municipio_destino_id === m.id)
        .reduce((s, i) => s + i.cantidad_kg, 0);
      const depto = getDepartamentoById(m.departamento_id);
      return {
        nombre: m.nombre,
        departamento: depto?.nombre || "",
        ipm: m.ipm,
        kgEnviados,
        poblacion: m.poblacion,
        necesidad: Math.round(m.ipm * m.poblacion / 1000),
      };
    })
    .sort((a, b) => b.ipm - a.ipm);
}
