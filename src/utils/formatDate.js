/**
 * Formats a review timestamp according to visitor's local timezone.
 * Examples:
 * - "03 Aug 2026 • 8:45 PM"
 * - "Today • 8:45 PM"
 * - "Yesterday • 6:30 PM"
 * - "2 days ago • 4:10 PM"
 */
export const formatReviewDate = (createdAtInput) => {
  if (!createdAtInput) return '';

  const date = new Date(createdAtInput);
  if (isNaN(date.getTime())) {
    return createdAtInput; // Fallback to raw string if unparseable
  }

  const now = new Date();

  // Format local time string (e.g. 8:45 PM)
  const timeString = date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  // Calculate day difference ignoring time of day
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffTime = todayStart.getTime() - targetStart.getTime();
  const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

  if (diffDays === 0) {
    return `Today • ${timeString}`;
  } else if (diffDays === 1) {
    return `Yesterday • ${timeString}`;
  } else if (diffDays > 1 && diffDays <= 6) {
    return `${diffDays} days ago • ${timeString}`;
  }

  // Format standard date: e.g. "03 Aug 2026 • 8:45 PM"
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const year = date.getFullYear();

  return `${day} ${month} ${year} • ${timeString}`;
};
