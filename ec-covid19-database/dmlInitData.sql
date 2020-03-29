/* DML Database */

/* Default data for PlaceType */
INSERT INTO PlaceTypes(placeTypeId, placeTypeName) VALUES
(1, 'PAIS'),
(2, 'REGION'),
(3, 'PROVINCIA'),
(4, 'CANTON');

/* Init information places */
/* Pais */
INSERT INTO Places(placeCode, placeName, placeTypeId) VALUES('0','ECUADOR', 1);

INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1', 'COSTA', 2, '0'),
('2', 'SIERRA', 2, '0'),
('3', 'AMAZONICA', 2, '0'),
('4', 'INSULAR', 2, '0');

/* Provincias */

/* Provincias de la Sierra */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion, x, y) VALUES
('01', 'AZUAY', 3, '2', -79.217027460231392, -3.063368061779532),
('02', 'BOLIVAR', 3, '2', -79.057632983191027, -1.676145442392809),
('03', 'CAÑAR', 3, '2', -78.997311903601144, -2.524413181562859),
('04', 'CARCHI', 3, '2', -77.972804597590098, 0.777195893390834),
('05', 'COTOPAXI', 3, '2', -78.789457800480449, -0.775866751591376),
('06', 'CHIMBORAZO', 3, '2', -78.748672688236098, -1.998714359751516),
('10', 'IMBABURA', 3, '2', -78.324147083367677, 0.499426796546523),
('11', 'LOJA', 3, '2', -79.799889349014563, -4.035189088832672),
('17', 'PICHINCHA', 3, '2', -78.50450002157595, -0.195082592070566),
('18', 'TUNGURAHUA', 3, '2', -78.501968613940917, -1.256087180760388);

/* Provincias de la Costa */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion, x, y) VALUES
('07', 'EL ORO', 3, '1', -79.841251418354773, -3.468703430601732),
('08', 'ESMERALDAS', 3, '1', -79.280500874365657, 0.656406712121103),
('09', 'GUAYAS', 3, '1', -79.925491387322239, -1.950241537205953),
('12', 'LOS RIOS', 3, '1', -79.538108301530968, -1.336093302270182),
('13', 'MANABI', 3, '1', -80.102134744944692, -0.787411983125811),
('23', 'SANTO DOMINGO DE LOS TSACHILAS', 3, '1', -79.170208469666704, -0.340921386092186),
('24', 'SANTA ELENA', 3, '1', -80.520093004015465, -2.087041475617609);

/* Provincias de la Amazonia */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion, x, y) VALUES
('14', 'MORONA SANTIAGO', 3, '3', -77.733438447662081, -2.517612571650533),
('15', 'NAPO', 3, '3', -77.951499176495361, -0.606913013983796),
('16', 'PASTAZA', 3, '3', -76.823690404044868, -1.807298724395955),
('19', 'ZAMORA CHINCHIPE', 3, '3', -78.848161691373008, -4.178897121524937),
('21', 'SUCUMBIOS', 3, '3', -76.683393905465437, 0.00311990632424),
('22', 'ORELLANA', 3, '3', -76.223387371976415, -0.805732861700533);

/* Provincias de la region insular */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion, x, y) VALUES
('20','GALAPAGOS', 3, '4', -91.088987744347079, -0.444805391991203);

/* Cantones */
/* Cantones de Bolivar */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0201', 'GUARANDA', 4, '02'),
('0202', 'CHILLANES', 4, '02'),
('0203', 'CHIMBO', 4, '02'),
('0204', 'ECHEANDIA', 4, '02'),
('0205', 'SAN MIGUEL', 4, '02'),
('0206', 'CALUMA', 4, '02'),
('0207', 'LAS NAVES', 4, '02');

/* Cantones del Carchi */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0401', 'TULCAN', 4, '04'),
('0402', 'BOLIVAR', 4, '04'),
('0403', 'ESPEJO', 4, '04'),
('0404', 'MIRA', 4, '04'),
('0405', 'MONTUFAR', 4, '04'),
('0406', 'SAN PEDRO DE HUACA', 4, '04');

