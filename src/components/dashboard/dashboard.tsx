"use client";

import { useState, useEffect } from "react";
import {
  keyMetrics as initialKeyMetrics,
  marketingRoiData as initialMarketingRoiData,
  netProfitMarginData as initialNetProfitMarginData,
} from "@/lib/data";
import { KeyMetrics } from "./key-metrics";
import { MarketingRoiChart } from "./marketing-roi-chart";
import { NetProfitMarginChart } from "./net-profit-margin-chart";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const fluctuate = (value: number, percent: number) => {
  const amount = value * (percent / 100);
  return value + (Math.random() * amount * 2 - amount);
};

export function Dashboard() {
  const [keyMetrics, setKeyMetrics] = useState(initialKeyMetrics);
  const [marketingRoiData, setMarketingRoiData] = useState(initialMarketingRoiData);
  const [netProfitMarginData, setNetProfitMarginData] = useState(initialNetProfitMarginData);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setKeyMetrics((prevMetrics) =>
        prevMetrics.map((metric) => {
          const originalValue = parseFloat(metric.value.replace(/[^0-9.]/g, ''));
          const newValue = fluctuate(originalValue, 2);
          const change = ((newValue - originalValue) / originalValue) * 100;
          return {
            ...metric,
            value: metric.id === 'sales' ? `$${newValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}` :
                   metric.id === 'vendors' ? `${Math.round(newValue).toLocaleString('en-US')}` :
                   `${newValue.toFixed(1)}%`,
            change: `${change > 0 ? '+' : ''}${change.toFixed(1)}%`,
            changeType: change >= 0 ? 'increase' : 'decrease',
          };
        })
      );

      setMarketingRoiData((prevData) => {
        const newData = [...prevData];
        const lastPoint = newData[newData.length - 1];
        const newRoi = fluctuate(lastPoint.roi, 5);
        newData[newData.length - 1] = { ...lastPoint, roi: parseFloat(newRoi.toFixed(1)) };
        return newData;
      });

      setNetProfitMarginData((prevData) => {
        const newData = [...prevData];
        const lastPoint = newData[newData.length - 1];
        const newMargin = fluctuate(lastPoint.margin, 3);
        newData[newData.length - 1] = { ...lastPoint, margin: parseFloat(newMargin.toFixed(1)) };
        return newData;
      });

    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      <KeyMetrics metrics={keyMetrics} />
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <MarketingRoiChart data={marketingRoiData} />
        <NetProfitMarginChart data={netProfitMarginData} />
      </div>
    </div>
  );
}
