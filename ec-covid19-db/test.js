const { CaseGestor } = require('./')

// Casos Confirmados

/* CaseGestor.registerCase({
  placeCode: '1407',
  caseDate: '2020-04-09',
  totalConfirmed: 10
}).then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
  console.error(e.stack)
}) */

// Casos Fallecidos

/* CaseGestor.registerCase({
  placeCode: '01',
  caseDate: '2020-04-03',
  totalDead: 8
}).then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
  console.error(e.stack)
}) */

// Casos Alta Hospitalaria

/* CaseGestor.registerCase({
  placeCode: '0',
  caseDate: '2020-04-03',
  totalHealed: 70
}).then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
  console.error(e.stack)
}) */

/* CaseGestor.getAllTotalLastCases().then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
}) */

/* CaseGestor.getTotalHistoryCases('1001').then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
}) */

/* CaseGestor.getDailyHitoryCases('0').then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
}) */

/* CaseGestor.registerDeadAndHealedCountry({
  placeCode: '0',
  caseDate: '2020-03-21',
  totalDead: 1,
  dead: 1,
  healed: 2,
  totalHealed: 2
}).then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
}) */

/* CaseGestor.getAllTotalLastCasesByProvinces().then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
}) */

CaseGestor.registerCases('2020-04-09', [
  { placeCode: '0701', totalConfirmed: 44 },
  { placeCode: '0709', totalConfirmed: 4 }
]).then(data => {
  console.log('RESUELVE')
  console.log(data)
}).catch(e => {
  console.error(e.message)
})

/* CaseGestor.registerCases('2020-04-09', [
  { placeCode: '07', totalDead: 17 }
]).then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
}) */

/* CaseGestor.registerCases('2020-04-09', [
  { placeCode: '0', totalHealed: 145 }
]).then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
}) */
