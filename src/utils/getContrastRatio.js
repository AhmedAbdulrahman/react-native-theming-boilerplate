export default function getContrastRatio(foreground, background) {
  const lumA = foreground.luminosity()
  const lumB = background.luminosity()
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05)
}
