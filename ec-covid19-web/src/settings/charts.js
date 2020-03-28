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
  {id:'nivel1', numInfects: 50, background: '#81808e', stroke: '#fff', radio: 10},
  {id:'nivel2', numInfects: 100, background: '#848388', stroke: '#fff', radio: 25},
  {id:'nivel3', numInfects: 500, background: '#5d5e60', stroke: '#fff', radio: 30},
  {id:'nivel4', numInfects: 1000, background: '#373737', stroke: '#fff', radio: 60},
  {id:'nivel5', numInfects: 10000, background: '#0f0f0f', stroke: '#fff', radio: 80}
]

export const colors = {
  dead: '#fbc490',
  healed: '#50bda1',
  confirmed: '#e74c3c'
}