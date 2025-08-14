/**
 * Format numbers with appropriate units and precision
 */
export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat('en-US', options).format(value);
}

/**
 * Format currency values
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format large numbers with appropriate suffixes (K, M, B)
 */
export function formatLargeNumber(value: number): string {
  if (value >= 1000000000) {
    return (value / 1000000000).toFixed(1).replace('.0', '') + 'B';
  }
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace('.0', '') + 'M';
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(1).replace('.0', '') + 'K';
  }
  return value.toString();
}

/**
 * Format percentages
 */
export function formatPercentage(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format medical imaging measurements
 */
export function formatResolution(value: number, unit = 'µm'): string {
  if (value < 1 && unit === 'mm') {
    return `${(value * 1000).toFixed(0)} µm`;
  }
  return `${value} ${unit}`;
}

/**
 * Format processing time
 */
export function formatProcessingTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (remainingSeconds === 0) {
    return `${minutes}min`;
  }
  return `${minutes}min ${remainingSeconds}s`;
}

/**
 * Format file sizes
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Format DICOM metadata values
 */
export function formatDicomValue(value: any, vr?: string): string {
  if (value == null) return 'N/A';
  
  switch (vr) {
    case 'DA': // Date
      if (typeof value === 'string' && value.length === 8) {
        const year = value.substring(0, 4);
        const month = value.substring(4, 6);
        const day = value.substring(6, 8);
        return `${month}/${day}/${year}`;
      }
      break;
    case 'TM': // Time
      if (typeof value === 'string' && value.length >= 6) {
        const hour = value.substring(0, 2);
        const minute = value.substring(2, 4);
        const second = value.substring(4, 6);
        return `${hour}:${minute}:${second}`;
      }
      break;
    case 'DS': // Decimal String
    case 'FL': // Floating Point Single
    case 'FD': // Floating Point Double
      if (typeof value === 'number') {
        return value.toFixed(2);
      }
      break;
    case 'IS': // Integer String
    case 'SL': // Signed Long
    case 'SS': // Signed Short
    case 'UL': // Unsigned Long
    case 'US': // Unsigned Short
      if (typeof value === 'number') {
        return value.toString();
      }
      break;
  }
  
  return String(value);
}

/**
 * Format pixel spacing for display
 */
export function formatPixelSpacing(spacing: number[]): string {
  if (!spacing || spacing.length === 0) return 'N/A';
  
  if (spacing.length === 1) {
    return `${spacing[0].toFixed(2)} mm`;
  }
  
  if (spacing.length === 2) {
    if (spacing[0] === spacing[1]) {
      return `${spacing[0].toFixed(2)} mm`;
    }
    return `${spacing[0].toFixed(2)} × ${spacing[1].toFixed(2)} mm`;
  }
  
  return spacing.map(s => s.toFixed(2)).join(' × ') + ' mm';
}

/**
 * Format window/level values
 */
export function formatWindowLevel(window: number, level: number): string {
  return `W: ${window.toFixed(0)} / L: ${level.toFixed(0)}`;
}

/**
 * Format Hounsfield Units
 */
export function formatHU(value: number): string {
  return `${value.toFixed(0)} HU`;
}

/**
 * Format study/series counts
 */
export function formatStudyCount(count: number): string {
  if (count === 1) return '1 study';
  return `${formatLargeNumber(count)} studies`;
}

export function formatSeriesCount(count: number): string {
  if (count === 1) return '1 series';
  return `${formatLargeNumber(count)} series`;
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffSeconds < 60) {
    return 'just now';
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString();
  }
}
