export interface SystemCardProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  statusLabels?: {
    text: string;
    colorClass: string;
  }[];
}

export interface TableItem {
  id: string;
  item: string;
  department: string;
  status: string;
  statusColor: string;
  lastUpdate: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  subLabel?: string;
}