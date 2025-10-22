import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { KeyMetric } from "@/lib/data";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

type KeyMetricsProps = {
  metrics: KeyMetric[];
};

export function KeyMetrics({ metrics }: KeyMetricsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <span
                className={cn(
                  "flex items-center gap-1",
                  metric.changeType === 'increase' ? 'text-green-500' : 'text-destructive'
                )}
              >
                {metric.changeType === "increase" ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {metric.change}
              </span>
              <span className="ml-2">{metric.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
