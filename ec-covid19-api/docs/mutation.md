# Mutations

## Create confirmed case

```graphql
mutation {
  createCaseConfirmed(input: {
    placeId: 2,
    confirmed: 1,
    caseDate: "2020-03-01"
  }){
    caseId
    placeId
    updateDate
  }
}
```

## Create cases for country

```graphql
mutation {
  registerCasesCountry(input: {
    placeId: 1
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