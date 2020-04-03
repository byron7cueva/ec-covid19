/* Update confirmed daily case from canton to province */
UPDATE ConfirmedCases u SET confirmed = subquery.confirmed
FROM (
SELECT r.placeCode, c.caseDate, sum(confirmed) as confirmed
FROM Places r
INNER JOIN Places p on p.parentRegion = r.placeCode
INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode
WHERE p.placeTypeId = 4 and r.placeTypeId = 3
GROUP BY r.placeCode, c.caseDate
ORDER BY r.placeCode, c.caseDate
) as subquery where u.placeCode = subquery.placeCode and u.caseDate = subquery.caseDate

/* Update confirmed daily case from province to region */
UPDATE ConfirmedCases u SET confirmed = subquery.confirmed, dead = subquery.dead
FROM (
SELECT r.placeCode, c.caseDate, sum(confirmed) as confirmed, sum(dead) as dead
FROM Places r
INNER JOIN Places p on p.parentRegion = r.placeCode
INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode
WHERE p.placeTypeId = 3 and r.placeTypeId = 2
GROUP BY r.placeCode, c.caseDate
ORDER BY r.placeCode, c.caseDate
) as subquery where u.placeCode = subquery.placeCode and u.caseDate = subquery.caseDate

/* Update confirmed daily case from region to country */
UPDATE ConfirmedCases u SET confirmed = subquery.confirmed, dead = subquery.dead
FROM (
SELECT r.placeCode, c.caseDate, sum(confirmed) as confirmed, sum(dead) as dead
FROM Places r
INNER JOIN Places p on p.parentRegion = r.placeCode
INNER JOIN ConfirmedCases c on p.placeCode = c.placeCode
WHERE p.placeTypeId = 2 and r.placeTypeId = 1
GROUP BY r.placeCode, c.caseDate
ORDER BY r.placeCode, c.caseDate
) as subquery where u.placeCode = subquery.placeCode and u.caseDate = subquery.caseDate