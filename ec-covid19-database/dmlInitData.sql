/*
* DML Database
*/

/* Default data for PlaceType */
INSERT INTO PlaceType(placeTypeId, placeTypeName) VALUES
(1, 'PAIS'),
(2, 'PROVINCIA');

/* Default data for CaseType */
INSERT INTO CaseType(caseTypeId, type) VALUES
(1, 'TOTAL'),
(2, 'DIARIO');

/* Init information places */
INSERT INTO Place(placeCode, placeName, placeTypeId) VALUES('00','ECUADOR', 1);

INSERT INTO Place(placeCode, placeName, placeTypeId, parentRegion) VALUES
('01','AZUAY',2,(select placeId from Place where placeCode = '00')),
('02','BOLIVAR',2,(select placeId from Place where placeCode = '00')),
('03','CAÑAR',2,(select placeId from Place where placeCode = '00')),
('04','CARCHI',2,(select placeId from Place where placeCode = '00')),
('05','COTOPAXI',2,(select placeId from Place where placeCode = '00')),
('06','CHIMBORAZO',2,(select placeId from Place where placeCode = '00')),
('07','EL ORO',2,(select placeId from Place where placeCode = '00')),
('08','ESMERALDAS',2,(select placeId from Place where placeCode = '00')),
('09','GUAYAS',2,(select placeId from Place where placeCode = '00')),
('10','IMBABURA',2,(select placeId from Place where placeCode = '00')),
('11','LOJA',2,(select placeId from Place where placeCode = '00')),
('12','LOS RIOS',2,(select placeId from Place where placeCode = '00')),
('13','MANABI',2,(select placeId from Place where placeCode = '00')),
('14','MORONA SANTIAGO',2,(select placeId from Place where placeCode = '00')),
('15','NAPO',2,(select placeId from Place where placeCode = '00')),
('16','PASTAZA',2,(select placeId from Place where placeCode = '00')),
('17','PICHINCHA',2,(select placeId from Place where placeCode = '00')),
('18','TUNGURAHUA',2,(select placeId from Place where placeCode = '00')),
('19','ZAMORA CHINCHIPE',2,(select placeId from Place where placeCode = '00')),
('20','GALAPAGOS',2,(select placeId from Place where placeCode = '00')),
('21','SUCUMBIOS',2,(select placeId from Place where placeCode = '00')),
('22','ORELLANA',2,(select placeId from Place where placeCode = '00')),
('23','SANTO DOMINGO DE LOS TSACHILAS',2,(select placeId from Place where placeCode = '00')),
('24','SANTA ELENA',2,(select placeId from Place where placeCode = '00'));