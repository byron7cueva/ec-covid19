/*
* DML Database
*/

/* Default data for PlaceType */
INSERT INTO PlaceType(placeTypeName) values('PAIS');
INSERT INTO PlaceType(placeTypeName) values('PROVINCIA');

/* Default data for CaseType */
INSERT INTO CaseType(type) values ('TOTAL');
INSERT INTO CaseType(type) values ('DIARIO');

/* Init information places */
INSERT INTO Place(placeCode, placeName, placeTypeId) VALUES('00','ECUADOR', (select placeTypeId from PlaceType where placeTypeName='PAIS'));

INSERT INTO Place(placeCode, placeName, placeTypeId, parentRegion) VALUES
('01','AZUAY',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('02','BOLIVAR',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('03','CAÑAR',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('04','CARCHI',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('05','COTOPAXI',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('06','CHIMBORAZO',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('07','EL ORO',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('08','ESMERALDAS',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('09','GUAYAS',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('10','IMBABURA',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('11','LOJA',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('12','LOS RIOS',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('13','MANABI',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('14','MORONA SANTIAGO',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('15','NAPO',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('16','PASTAZA',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('17','PICHINCHA',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('18','TUNGURAHUA',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('19','ZAMORA CHINCHIPE',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('20','GALAPAGOS',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('21','SUCUMBIOS',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('22','ORELLANA',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('23','SANTO DOMINGO DE LOS TSACHILAS',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00')),
('24','SANTA ELENA',(select placeTypeId from PlaceType where placeTypeName='PROVINCIA'),(select placeId from Place where placeCode = '00'));