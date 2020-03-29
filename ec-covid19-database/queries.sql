select placeId, placeName from Places;

/* Date total for places */
select p.placeId, placeCode, placeName, placeTypeId, confirmed, dead, healed, updateDate from Places p  left join ConfirmedCases c on  c.placeId = p.placeId and caseTypeId = 1;

/* History Day cases */
select confirmed, dead, healed, caseDate from ConfirmedCases where caseTypeId = 2 and placeId = 1;

/* Get last cases */
select p.placeId, placeCode, placeName, x, y, placeTypeId, parentRegion, caseDate, confirmed, dead, healed, updateDate from places p left join confirmedcases c on c.caseId IS NULL OR (p.placeId = c.placeId and c.caseDate = (select max(caseDate) from confirmedcases where placeId = p.placeId));