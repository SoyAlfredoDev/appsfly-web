export function formatNumber(num: number | undefined | null): string {
  if (num === undefined || num === null) return "0";
  return new Intl.NumberFormat("es-CL").format(num);
}

export function formatPercentage(num: number | undefined | null): string {
  if (num === undefined || num === null) return "0%";
  const sign = num > 0 ? "+" : "";
  return `${sign}${num.toFixed(1)}%`;
}

export function formatDate(dateString: string | number): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatRelativeTime(timestamp: number): string {
  const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
  const daysDifference = Math.round(
    (timestamp - Date.now()) / (1000 * 60 * 60 * 24)
  );
  
  if (Math.abs(daysDifference) > 0) {
    return rtf.format(daysDifference, "day");
  }
  
  const hoursDifference = Math.round(
    (timestamp - Date.now()) / (1000 * 60 * 60)
  );
  if (Math.abs(hoursDifference) > 0) {
    return rtf.format(hoursDifference, "hour");
  }
  
  const minutesDifference = Math.round(
    (timestamp - Date.now()) / (1000 * 60)
  );
  return rtf.format(minutesDifference, "minute");
}

export function truncateUrl(url: string | null | undefined, maxLength: number = 30): string {
  if (!url) return "N/A";
  let cleanUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  if (cleanUrl.length <= maxLength) return cleanUrl;
  return cleanUrl.substring(0, maxLength) + "...";
}

export function getStatusColor(state: string): string {
  switch (state) {
    case "READY":
      return "text-green-600 bg-green-100 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800";
    case "ERROR":
    case "CANCELED":
      return "text-red-600 bg-red-100 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800";
    case "BUILDING":
    case "INITIALIZING":
    case "QUEUED":
      return "text-blue-600 bg-blue-100 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";
    default:
      return "text-gray-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700";
  }
}
