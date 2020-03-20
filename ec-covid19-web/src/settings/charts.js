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
  {id:'noCases', numInfects: 0, background: null, stroke: '#dee3e2'},
  {id:'nivel1', numInfects: 30, background: '#cd8d7b', stroke: '#fff'},
  {id:'nivel2', numInfects: 100, background: '#fe346e', stroke: '#fff'},
  {id:'nivel3', numInfects: 300, background: '#d63447', stroke: '#fff'},
  {id:'nivel4', numInfects: 500, background: '#b80d57', stroke: '#fff'}
]

export const colors = {
  actived: '#fe346e',
  dead: '#fbc490',
  healed: '#50bda1',
  infected: '#e85f99'
}