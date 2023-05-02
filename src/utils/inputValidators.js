import i18n from '../translations/i18n'

export const required = value =>
  !value && value !== 0 ? i18n.t('ErrorFeedback.required') : undefined

export const numeric = value =>
  value && !/^[0-9]*?$/i.test(value) ? i18n.t('ErrorFeedback.invalid') : undefined

export const zip = value =>
  value && !/^[0-9]{5}(-[0-9]{4})?$/i.test(value) ? i18n.t('ErrorFeedback.invalid') : undefined

export const phone = value =>
  value && !/^\d{3}-\d{3}-\d{4}$/.test(value) ? i18n.t('ErrorFeedback.invalid') : undefined

export const time = value =>
  value && !/^\d{1,2}:\d{2} [AP][M]$/.test(value) ? i18n.t('ErrorFeedback.invalid') : undefined

export const maxLength = max => value =>
  value && value.length > max ? i18n.t('ErrorFeedback.maxLength', { max }) : undefined

export const maxValue = max => value =>
  value && value > max ? i18n.t('ErrorFeedback.maxValue', { max }) : undefined

export const minValue = min => value =>
  value && value < min ? i18n.t('ErrorFeedback.minValue', { min }) : undefined
