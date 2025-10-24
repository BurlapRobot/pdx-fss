function normalizeCMSTime(timeInput) {
  if (typeof timeInput === "number") {
    const HH = String(Math.floor(timeInput / 60)).padStart(2, "0");
    const mm = String(timeInput % 60).padStart(2, "0");
    return `${HH}:${mm}`;
  }

  if (!Number.isNaN(Number(timeInput))) {
    const padded = timeInput.padStart(4, "0");
    const HH = padded.slice(0, 2);
    const mm = padded.slice(2);
    return `${HH}:${mm}`;
  }

  return timeInput;
}

export { normalizeCMSTime };
