const isoTimeFormat = (dateTime) => {
  const date = new Date(dateTime);
  const localTime = date.toLocaleTimeString("en-US", {
      year: 'numeric',
    month: 'short', // e.g., Jan
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return localTime;
}

export default isoTimeFormat;
