export interface KpiData {
  label: string;
  value: string | number;
  change?: number; // percentage change, e.g. 5.2 or -1.4
  trend?: "up" | "down" | "neutral";
  isLoading?: boolean;
}

export interface TrafficDataPoint {
  date: string;
  visitors: number;
  pageViews: number;
}

export interface PageViewEntry {
  path: string;
  views: number;
  visitors: number;
}

export interface ReferrerEntry {
  referrer: string;
  visitors: number;
}

export interface GeoEntry {
  country: string;
  code: string; // ISO 3166-1 alpha-2
  visitors: number;
}

export interface SystemEntry {
  name: string;
  visitors: number;
}

export interface DeploymentEntry {
  uid: string;
  name: string;
  url: string | null;
  created: number;
  state: "READY" | "BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "CANCELED";
  creator?: {
    username: string;
  };
  meta?: {
    githubCommitMessage?: string;
    githubCommitAuthorName?: string;
  };
}

export interface AnalyticsSummary {
  from: string;
  to: string;
  totalVisitors: number;
  totalPageViews: number;
  bounceRate?: number;
  traffic: TrafficDataPoint[];
  topPages: PageViewEntry[];
  topReferrers: ReferrerEntry[];
  topCountries: GeoEntry[];
  topBrowsers: SystemEntry[];
  topOs: SystemEntry[];
  topDevices: SystemEntry[];
  available: boolean; // Indicates if data was actually collected or if it's a fallback state
}

export type DateRange = "24h" | "7d" | "30d" | "all";
