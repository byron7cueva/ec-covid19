# Mutations

## Create confirmed case

```graphql
mutation {
  registerCantonCaseConfirmed(input: {
    placeCode: "1001"
    confirmed: 2
    caseDate: "2020-03-02"
  }){
    caseDate
    confirmed
    dead
    healed
    updateDate
  }
}
```

## Create cases for country

```graphql
mutation {
  registerCasesCountry(input: {
    placeCode: "00"
    confirmed: 2
    dead: 1
    caseDate: "2020-03-01"
  }){
    caseDate
    confirmed
    dead
    healed
    updateDate
  }
}
```