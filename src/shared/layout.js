import glamorous from 'glamorous'

const sizes = {
  phone: 768,
  tablet: 992,
  desktop: 1200,
}

const queries = {
  tiny: `@media (max-width: ${sizes.phone}px)`,
  phone: `@media (min-width: ${sizes.phone}px)`,
  tablet: `@media (min-width: ${sizes.tablet}px)`,
  desktop: `@media (min-width: ${sizes.desktop}px)`,
}

const Container = glamorous.div({
  label: 'container',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  [queries.phone]: {
    width: '750px',
  },
  [queries.tablet]: {
    width: '970px',
  },
  [queries.desktop]: {
    width: '1170px',
  },
})

const Row = glamorous.div({
  label: 'row',
  marginRight: '-15px',
  marginLeft: '-15px',
  [queries.phone]: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const Column = glamorous.div(
  {
    label: 'column',
    position: 'relative',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
  },
  ({width}) => ({
    [queries.phone]: {
      flex: width,
    },
  }),
)

export {queries, Container, Row, Column}