/* Cantones de Cotopaxi */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0501', 'LATACUNGA', 4, '05'),
('0502', 'LA MANA', 4, '05'),
('0503', 'PANGUA', 4, '05'),
('0504', 'PUJILI', 4, '05'),
('0505', 'SALCEDO', 4, '05'),
('0506', 'SAQUISILI', 4, '05'),
('0507', 'SIGCHOS', 4, '05');

/* Cantones de Chimborazo */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0601', 'RIOBAMBA', 4, '06'),
('0602', 'ALAUSI', 4, '06'),
('0603', 'COLTA', 4, '06'),
('0604', 'CHAMBO', 4, '06'),
('0605', 'CHUNCHI', 4, '06'),
('0606', 'GUAMOTE', 4, '06'),
('0607', 'GUANO', 4, '06'),
('0608', 'PALLATANGA', 4, '06'),
('0609', 'PENIPE', 4, '06'),
('0610', 'CUMANDA', 4, '06');

/* Cantones de Esmeraldas */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0801', 'ESMERALDAS', 4, '08'),
('0802', 'ELOY ALFARO', 4, '08'),
('0803', 'MUISNE', 4, '08'),
('0804', 'QUININDE', 4, '08'),
('0805', 'SAN LORENZO', 4, '08'),
('0806', 'ATACAMES', 4, '08'),
('0807', 'RIOVERDE', 4, '08'),
('0808', 'LA CONCORDIA', 4, '08');

/* Cantones de Imbabura */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1001', 'IBARRA', 4, '10'),
('1002', 'ANTONIO ANTE', 4, '10'),
('1003', 'COTACACHI', 4, '10'),
('1004', 'OTAVALO', 4, '10'),
('1005', 'PIMAMPIRO', 4, '10'),
('1006', 'SAN MIGUEL DE URCUQUI', 4, '10');

/* Cantones de Napo */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1501', 'TENA', 4, '15'),
('1503', 'ARCHIDONA', 4, '15'),
('1504', 'EL CHACO', 4, '15'),
('1507', 'QUIJOS', 4, '15'),
('1509', 'CARLOS JULIO AROSEMENA TOLA', 4, '15');

/* Cantones de Pastaza */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1601', 'PASTAZA', 4, '16'),
('1602', 'MERA', 4, '16'),
('1603', 'SANTA CLARA', 4, '16'),
('1604', 'ARAJUNO', 4, '16');

/* Cantones de Pichincha */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1701', 'QUITO', 4, '17'),
('1702', 'CAYAMBE', 4, '17'),
('1703', 'MEJIA', 4, '17'),
('1704', 'PEDRO MONCAYO', 4, '17'),
('1705', 'RUMIÑAHUI', 4, '17'),
('1707', 'SAN MIGUEL DE LOS BANCOS', 4, '17'),
('1708', 'PEDRO VICENTE MALDONADO', 4, '17'),
('1709', 'PUERTO QUITO', 4, '17');

/* Cantones de Tunguragua */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1801', 'AMBATO', 4, '18'),
('1802', 'BAÑOS DE AGUA SANTA', 4, '18'),
('1803', 'CEVALLOS', 4, '18'),
('1804', 'MOCHA', 4, '18'),
('1805', 'PATATE', 4, '18'),
('1806', 'QUERO', 4, '18'),
('1807', 'SAN PEDRO DE PELILEO', 4, '18'),
('1808', 'SANTIAGO DE PILLARO', 4, '18'),
('1809', 'TISALEO', 4, '18');

/* Cantones de Sucumbios */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('2101', 'LAGO AGRIO', 4, '21'),
('2102', 'GONZALO PIZARRO', 4, '21'),
('2103', 'PUTUMAYO', 4, '21'),
('2104', 'SHUSHUFINDI', 4, '21'),
('2105', 'SUCUMBIOS', 4, '21'),
('2106', 'CASCALES', 4, '21'),
('2107', 'CUYABENO', 4, '21');

/* Cantones de Orellana */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('2201', 'ORELLANA', 4,  '22'),
('2202', 'AGUARICO', 4,  '22'),
('2203', 'LA JOYA DE LOS SACHAS', 4,  '22'),
('2204', 'LORETO', 4,  '22');

