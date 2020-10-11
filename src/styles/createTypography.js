const caseAllCaps = {
  textTransform: 'uppercase',
}

export default function createTypography(typographyOptions) {
  const {
    fontFamilyPrimary = {
      regular: 'SFProText-Regular',
      semibold: 'SFProText-Semibold',
      bold: 'SFProText-Bold',
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
    h1: buildVariant(fontFamilyPrimary.regular, 75, 1, -0.03, caseAllCaps),
    h2: buildVariant(fontFamilyPrimary.regular, 46, 1.1, -0.03, caseAllCaps),
    h3: buildVariant(fontFamilyPrimary.regular, 40, 1.1, -0.03, caseAllCaps),
    h4: buildVariant(fontFamilyPrimary.bold, 32, 1.2, -0.03),
    h5: buildVariant(fontFamilyPrimary.semibold, 24, 1.1, 0.2, caseAllCaps),
    h6: buildVariant(fontFamilyPrimary.semibold, 18, 1.1, -0.03),
    h7: buildVariant(fontFamilyPrimary.semibold, 17, 1.1, -0.03),
    subtitle1: buildVariant(fontFamilyPrimary.semibold, 16, 1.3, -0.02),
    subtitle2: buildVariant(fontFamilyPrimary.semibold, 14, 1.3, -0.01),
    body1: buildVariant(fontFamilyPrimary.regular, 16, 1.3, -0.02),
    body2: buildVariant(fontFamilyPrimary.regular, 14, 1.3, -0.01),
    button: buildVariant(fontFamilyPrimary.semibold, 14, 1.25, -0.03, caseAllCaps),
    caption: buildVariant(fontFamilyPrimary.regular, 12, 1.4, -0.01),
    overline: buildVariant(fontFamilyPrimary.bold, 12, 1.4, -0.01, caseAllCaps),
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
