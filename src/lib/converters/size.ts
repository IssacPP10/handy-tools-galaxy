export const units = {
  // Metric
  km: "Kilometers",
  m: "Meters",
  cm: "Centimeters",
  mm: "Millimeters",
  μm: "Micrometers",
  nm: "Nanometers",
  
  // Imperial/US
  mi: "Miles",
  yd: "Yards",
  ft: "Feet",
  in: "Inches",
  
  // Other common
  nmi: "Nautical Miles",
  ly: "Light Years",
  au: "Astronomical Units",
  
  // Digital
  px: "Pixels",
  pt: "Points",
  pc: "Picas",
} as const;

export type Unit = keyof typeof units;

const baseUnit: Unit = 'm';

const toBase: Record<Unit, number> = {
  km: 1000,
  m: 1,
  cm: 0.01,
  mm: 0.001,
  μm: 0.000001,
  nm: 0.000000001,
  mi: 1609.344,
  yd: 0.9144,
  ft: 0.3048,
  in: 0.0254,
  nmi: 1852,
  ly: 9.461e+15,
  au: 1.496e+11,
  px: 0.000264583,
  pt: 0.000352778,
  pc: 0.004233333,
};

export const convert = (value: number, from: Unit, to: Unit): number => {
  const valueInBase = value * toBase[from];
  return valueInBase / toBase[to];
};

export const getUnitShortName = (unit: Unit): string => {
  return unit;
};

export const getUnitFullName = (unit: Unit): string => {
  return units[unit];
};
