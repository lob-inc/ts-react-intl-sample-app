import { defineMessages } from 'react-intl'

export const titles = defineMessages({
  index: {
    id: 'titles.index',
    defaultMessage: '{remain} days left until the New Year',
  },
})

export const comments = defineMessages({
  lessThanOrEqualTo31days: {
    id: 'comments.lessThanOrEqualTo31days',
    defaultMessage: 'It is already December. Was it a good year?',
  },
  lessThanOrEqualTo92days: {
    id: 'comments.lessThanOrEqualTo92days',
    defaultMessage: '3 months to go again this year. Winter will begin!',
  },
  lessThanHalf: {
    id: 'comments.lessThanHalf',
    defaultMessage: "It's the beginning of the second half of the year! Let's go do our best!",
  },
  moreThanHalf: {
    id: 'comments.moreThanHalf',
    defaultMessage: 'Hi, this year has just begun!',
  },
})

export const links = defineMessages({
  switchLanguage: {
    id: 'links.switchLanguage',
    defaultMessage: 'Switch Language',
  },
})
