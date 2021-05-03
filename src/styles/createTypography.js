const caseAllCaps = {
  textTransform: 'uppercase',
}

export default function createTypography(typographyOptions) {
  const {
    fontFamilyPrimary = {
      regular: 'SFProDisplay-Regular',
      semibold: 'SFProDisplay-Semibold',
      bold: 'SFProDisplay-Bold',
      medium: 'SFProDisplay-Medium',
    },
    baseFontSize = 14, // px
    fontWeightLight = '300',
    fontWeightRegular = '400',
    fontWeightMedium = '500',
    fontWeightSemibold = '600',
    fontWeightBold = '700',
    // Apply the CSS properties to all the variants.
    allVariants,
    ...other
  } = typographyOptions

  const buildVariant = (typeFace, fontSize, lineHeight, letterSpacing, casing) => ({
    fontFamily: typeFace,
    fontSize,
    lineHeight: `${fontSize * lineHeight}px`,
    letterSpacing,
    ...casing,
    ...allVariants,
  })

  const variants = {
    h1: buildVariant(fontFamilyPrimary.regular, 34, 1, -0.03),
    h2: buildVariant(fontFamilyPrimary.regular, 28, 1.1, -0.03),
    h3: buildVariant(fontFamilyPrimary.semibold, 24, 1.1, -0.03),
    h4: buildVariant(fontFamilyPrimary.bold, 32, 1.2, -0.03),
    h5: buildVariant(fontFamilyPrimary.semibold, 24, 1.1, 0.2),
    h6: buildVariant(fontFamilyPrimary.semibold, 18, 1.1, -0.03),
    headline: buildVariant(fontFamilyPrimary.semibold, 30, 1.3, -0.02),
    subhead: buildVariant(fontFamilyPrimary.medium, 20, 1.3, -0.01),
    subtitle: buildVariant(fontFamilyPrimary.regular, 18, 1.3, -0.01),
    body1: buildVariant(fontFamilyPrimary.regular, 16, 1.3, -0.02),
    body2: buildVariant(fontFamilyPrimary.regular, 14, 1.3, -0.01),
    button: buildVariant(fontFamilyPrimary.semibold, 14, 1.25, -0.03),
    caption: buildVariant(fontFamilyPrimary.regular, 12, 1.4, -0.01),
    overline: buildVariant(fontFamilyPrimary.bold, 12, 1.4, -0.01),
  }

  return {
    fontFamilyPrimary,
    baseFontSize,
    fontFamily: fontFamilyPrimary,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightSemibold,
    fontWeightBold,
    ...variants,
    ...other,
  }
}
