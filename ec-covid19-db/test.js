const {CaseGestor} = require('./')

CaseGestor.getTotalCasesAllPlaces()
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
