const { CaseGestor } = require('./')

/* CaseGestor.registerCantonCaseConfirmed({
  placeCode: '1701',
  caseDate: '2020-03-22',
  totalConfirmed: 4,
  confirmed: 4
}).then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
}) */

CaseGestor.getAllTotalLastCases().then(data => {
  console.log(data)
}).catch(e => {
  console.error(e.message)
})

/* CaseGestor.getTotalHistoryCases('0901').then(data => {
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
