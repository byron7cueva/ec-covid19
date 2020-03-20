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
  {id:'noCases', numInfects: 0, background: null, stroke: '#2c003e'},
  {id:'nivel1', numInfects: 30, background: '#cd8d7b', stroke: '#481380'},
  {id:'nivel2', numInfects: 100, background: '#fe346e', stroke: '#481380'},
  {id:'nivel3', numInfects: 300, background: '#d63447', stroke: '#481380'},
  {id:'nivel4', numInfects: 500, background: '#b80d57', stroke: '#481380'}
]