/* Cantones de Santo Domingo de los Tsachilas */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('2301', 'SANTO DOMINGO', 4, '23');

/* Cantones de Azuay */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0101', 'CUENCA', 4, '01'),
('0102', 'GIRON', 4, '01'),
('0103', 'GUALACEO', 4, '01'),
('0104', 'NABON', 4, '01'),
('0105', 'PAUTE', 4, '01'),
('0106', 'PUCARA', 4, '01'),
('0107', 'SAN FERNANDO', 4, '01'),
('0108', 'SANTA ISABEL', 4, '01'),
('0109', 'SIGSIG', 4, '01'),
('0110', 'OÑA', 4, '01'),
('0111', 'CHORDELEG', 4, '01'),
('0112', 'EL PAN', 4, '01'),
('0113', 'SEVILLA DE ORO', 4, '01'),
('0114', 'GUACHAPALA', 4, '01'),
('0115', 'CAMILO PONCE ENRIQUEZ', 4, '01');

/* Cantones de Cañar */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0301', 'AZOGUES', 4, '03'),
('0302', 'BIBLIAN', 4, '03'),
('0303', 'CAÑAR', 4, '03'),
('0304', 'LA TRONCAL', 4, '03'),
('0305', 'EL TAMBO', 4, '03'),
('0306', 'DELEG', 4, '03'),
('0307', 'SUSCAL', 4, '03');

/* Cantones de El Oro */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0701', 'MACHALA', 4, '07'),
('0702', 'ARENILLAS', 4, '07'),
('0703', 'ATAHUALPA', 4, '07'),
('0704', 'BALSAS', 4, '07'),
('0705', 'CHILLA', 4, '07'),
('0706', 'EL GUABO', 4, '07'),
('0707', 'HUAQUILLAS', 4, '07'),
('0708', 'MARCABELI', 4, '07'),
('0709', 'PASAJE', 4, '07'),
('0710', 'PIÑAS', 4, '07'),
('0711', 'PORTOVELO', 4, '07'),
('0712', 'SANTA ROSA', 4, '07'),
('0713', 'ZARUMA', 4, '07'),
('0714', 'LAS LAJAS', 4, '07');

/* Cantones de Guayas */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('0901', 'GUAYAQUIL', 4, '09'),
('0902', 'ALFREDO BAQUERIZO MORENO', 4, '09'),
('0903', 'BALAO', 4, '09'),
('0904', 'BALZAR', 4, '09'),
('0905', 'COLIMES', 4, '09'),
('0906', 'DAULE', 4, '09'),
('0907', 'DURAN', 4, '09'),
('0908', 'EMPALME', 4, '09'),
('0909', 'EL TRIUNFO', 4, '09'),
('0910', 'MILAGRO', 4, '09'),
('0911', 'NARANJAL', 4, '09'),
('0912', 'NARANJITO', 4, '09'),
('0913', 'PALESTINA', 4, '09'),
('0914', 'PEDRO CARBO', 4, '09'),
('0916', 'SAMBORONDON', 4, '09'),
('0918', 'SANTA LUCIA', 4, '09'),
('0919', 'SALITRE', 4, '09'),
('0920', 'SAN JACINTO DE YAGUACHI', 4, '09'),
('0921', 'PLAYAS', 4, '09'),
('0922', 'SIMON BOLIVAR', 4, '09'),
('0923', 'CRNEL. MARCELINO MARIDUEÑA', 4, '09'),
('0924', 'LOMAS DE SARGENTILLO', 4, '09'),
('0925', 'NOBOL', 4, '09'),
('0927', 'GNRAL. ANTONIO ELIZALDE', 4, '09'),
('0928', 'ISIDRO AYORA', 4, '09');

/* Cantones de Loja */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1101', 'LOJA', 4, '11'),
('1102', 'CALVAS', 4, '11'),
('1103', 'CATAMAYO', 4, '11'),
('1104', 'CELICA', 4, '11'),
('1105', 'CHAGUARPAMBA', 4, '11'),
('1106', 'ESPINDOLA', 4, '11'),
('1107', 'GONZANAMA', 4, '11'),
('1108', 'MACARA', 4, '11'),
('1109', 'PALTAS', 4, '11'),
('1110', 'PUYANGO', 4, '11'),
('1111', 'SARAGURO', 4, '11'),
('1112', 'SOZORANGA', 4, '11'),
('1113', 'ZAPOTILLO', 4, '11'),
('1114', 'PINDAL', 4, '11'),
('1115', 'QUILANGA', 4, '11'),
('1116', 'OLMEDO', 4, '11');

