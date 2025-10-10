/**
 * Returns the variant matching the current shift if available.
 * Falls back to the legacy flat shape.
 */
export function pickByShift(obj, shift) {
  if (!obj) return {};
  if (obj.timelines?.[shift]) return obj.timelines[shift];
  return obj;
}
