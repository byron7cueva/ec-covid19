select placeId, placeName from Places;

/* Date total for places */
select p.placeId, placeCode, placeName, placeTypeId, confirmed, dead, healed, updateDate from Places p  left join ConfirmedCases c on  c.placeId = p.placeId and caseTypeId = 1;

/* History Day cases */
select confirmed, dead, healed, caseDate from ConfirmedCases where caseTypeId = 2 and placeId = 1;