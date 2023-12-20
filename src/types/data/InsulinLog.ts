type InsulinLog = {
  date?: Date,
  value: number,
  type: "basal" | "fast",
  unit: "Unit",
}

export default InsulinLog;
