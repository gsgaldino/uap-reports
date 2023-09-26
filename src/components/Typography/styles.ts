'use client'
import styled, { RuleSet, css } from 'styled-components'
import { ITypographyProps } from './index'

type H1Variants = 'h1-normal' | 'h1-heavy'

type H2Variants = 'h2-normal' | 'h2-heavy'

type H3Variants = 'h3-normal' | 'h3-heavy'

type H4Variants = 'h4-normal' | 'h4-heavy'

type H5Variants = 'h5-normal' | 'h5-heavy'

type H6Variants = 'h6-normal' | 'h6-heavy'

type DefaultVariants = 'body-default' | 'body-default-strong'

export type TypographyVariant =
  H1Variants |
  H2Variants |
  H3Variants |
  H4Variants |
  H5Variants |
  H6Variants |
  DefaultVariants

type TypographyParamDictionary = {
  [key: string]: RuleSet<object>
}

const typographyColorStyles: TypographyParamDictionary = {
  dark: css`
    color: var(--absolute-black);
  `,
  light: css`
    color: var(--absolute-white);
  `
}

const typographyVariantStyles: TypographyParamDictionary = {
  'h1-normal': css`
    font-size: 96px;
    letter-spacing: -2.5px;
    line-height: 120%;
  `,
  'h2-normal': css`
    font-size: 60px;
    letter-spacing: -1.5px;
    line-height: 120%;
  `,
  'h3-normal': css`
    font-size: 48px;
    letter-spacing: -0.5px;
    line-height: 124%;
  `,
  'h3-heavy': css`
    font-size: 48px;
    letter-spacing: -0.5px;
    line-height: 124%;
    font-weight: 600;
  `,
  'h4-normal': css`
    font-size: 34px;
    letter-spacing: 0px;
    line-height: 128%;
  `,
  'h4-heavy': css`
    font-size: 34px;
    letter-spacing: 0px;
    line-height: 128%;
    font-weight: 600;
  `,
  'h5-normal': css`
    font-size: 24px;
    letter-spacing: 0px;
    line-height: 128%;
  `,
  'h5-heavy': css`
    font-size: 24px;
    letter-spacing: 0px;
    line-height: 128%;
    font-weight: 600;
  `,
  'body-default': css`
    font-size: 16px;
    letter-spacing: 0.4px;
    line-height: 150%;
  `,
  'body-default-strong': css`
    font-size: 16px;
    letter-spacing: 0.4px;
    line-height: 150%;
    font-weight: 600;
  `
}

export const Container = styled.div.attrs<ITypographyProps>((props) => ({
  as: props.as,
}))`
  ${(props) => typographyVariantStyles[props.variant || 'body-default']}
  ${(props) => typographyColorStyles[props.color || 'light']}
`
