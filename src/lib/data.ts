import type { ComponentType } from "react";
import { DollarSign, Users, Archive } from 'lucide-react';

export type KeyMetric = {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export const keyMetrics: KeyMetric[] = [
  {
    id: 'sales',
    label: 'Total Sales & Revenue Growth',
    value: '$402,345',
    change: '+12.5%',
    changeType: 'increase',
    description: 'from last month',
    icon: DollarSign,
  },
  {
    id: 'vendors',
    label: 'Active Vendors',
    value: '1,250',
    change: '+3.2%',
    changeType: 'increase',
    description: 'from last month',
    icon: Users,
  },
  {
    id: 'inventory',
    label: 'Inventory Health',
    value: '92.8%',
    change: '-1.5%',
    changeType: 'decrease',
    description: 'Stock-to-sales ratio',
    icon: Archive,
  },
];

export const marketingRoiData = [
  { month: 'Jan', roi: 4.5 },
  { month: 'Feb', roi: 4.8 },
  { month: 'Mar', roi: 5.1 },
  { month: 'Apr', roi: 5.3 },
  { month: 'May', roi: 5.0 },
  { month: 'Jun', roi: 5.5 },
  { month: 'Jul', roi: 5.8 },
  { month: 'Aug', roi: 6.0 },
  { month: 'Sep', roi: 5.7 },
  { month: 'Oct', roi: 6.2 },
  { month: 'Nov', roi: 6.5 },
  { month: 'Dec', roi: 6.8 },
];

export const netProfitMarginData = [
  { month: 'Jan', margin: 15 },
  { month: 'Feb', margin: 15.5 },
  { month: 'Mar', margin: 16 },
  { month: 'Apr', margin: 15.8 },
  { month: 'May', margin: 16.2 },
  { month: 'Jun', margin: 16.5 },
  { month: 'Jul', margin: 17 },
  { month: 'Aug', margin: 17.2 },
  { month: 'Sep', margin: 16.9 },
  { month: 'Oct', margin: 17.5 },
  { month: 'Nov', margin: 18 },
  { month: 'Dec', margin: 18.2 },
];
