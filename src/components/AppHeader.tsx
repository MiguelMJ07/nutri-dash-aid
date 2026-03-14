import { Wheat, BarChart3, Package, Truck, Megaphone } from "lucide-react";

interface AppHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "concientizacion", label: "Impacto y Realidad", icon: Megaphone },
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "inventario", label: "Inventario", icon: Package },
  { id: "despachos", label: "Despachos", icon: Truck },
];

export default function AppHeader({ activeTab, onTabChange }: AppHeaderProps) {
  return (
    <header className="gradient-fao border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10">
              <Wheat className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-primary-foreground tracking-tight">
                SENA-Alimentos
              </h1>
              <p className="text-xs text-primary-foreground/60">
                Inteligencia Logística contra el Hambre
              </p>
            </div>
          </div>

          <nav className="flex gap-1 bg-white/5 rounded-lg p-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.id
                    ? "bg-white/15 text-primary-foreground"
                    : "text-primary-foreground/50 hover:text-primary-foreground/80"
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
