/*
*	DDL Database
*/

/* This table has place type information */
CREATE TABLE IF NOT EXISTS PlaceType (
	placeTypeId INTEGER CONSTRAINT PK_PlaceType PRIMARY KEY AUTOINCREMENT,
	placeTypeName VARCHAR(20) NOT NULL
);

/* This table has case type */
CREATE TABLE IF NOT EXISTS CaseType (
	caseTypeId INTEGER CONSTRAINT PK_CasesType PRIMARY KEY AUTOINCREMENT,
	type VARCHAR(20) NOT NULL
);

/* This table has information of places*/
CREATE TABLE IF NOT EXISTS Place (
	placeId INTEGER CONSTRAINT PK_Place PRIMARY KEY AUTOINCREMENT,
	placeCode VARCHAR(10) NOT NULL UNIQUE,
	placeName VARCHAR(50) NOT NULL,
	placeTypeId INTEGER NOT NULL,
	parentRegion INTEGER,
	CONSTRAINT FK_PlaceType_Place FOREIGN KEY (placeTypeId) REFERENCES PlaceType(placeTypeId),
	CONSTRAINT FK_Place_parentRegion FOREIGN KEY (parentRegion) REFERENCES Place(placeId)
);

/* This table has information of cases */
CREATE TABLE IF NOT EXISTS ConfirmedCase (
	caseId INTEGER CONSTRAINT PK_Case PRIMARY KEY AUTOINCREMENT,
	placeId INTEGER NOT NULL,
	caseTypeId INTEGER NOT NULL,
	infected INTEGER DEFAULT 0,
	actived INTEGER DEFAULT 0,
	dead INTEGER DEFAULT 0,
	healed INTEGER DEFAULT 0,
	insertDate TEXT NOT NULL,
	updateDate TEXT NOT NULL,
	CONSTRAINT FK_Place_ConfirmedCase FOREIGN KEY (placeId) REFERENCES Place(placeId),
	CONSTRAINT FK_CaseType FOREIGN KEY (caseTypeId) REFERENCES CaseType(caseTypeId)
);