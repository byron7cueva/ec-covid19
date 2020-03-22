select placeId, placeName from Place;

/* Date total for places */
select p.placeId, placeCode, placeName, placeTypeId, confirmed, dead, healed, updateDate from Place p  left join ConfirmedCase c on  c.placeId = p.placeId and caseTypeId = 1;

/* History Day cases */
select confirmed, dead, healed, caseDate from ConfirmedCase c where caseTypeId = 2 and placeId = 1;