/* Cantones de Los Rios */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1201', 'BABAHOYO', 3, '12'),
('1202', 'BABA', 3, '12'),
('1203', 'MONTALVO', 3, '12'),
('1204', 'PUEBLOVIEJO', 3, '12'),
('1205', 'QUEVEDO', 3, '12'),
('1206', 'URDANETA', 3, '12'),
('1207', 'VENTANAS', 3, '12'),
('1208', 'VINCES', 3, '12'),
('1209', 'PALENQUE', 3, '12'),
('1210', 'BUENA FE', 3, '12'),
('1211', 'VALENCIA', 3, '12'),
('1212', 'MOCACHE', 3, '12'),
('1213', 'QUINSALOMA', 3, '12');

/* Cantones de Los Manabi */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1301', 'PORTOVIEJO', 4, '13'),
('1302', 'BOLIVAR', 4, '13'),
('1303', 'CHONE', 4, '13'),
('1304', 'EL CARMEN', 4, '13'),
('1305', 'FLAVIO ALFARO', 4, '13'),
('1306', 'JIPIJAPA', 4, '13'),
('1307', 'JUNIN', 4, '13'),
('1308', 'MANTA', 4, '13'),
('1309', 'MONTECRISTI', 4, '13'),
('1310', 'PAJAN', 4, '13'),
('1311', 'PICHINCHA', 4, '13'),
('1312', 'ROCAFUERTE', 4, '13'),
('1313', 'SANTA ANA', 4, '13'),
('1314', 'SUCRE', 4, '13'),
('1315', 'TOSAGUA', 4, '13'),
('1316', '24 DE MAYO', 4, '13'),
('1317', 'PEDERNALES', 4, '13'),
('1318', 'OLMEDO', 4, '13'),
('1319', 'PUERTO LOPEZ', 4, '13'),
('1320', 'JAMA', 4, '13'),
('1321', 'JARAMIJO', 4, '13'),
('1322', 'SAN VICENTE', 4, '13');

/* Cantones de Morona Santiago */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1401', 'MORONA', 4, '14'),
('1402', 'GUALAQUIZA', 4, '14'),
('1403', 'LIMON INDANZA', 4, '14'),
('1404', 'PALORA', 4, '14'),
('1405', 'SANTIAGO', 4, '14'),
('1406', 'SUCUA', 4, '14'),
('1407', 'HUAMBOYA', 4, '14'),
('1408', 'SAN JUAN BOSCO', 4, '14'),
('1409', 'TAISHA', 4, '14'),
('1410', 'LOGROÐO', 4, '14'),
('1411', 'PABLO SEXTO', 4, '14'),
('1412', 'TIWINTZA', 4, '14');

/* Cantones de Zamora Chonchipe */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('1901', 'ZAMORA', 4, '19'),
('1902', 'CHINCHIPE', 4, '19'),
('1903', 'NANGARITZA', 4, '19'),
('1904', 'YACUAMBI', 4, '19'),
('1905', 'YANTZAZA', 4, '19'),
('1906', 'EL PANGUI', 4, '19'),
('1907', 'CENTINELA DEL CONDOR', 4, '19'),
('1908', 'PALANDA', 4, '19'),
('1909', 'PAQUISHA', 4, '19');

/* Cantones de Santa Elena */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('2401', 'SANTA ELENA', 4, '24'),
('2402', 'LA LIBERTAD', 4, '24'),
('2403', 'SALINAS', 4, '24');

/* Cantones de Galapagos */
INSERT INTO Places(placeCode, placeName, placeTypeId, parentRegion) VALUES
('2001','SAN CRISTOBAL', 4, '20'),
('2003','SANTA CRUZ', 4, '20'),
('2002','ISABELA', 4, '20');