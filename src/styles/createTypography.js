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
    lineHeight,
    letterSpacing,
    ...casing,
    ...allVariants,
  })

  const variants = {
    h1: buildVariant(fontFamilyPrimary.regular, 80, 80, 0.02, caseAllCaps),
    h2: buildVariant(fontFamilyPrimary.regular, 40, 40, 0.02, caseAllCaps),
    h3: buildVariant(fontFamilyPrimary.regular, 36, 36, 0.02, caseAllCaps),
    h4: buildVariant(fontFamilyPrimary.regular, 24, 24, 0.02, caseAllCaps),
    h5: buildVariant(fontFamilyPrimary.regular, 18, 18, 0, caseAllCaps),
    h6: buildVariant(fontFamilyPrimary.regular, 16, 18, 0, caseAllCaps),
    subtitle1: buildVariant(fontFamilyPrimary.semibold, 16, 18, 0.02),
    subtitle2: buildVariant(fontFamilyPrimary.semibold, 14, 14, 0.02),
    body1: buildVariant(fontFamilyPrimary.regular, 16, 18, 0.02),
    body2: buildVariant(fontFamilyPrimary.regular, 14, 14, 0.02),
    button: buildVariant(fontFamilyPrimary.bold, 14, 14, 0.07, caseAllCaps),
    caption: buildVariant(fontFamilyPrimary.regular, 12, 14, 0.04),
    overline: buildVariant(fontFamilyPrimary.bold, 10, 16, 0.15, caseAllCaps),
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
