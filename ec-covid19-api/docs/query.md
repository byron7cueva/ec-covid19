# Queries

## Get all places

```graphql
query {
  getPlaces {
    placeId
    placeCode
    placeName
    placeTypeId
  }
}
```

## Get total confirmed cases

```graphql
query {
  getTotalConfirmedCases {
    placeId
    placeCode
    placeName
    placeTypeId
    ConfirmedCases {
      caseDate
      confirmed
      healed
      dead
      updateDate
    }
  }
}
```

## Get history cases

```graphql
query {
  getHistoryCasesOfPlace(placeId: 2) {
    caseDate
    confirmed
    dead
    healed
  }
}
```