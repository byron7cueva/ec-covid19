/*
* DML Database
*/

/* Default data for PlaceType */
INSERT INTO PlaceTypes(placeTypeId, placeTypeName) VALUES
(1, 'PAIS'),
(2, 'PROVINCIA'),
(3, 'CANTON');

/* Default data for CaseType */
INSERT INTO CaseTypes(caseTypeId, type) VALUES
(1, 'TOTAL'),
(2, 'DIARIO');

/* Init information places */
/* Pais */
INSERT INTO Places(placeCode, placeName, placeTypeId) VALUES('00','ECUADOR', 1);

/* Provincias */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('01','AZUAY',2,(select placeId from Places where placeCode = '00')),
('02','BOLIVAR',2,(select placeId from Places where placeCode = '00')),
('03','CAÑAR',2,(select placeId from Places where placeCode = '00')),
('04','CARCHI',2,(select placeId from Places where placeCode = '00')),
('05','COTOPAXI',2,(select placeId from Places where placeCode = '00')),
('06','CHIMBORAZO',2,(select placeId from Places where placeCode = '00')),
('07','EL ORO',2,(select placeId from Places where placeCode = '00')),
('08','ESMERALDAS',2,(select placeId from Places where placeCode = '00')),
('09','GUAYAS',2,(select placeId from Places where placeCode = '00')),
('10','IMBABURA',2,(select placeId from Places where placeCode = '00')),
('11','LOJA',2,(select placeId from Places where placeCode = '00')),
('12','LOS RIOS',2,(select placeId from Places where placeCode = '00')),
('13','MANABI',2,(select placeId from Places where placeCode = '00')),
('14','MORONA SANTIAGO',2,(select placeId from Places where placeCode = '00')),
('15','NAPO',2,(select placeId from Places where placeCode = '00')),
('16','PASTAZA',2,(select placeId from Places where placeCode = '00')),
('17','PICHINCHA',2,(select placeId from Places where placeCode = '00')),
('18','TUNGURAHUA',2,(select placeId from Places where placeCode = '00')),
('19','ZAMORA CHINCHIPE',2,(select placeId from Places where placeCode = '00')),
('20','GALAPAGOS',2,(select placeId from Places where placeCode = '00')),
('21','SUCUMBIOS',2,(select placeId from Places where placeCode = '00')),
('22','ORELLANA',2,(select placeId from Places where placeCode = '00')),
('23','SANTO DOMINGO DE LOS TSACHILAS',2,(select placeId from Places where placeCode = '00')),
('24','SANTA ELENA',2,(select placeId from Places where placeCode = '00'));

