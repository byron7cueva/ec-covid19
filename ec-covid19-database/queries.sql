/* Obtener los ultimos casos por cantones */
select p.placeCode, placeName, x, y, placeTypeId, parentRegion, caseDate, confirmed, totalConfirmed, dead, totalDead, healed, totalhealed, updateDate
from places p
left join confirmedcases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
where placeTypeId = 4;

/* Obtener ultimos casos por provincias */
select r.placeCode, r.placeName, r.placeTypeId, r.parentRegion, sum(confirmed) as confirmed, sum(totalConfirmed) as totalConfirmed, sum(dead) as dead, sum(totalDead) as totalDead, sum(healed) as healed, sum (totalhealed) as totalhealed
from places r
left join places p on p.parentRegion = r.placeCode
left join confirmedcases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
where p.placeTypeId = 4
group by r.placeCode;

/* Casos por Region */
select g.placeCode, g.placeName, g.placeTypeId, g.parentRegion, sum(confirmed) as confirmed, sum(totalConfirmed) as totalConfirmed, sum(dead) as dead, sum(totalDead) as totalDead, sum(healed) as healed, sum (totalhealed) as totalhealed
from places g
left join places r on r.parentRegion = g.placeCode
left join places p on p.parentRegion = r.placeCode
left join confirmedcases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
where p.placeTypeId = 4
group by g.placeCode;

/* Total casos Ecuador */
select sum(confirmed) as confirmed, sum(totalConfirmed) as totalConfirmed, sum(dead) as dead, sum(totalDead) as totalDead, sum(healed) as healed, sum (totalhealed) as totalhealed
from places p
inner join confirmedcases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
where placeTypeId = 4;


/* Obtener historial de casos de un canton */
select placeCode, caseDate, confirmed, totalConfirmed, dead, totalDead, healed, totalhealed, updateDate
from confirmedcases
where placeCode = '0901'
order by caseDate ASC;

/* Obtener historial de casos por provincias */
select r.placeCode, r.placeName, r.placeTypeId, r.parentRegion, sum(confirmed) as confirmed, sum(totalConfirmed) as totalConfirmed, sum(dead) as dead, sum(totalDead) as totalDead, sum(healed) as healed, sum (totalhealed) as totalhealed
from places r
inner join places p on p.parentRegion = r.placeCode
inner join confirmedcases c on p.placeCode = c.placeCode
where p.placeTypeId = 4 and r.placeCode = '09'
group by r.placeCode, caseDate
order by caseDate ASC;

/* Historial de casos por region */
select g.placeCode, g.placeName, g.placeTypeId, g.parentRegion, sum(confirmed) as confirmed, sum(totalConfirmed) as totalConfirmed, sum(dead) as dead, sum(totalDead) as totalDead, sum(healed) as healed, sum (totalhealed) as totalhealed
from places g
inner join places r on r.parentRegion = g.placeCode
inner join places p on p.parentRegion = r.placeCode
inner join confirmedcases c on p.placeCode = c.placeCode
where p.placeTypeId = 4 and r.placeCode = '1'
group by g.placeCode, caseDate
order by caseDate ASC;

/* Historial casos Ecuador */
select sum(confirmed) as confirmed, sum(totalConfirmed) as totalConfirmed, sum(dead) as dead, sum(totalDead) as totalDead, sum(healed) as healed, sum (totalhealed) as totalhealed
from places p
inner join confirmedcases c on p.placeCode = c.placeCode
where placeTypeId = 4
group by caseDate
order by caseDate ASC;