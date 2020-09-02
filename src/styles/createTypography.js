import { deepmerge } from '@utils'

const caseAllCaps = {
  textTransform: 'uppercase',
}

export default function createTypography(typographyOptions) {
  const {
    fontFamilyPrimary = 'SFProText-Regular',
    fontFamilySecondary = 'SFProText-Bold',
    fontSize = 14, // px

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
    h1: buildVariant(fontFamilySecondary, 80, 80, 0.02, caseAllCaps),
    h2: buildVariant(fontFamilySecondary, 40, 40, 0.02, caseAllCaps),
    h3: buildVariant(fontFamilySecondary, 36, 36, 0.02, caseAllCaps),
    h4: buildVariant(fontFamilySecondary, 24, 24, 0.02, caseAllCaps),
    h5: buildVariant(fontFamilySecondary, 18, 18, 0, caseAllCaps),
    h6: buildVariant(fontFamilySecondary, 16, 18, 0, caseAllCaps),
    subtitle1: buildVariant(fontFamilyPrimary, 16, 18, 0.02),
    subtitle2: buildVariant(fontFamilyPrimary, 14, 14, 0.02),
    body1: buildVariant(fontFamilyPrimary, 16, 18, 0.02),
    body2: buildVariant(fontFamilyPrimary, 14, 14, 0.02),
    button: buildVariant(fontFamilyPrimary, 14, 14, 0.07, caseAllCaps),
    caption: buildVariant(fontFamilyPrimary, 12, 14, 0.04),
    overline: buildVariant(fontFamilyPrimary, 10, 16, 0.15, caseAllCaps),
  }

  return {
    fontFamilyPrimary,
    fontFamilySecondary,
    fontSize,
    fontFamily: fontFamilyPrimary,
    ...variants,
  }
}
