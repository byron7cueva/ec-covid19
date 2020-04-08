import { colors as colorsApp, fonts } from './constants'

export const styleMap = {
  noCases: {
    default: {
      pattern: {
        height: 6,
        width: 6,
        stroke: '#2c003e',
        strokeWidth: 0.5,
        orientation: ['diagonal']
      }
    },
    hover: {
      stroke: '#2c003e',
      strokeWidth: 1
    }
  }
}

export const patternScale = [
  {id:'noCases', numInfects: 0, background: null, stroke: '#57606f'},
  {id:'nivel1', numInfects: 50, background: 'rgba(98,98,98,0.3)', stroke: '#636e72', radio: 15},
  {id:'nivel2', numInfects: 100, background: 'rgba(70,70,70,0.3)', stroke: '#636e72', radio: 25},
  {id:'nivel3', numInfects: 500, background: 'rgba(41,41,41,0.3)', stroke: '#636e72', radio: 30},
  {id:'nivel4', numInfects: 1000, background: 'rgba(36,36,36,0.3)', stroke: '#636e72', radio: 45},
  {id:'nivel5', numInfects: 10000, background: 'rgba(21,21,21,0.3)', stroke: '#636e72', radio: 55}
]


export const colors = {
  dead: '#fbc490',
  healed: '#50bda1',
  confirmed: '#e74c3c'
}

export const theme = {
  fontFamily: fonts.content.family,
  fontSize: 11,
  textColor: colorsApp.light,
  grid: {
    line: { stroke: colorsApp.gray }
  },
  tooltip: {
    container: { background: colorsApp.dark, color: colorsApp.light }
  },
  labels: {
    text: {
      fill: colorsApp.light,
      fontSize: 11,
      fontWeight: 500,
      fontFamily: fonts.content.family,
      textShadow: '0px 2px 3px rgba(0,0,0,0.35)'
    }
  }
}

export const legends = [
  {
    dataFrom: 'keys',
    anchor: 'bottom',
    direction: 'row',
    justify: false,
    translateX: 0,
    translateY: 60,
    itemsSpacing: 10,
    itemDirection: 'left-to-right',
    itemWidth: 100,
    itemHeight: 20,
    itemTextColor: colorsApp.light,
    symbolSize: 12,
    symbolShape: 'circle',
    symbolBorderColor: 'rgba(0, 0, 0, .5)',
    effects: []
  }
]