/* Cantones */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0201','GUARANDA',3,(SELECT placeId from Places where placeCode = '02')),
('0202','CHILLANES',3,(SELECT placeId from Places where placeCode = '02')),
('0203','CHIMBO',3,(SELECT placeId from Places where placeCode = '02')),
('0204','ECHEANDIA',3,(SELECT placeId from Places where placeCode = '02')),
('0205','SAN MIGUEL',3,(SELECT placeId from Places where placeCode = '02')),
('0206','CALUMA',3,(SELECT placeId from Places where placeCode = '02')),
('0207','LAS NAVES',3,(SELECT placeId from Places where placeCode = '02')),
('0401','TULCAN',3,(SELECT placeId from Places where placeCode = '04')),
('0402','BOLIVAR',3,(SELECT placeId from Places where placeCode = '04')),
('0403','ESPEJO',3,(SELECT placeId from Places where placeCode = '04')),
('0404','MIRA',3,(SELECT placeId from Places where placeCode = '04')),
('0405','MONTUFAR',3,(SELECT placeId from Places where placeCode = '04')),
('0406','SAN PEDRO DE HUACA',3,(SELECT placeId from Places where placeCode = '04')),
('0501','LATACUNGA',3,(SELECT placeId from Places where placeCode = '05')),
('0502','LA MANA',3,(SELECT placeId from Places where placeCode = '05')),
('0503','PANGUA',3,(SELECT placeId from Places where placeCode = '05')),
('0504','PUJILI',3,(SELECT placeId from Places where placeCode = '05')),
('0505','SALCEDO',3,(SELECT placeId from Places where placeCode = '05')),
('0506','SAQUISILI',3,(SELECT placeId from Places where placeCode = '05')),
('0507','SIGCHOS',3,(SELECT placeId from Places where placeCode = '05')),
('0601','RIOBAMBA',3,(SELECT placeId from Places where placeCode = '06')),
('0602','ALAUSI',3,(SELECT placeId from Places where placeCode = '06')),
('0603','COLTA',3,(SELECT placeId from Places where placeCode = '06')),
('0604','CHAMBO',3,(SELECT placeId from Places where placeCode = '06')),
('0605','CHUNCHI',3,(SELECT placeId from Places where placeCode = '06')),
('0606','GUAMOTE',3,(SELECT placeId from Places where placeCode = '06')),
('0607','GUANO',3,(SELECT placeId from Places where placeCode = '06')),
('0608','PALLATANGA',3,(SELECT placeId from Places where placeCode = '06')),
('0609','PENIPE',3,(SELECT placeId from Places where placeCode = '06')),
('0610','CUMANDA',3,(SELECT placeId from Places where placeCode = '06')),
('0801','ESMERALDAS',3,(SELECT placeId from Places where placeCode = '08')),
('0802','ELOY ALFARO',3,(SELECT placeId from Places where placeCode = '08')),
('0803','MUISNE',3,(SELECT placeId from Places where placeCode = '08')),
('0804','QUININDE',3,(SELECT placeId from Places where placeCode = '08')),
('0805','SAN LORENZO',3,(SELECT placeId from Places where placeCode = '08')),
('0806','ATACAMES',3,(SELECT placeId from Places where placeCode = '08')),
('0807','RIOVERDE',3,(SELECT placeId from Places where placeCode = '08')),
('1001','IBARRA',3,(SELECT placeId from Places where placeCode = '10')),
('1002','ANTONIO ANTE',3,(SELECT placeId from Places where placeCode = '10')),
('1003','COTACACHI',3,(SELECT placeId from Places where placeCode = '10')),
('1004','OTAVALO',3,(SELECT placeId from Places where placeCode = '10')),
('1005','PIMAMPIRO',3,(SELECT placeId from Places where placeCode = '10')),
('1006','SAN MIGUEL DE URCUQUI',3,(SELECT placeId from Places where placeCode = '10')),
('1501','TENA',3,(SELECT placeId from Places where placeCode = '15')),
('1503','ARCHIDONA',3,(SELECT placeId from Places where placeCode = '15')),
('1504','EL CHACO',3,(SELECT placeId from Places where placeCode = '15')),
('1507','QUIJOS',3,(SELECT placeId from Places where placeCode = '15')),
('1509','CARLOS JULIO AROSEMENA TOLA',3,(SELECT placeId from Places where placeCode = '15')),
('1601','PASTAZA',3,(SELECT placeId from Places where placeCode = '16')),
('1602','MERA',3,(SELECT placeId from Places where placeCode = '16')),
('1603','SANTA CLARA',3,(SELECT placeId from Places where placeCode = '16')),
('1604','ARAJUNO',3,(SELECT placeId from Places where placeCode = '16')),
('1702','CAYAMBE',3,(SELECT placeId from Places where placeCode = '17')),
('1703','MEJIA',3,(SELECT placeId from Places where placeCode = '17')),
('1704','PEDRO MONCAYO',3,(SELECT placeId from Places where placeCode = '17')),
('1705','RUMIÐAHUI',3,(SELECT placeId from Places where placeCode = '17')),
('1707','SAN MIGUEL DE LOS BANCOS',3,(SELECT placeId from Places where placeCode = '17')),
('1708','PEDRO VICENTE MALDONADO',3,(SELECT placeId from Places where placeCode = '17')),
('1709','PUERTO QUITO',3,(SELECT placeId from Places where placeCode = '17')),
('1801','AMBATO',3,(SELECT placeId from Places where placeCode = '18')),
('1802','BAÑOS DE AGUA SANTA',3,(SELECT placeId from Places where placeCode = '18')),
('1803','CEVALLOS',3,(SELECT placeId from Places where placeCode = '18')),
('1804','MOCHA',3,(SELECT placeId from Places where placeCode = '18')),
('1805','PATATE',3,(SELECT placeId from Places where placeCode = '18')),
('1806','QUERO',3,(SELECT placeId from Places where placeCode = '18')),
('1807','SAN PEDRO DE PELILEO',3,(SELECT placeId from Places where placeCode = '18')),
('1808','SANTIAGO DE PILLARO',3,(SELECT placeId from Places where placeCode = '18')),
('1809','TISALEO',3,(SELECT placeId from Places where placeCode = '18')),
('2101','LAGO AGRIO',3,(SELECT placeId from Places where placeCode = '21')),
('2102','GONZALO PIZARRO',3,(SELECT placeId from Places where placeCode = '21')),
('2103','PUTUMAYO',3,(SELECT placeId from Places where placeCode = '21')),
('2104','SHUSHUFINDI',3,(SELECT placeId from Places where placeCode = '21')),
('2105','SUCUMBIOS',3,(SELECT placeId from Places where placeCode = '21')),
('2106','CASCALES',3,(SELECT placeId from Places where placeCode = '21')),
('2107','CUYABENO',3,(SELECT placeId from Places where placeCode = '21')),
('2201','ORELLANA',3,(SELECT placeId from Places where placeCode = '22')),
('2202','AGUARICO',3,(SELECT placeId from Places where placeCode = '22')),
('2203','LA JOYA DE LOS SACHAS',3,(SELECT placeId from Places where placeCode = '22')),
('2204','LORETO',3,(SELECT placeId from Places where placeCode = '22')),
('2301','SANTO DOMINGO',3,(SELECT placeId from Places where placeCode = '23')),
('9001','LAS GOLONDRINAS',3,(SELECT placeId from Places where placeCode = '90')),
('9004','EL PIEDRERO',3,(SELECT placeId from Places where placeCode = '90')),
('1701','QUITO',3,(SELECT placeId from Places where placeCode = '17')),
('0808','LA CONCORDIA',3,(SELECT placeId from Places where placeCode = '08')),
('0101','CUENCA',3,(SELECT placeId from Places where placeCode = '01')),
('0102','GIRON',3,(SELECT placeId from Places where placeCode = '01')),
('0103','GUALACEO',3,(SELECT placeId from Places where placeCode = '01')),
('0105','PAUTE',3,(SELECT placeId from Places where placeCode = '01')),
('0106','PUCARA',3,(SELECT placeId from Places where placeCode = '01')),
('0107','SAN FERNANDO',3,(SELECT placeId from Places where placeCode = '01')),
('0108','SANTA ISABEL',3,(SELECT placeId from Places where placeCode = '01')),
('0109','SIGSIG',3,(SELECT placeId from Places where placeCode = '01')),
('0110','OÑA',3,(SELECT placeId from Places where placeCode = '01')),
('0111','CHORDELEG',3,(SELECT placeId from Places where placeCode = '01')),
('0112','EL PAN',3,(SELECT placeId from Places where placeCode = '01')),
('0113','SEVILLA DE ORO',3,(SELECT placeId from Places where placeCode = '01')),
('0114','GUACHAPALA',3,(SELECT placeId from Places where placeCode = '01')),
('0115','CAMILO PONCE ENRIQUEZ',3,(SELECT placeId from Places where placeCode = '01')),
('0301','AZOGUES',3,(SELECT placeId from Places where placeCode = '03')),
('0302','BIBLIAN',3,(SELECT placeId from Places where placeCode = '03')),
('0303','CAÑAR',3,(SELECT placeId from Places where placeCode = '03')),
('0304','LA TRONCAL',3,(SELECT placeId from Places where placeCode = '03')),
('0305','EL TAMBO',3,(SELECT placeId from Places where placeCode = '03')),
('0306','DELEG',3,(SELECT placeId from Places where placeCode = '03')),
('0307','SUSCAL',3,(SELECT placeId from Places where placeCode = '03')),
('0701','MACHALA',3,(SELECT placeId from Places where placeCode = '07')),
('0703','ATAHUALPA',3,(SELECT placeId from Places where placeCode = '07')),
('0704','BALSAS',3,(SELECT placeId from Places where placeCode = '07')),
('0705','CHILLA',3,(SELECT placeId from Places where placeCode = '07')),
('0706','EL GUABO',3,(SELECT placeId from Places where placeCode = '07')),
('0708','MARCABELI',3,(SELECT placeId from Places where placeCode = '07')),
('0709','PASAJE',3,(SELECT placeId from Places where placeCode = '07')),
('0710','PIÑAS',3,(SELECT placeId from Places where placeCode = '07')),
('0711','PORTOVELO',3,(SELECT placeId from Places where placeCode = '07')),
('0712','SANTA ROSA',3,(SELECT placeId from Places where placeCode = '07')),
('0713','ZARUMA',3,(SELECT placeId from Places where placeCode = '07')),
('0714','LAS LAJAS',3,(SELECT placeId from Places where placeCode = '07')),
('0901','GUAYAQUIL',3,(SELECT placeId from Places where placeCode = '09')),
('0902','ALFREDO BAQUERIZO MORENO',3,(SELECT placeId from Places where placeCode = '09')),
('0903','BALAO',3,(SELECT placeId from Places where placeCode = '09')),
('0904','BALZAR',3,(SELECT placeId from Places where placeCode = '09')),
('0905','COLIMES',3,(SELECT placeId from Places where placeCode = '09')),
('0906','DAULE',3,(SELECT placeId from Places where placeCode = '09')),
('0907','DURAN',3,(SELECT placeId from Places where placeCode = '09')),
('0908','EMPALME',3,(SELECT placeId from Places where placeCode = '09')),
('0909','EL TRIUNFO',3,(SELECT placeId from Places where placeCode = '09')),
('0910','MILAGRO',3,(SELECT placeId from Places where placeCode = '09')),
('0911','NARANJAL',3,(SELECT placeId from Places where placeCode = '09')),
('0912','NARANJITO',3,(SELECT placeId from Places where placeCode = '09')),
('0913','PALESTINA',3,(SELECT placeId from Places where placeCode = '09')),
('0914','PEDRO CARBO',3,(SELECT placeId from Places where placeCode = '09')),
('0916','SAMBORONDON',3,(SELECT placeId from Places where placeCode = '09')),
('0918','SANTA LUCIA',3,(SELECT placeId from Places where placeCode = '09')),
('0919','SALITRE',3,(SELECT placeId from Places where placeCode = '09')),
('0920','SAN JACINTO DE YAGUACHI',3,(SELECT placeId from Places where placeCode = '09')),
('0921','PLAYAS',3,(SELECT placeId from Places where placeCode = '09')),
('0922','SIMON BOLIVAR',3,(SELECT placeId from Places where placeCode = '09')),
('0923','CRNEL. MARCELINO MARIDUEÑA',3,(SELECT placeId from Places where placeCode = '09')),
('0924','LOMAS DE SARGENTILLO',3,(SELECT placeId from Places where placeCode = '09')),
('0925','NOBOL',3,(SELECT placeId from Places where placeCode = '09')),
('0927','GNRAL. ANTONIO ELIZALDE',3,(SELECT placeId from Places where placeCode = '09')),
('0928','ISIDRO AYORA',3,(SELECT placeId from Places where placeCode = '09')),
('1101','LOJA',3,(SELECT placeId from Places where placeCode = '11')),
('1102','CALVAS',3,(SELECT placeId from Places where placeCode = '11')),
('1103','CATAMAYO',3,(SELECT placeId from Places where placeCode = '11')),
('1104','CELICA',3,(SELECT placeId from Places where placeCode = '11')),
('1105','CHAGUARPAMBA',3,(SELECT placeId from Places where placeCode = '11')),
('1106','ESPINDOLA',3,(SELECT placeId from Places where placeCode = '11')),
('1107','GONZANAMA',3,(SELECT placeId from Places where placeCode = '11')),
('1108','MACARA',3,(SELECT placeId from Places where placeCode = '11')),
('1109','PALTAS',3,(SELECT placeId from Places where placeCode = '11')),
('1110','PUYANGO',3,(SELECT placeId from Places where placeCode = '11')),
('1111','SARAGURO',3,(SELECT placeId from Places where placeCode = '11')),
('1112','SOZORANGA',3,(SELECT placeId from Places where placeCode = '11')),
('1113','ZAPOTILLO',3,(SELECT placeId from Places where placeCode = '11')),
('1115','QUILANGA',3,(SELECT placeId from Places where placeCode = '11')),
('1116','OLMEDO',3,(SELECT placeId from Places where placeCode = '11')),
('1201','BABAHOYO',3,(SELECT placeId from Places where placeCode = '12')),
('1202','BABA',3,(SELECT placeId from Places where placeCode = '12')),
('1203','MONTALVO',3,(SELECT placeId from Places where placeCode = '12')),
('1204','PUEBLOVIEJO',3,(SELECT placeId from Places where placeCode = '12')),
('1205','QUEVEDO',3,(SELECT placeId from Places where placeCode = '12')),
('1206','URDANETA',3,(SELECT placeId from Places where placeCode = '12')),
('1207','VENTANAS',3,(SELECT placeId from Places where placeCode = '12')),
('1208','VINCES',3,(SELECT placeId from Places where placeCode = '12')),
('1209','PALENQUE',3,(SELECT placeId from Places where placeCode = '12')),
('1210','BUENA FE',3,(SELECT placeId from Places where placeCode = '12')),
('1211','VALENCIA',3,(SELECT placeId from Places where placeCode = '12')),
('1212','MOCACHE',3,(SELECT placeId from Places where placeCode = '12')),
('1213','QUINSALOMA',3,(SELECT placeId from Places where placeCode = '12')),
('1301','PORTOVIEJO',3,(SELECT placeId from Places where placeCode = '13')),
('1302','BOLIVAR',3,(SELECT placeId from Places where placeCode = '13')),
('1303','CHONE',3,(SELECT placeId from Places where placeCode = '13')),
('1304','EL CARMEN',3,(SELECT placeId from Places where placeCode = '13')),
('1305','FLAVIO ALFARO',3,(SELECT placeId from Places where placeCode = '13')),
('1306','JIPIJAPA',3,(SELECT placeId from Places where placeCode = '13')),
('1307','JUNIN',3,(SELECT placeId from Places where placeCode = '13')),
('1308','MANTA',3,(SELECT placeId from Places where placeCode = '13')),
('1309','MONTECRISTI',3,(SELECT placeId from Places where placeCode = '13')),
('1310','PAJAN',3,(SELECT placeId from Places where placeCode = '13')),
('1311','PICHINCHA',3,(SELECT placeId from Places where placeCode = '13')),
('1312','ROCAFUERTE',3,(SELECT placeId from Places where placeCode = '13')),
('1313','SANTA ANA',3,(SELECT placeId from Places where placeCode = '13')),
('1314','SUCRE',3,(SELECT placeId from Places where placeCode = '13')),
('1315','TOSAGUA',3,(SELECT placeId from Places where placeCode = '13')),
('1316','24 DE MAYO',3,(SELECT placeId from Places where placeCode = '13')),
('1317','PEDERNALES',3,(SELECT placeId from Places where placeCode = '13')),
('1318','OLMEDO',3,(SELECT placeId from Places where placeCode = '13')),
('1319','PUERTO LOPEZ',3,(SELECT placeId from Places where placeCode = '13')),
('1320','JAMA',3,(SELECT placeId from Places where placeCode = '13')),
('1321','JARAMIJO',3,(SELECT placeId from Places where placeCode = '13')),
('1322','SAN VICENTE',3,(SELECT placeId from Places where placeCode = '13')),
('1401','MORONA',3,(SELECT placeId from Places where placeCode = '14')),
('1402','GUALAQUIZA',3,(SELECT placeId from Places where placeCode = '14')),
('1403','LIMON INDANZA',3,(SELECT placeId from Places where placeCode = '14')),
('1404','PALORA',3,(SELECT placeId from Places where placeCode = '14')),
('1405','SANTIAGO',3,(SELECT placeId from Places where placeCode = '14')),
('1406','SUCUA',3,(SELECT placeId from Places where placeCode = '14')),
('1407','HUAMBOYA',3,(SELECT placeId from Places where placeCode = '14')),
('1408','SAN JUAN BOSCO',3,(SELECT placeId from Places where placeCode = '14')),
('1409','TAISHA',3,(SELECT placeId from Places where placeCode = '14')),
('1410','LOGROÐO',3,(SELECT placeId from Places where placeCode = '14')),
('1411','PABLO SEXTO',3,(SELECT placeId from Places where placeCode = '14')),
('1412','TIWINTZA',3,(SELECT placeId from Places where placeCode = '14')),
('1901','ZAMORA',3,(SELECT placeId from Places where placeCode = '19')),
('1902','CHINCHIPE',3,(SELECT placeId from Places where placeCode = '19')),
('1903','NANGARITZA',3,(SELECT placeId from Places where placeCode = '19')),
('1904','YACUAMBI',3,(SELECT placeId from Places where placeCode = '19')),
('1905','YANTZAZA',3,(SELECT placeId from Places where placeCode = '19')),
('1906','EL PANGUI',3,(SELECT placeId from Places where placeCode = '19')),
('1907','CENTINELA DEL CONDOR',3,(SELECT placeId from Places where placeCode = '19')),
('1908','PALANDA',3,(SELECT placeId from Places where placeCode = '19')),
('1909','PAQUISHA',3,(SELECT placeId from Places where placeCode = '19')),
('2401','SANTA ELENA',3,(SELECT placeId from Places where placeCode = '24')),
('2403','SALINAS',3,(SELECT placeId from Places where placeCode = '24')),
('9003','MANGA DEL CURA',3,(SELECT placeId from Places where placeCode = '90')),
('0104','NABON',3,(SELECT placeId from Places where placeCode = '01')),
('2001','SAN CRISTOBAL',3,(SELECT placeId from Places where placeCode = '20')),
('2003','SANTA CRUZ',3,(SELECT placeId from Places where placeCode = '20')),
('2002','ISABELA',3,(SELECT placeId from Places where placeCode = '20')),
('2402','LA LIBERTAD',3,(SELECT placeId from Places where placeCode = '24')),
('1114','PINDAL',3,(SELECT placeId from Places where placeCode = '11')),
('0702','ARENILLAS',3,(SELECT placeId from Places where placeCode = '07')),
('0707','HUAQUILLAS',3,(SELECT placeId from Places where placeCode = '07'));