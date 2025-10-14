import { Link } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ActionButton {
  label: string;
  icon: LucideIcon;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  onClick?: () => void;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ActionButton[];
  children?: ReactNode;
}

export function PageHeader({
  title,
  description,
  actions,
  children,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <div className="flex gap-2">
        {actions?.map((action, index) => {
          const IconComponent = action.icon;

          if (action.href) {
            return (
              <Button key={index} variant={action.variant || "default"} asChild>
                <Link to={action.href}>
                  <IconComponent className="mr-2 h-4 w-4" />
                  {action.label}
                </Link>
              </Button>
            );
          }

          return (
            <Button
              key={index}
              variant={action.variant || "default"}
              onClick={action.onClick}
            >
              <IconComponent className="mr-2 h-4 w-4" />
              {action.label}
            </Button>
          );
        })}
        {children}
      </div>
    </div>
  );
}
