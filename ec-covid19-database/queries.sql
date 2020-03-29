/* Utimo caso registrado de un canton */
select * from confirmedcases c
where c.placeCode = '0901' and caseDate = (select max(caseDate) from confirmedcases where placeCode = c.placeCode);

/* Obtener los ultimos casos por cantones */
select p.placeCode, placeName, x, y, placeTypeId, parentRegion, caseDate, confirmed, totalConfirmed, dead, totalDead, healed, totalhealed, updateDate
from places p
left join confirmedcases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
where placeTypeId = 4
order by placeName;

/* Obtener historial de casos de un canton */
select placeCode, caseDate, confirmed, totalConfirmed, dead, totalDead, healed, totalhealed, updateDate
from confirmedcases
where placeCode = '0901'
order by caseDate ASC;

/* Obtener historial de casos por provincias DIARIO */
select r.placeCode, r.placeName, r.placeTypeId, r.parentRegion, sum(confirmed) as confirmed, sum(dead) as dead, sum(healed) as healed
from places r
inner join places p on p.parentRegion = r.placeCode
inner join confirmedcases c on p.placeCode = c.placeCode
where p.placeTypeId = 4 and r.placeCode = '09'
group by r.placeCode, caseDate
order by caseDate ASC;

/* Historial de casos por region DIARIO */
select g.placeCode, g.placeName, sum(confirmed) as confirmed, sum(dead) as dead, sum(healed) as healed
from places g
inner join places r on r.parentRegion = g.placeCode
inner join places p on p.parentRegion = r.placeCode
inner join confirmedcases c on p.placeCode = c.placeCode
where p.placeTypeId = 4 and g.placeCode = '1'
group by g.placeCode, caseDate
order by caseDate ASC;

/* Total de casos */
select p.placeCode, placeName, x, y, placeTypeId, parentRegion, caseDate, confirmed, totalConfirmed, dead, totalDead, healed, totalhealed, updateDate
from places p
left join confirmedcases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode)
order by placeTypeId, parentRegion, placeName;

/* Historial casos Ecuador DIARIO */
select sum(confirmed) as confirmed, sum(dead) as dead, sum(healed) as healed
from places p
inner join confirmedcases c on p.placeCode = c.placeCode
where placeTypeId = 4
group by caseDate
order by caseDate ASC;

/* */
/* Casos ultimos casos totales hasta la fecha por la region padre, ejemplo provincia*/
select r.placeCode, r.placeName, r.placeTypeId, r.parentRegion, sum(totalConfirmed) as totalConfirmed, sum(totalDead) as totalDead, sum (totalhealed) as totalhealed
from places r
inner join places p on p.parentRegion = r.placeCode
inner join confirmedcases c on p.placeCode = c.placeCode and c.caseDate = (select max(caseDate) from confirmedcases where placeCode = p.placeCode and caseDate <= '2020-03-28')
where p.placeTypeId = 4 and p.parentRegion = '09'
group by r.placeCode;
