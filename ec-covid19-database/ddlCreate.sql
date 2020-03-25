/*
*	DDL Database
*/

/* Secuencies */
CREATE SEQUENCE IF NOT EXISTS Places_placeId_seq
START 1
MINVALUE 1;

CREATE SEQUENCE IF NOT EXISTS ConfirmedCases_caseId_seq
START 1
MINVALUE 1;

CREATE SEQUENCE IF NOT EXISTS Users_userId_seq
START 1
MINVALUE 1;

/* This table has place type information */
CREATE TABLE IF NOT EXISTS PlaceTypes (
	placeTypeId INTEGER NOT NULL,
	placeTypeName VARCHAR(20) NOT NULL
);

/* This table has case type */
CREATE TABLE IF NOT EXISTS CaseTypes (
	caseTypeId INTEGER NOT NULL,
	type VARCHAR(20) NOT NULL
);

/* This table has information of places*/
CREATE TABLE IF NOT EXISTS Places (
	placeId INTEGER NOT NULL DEFAULT nextval('Places_placeId_seq'),
	placeCode VARCHAR(10) NOT NULL UNIQUE,
	placeName VARCHAR(50) NOT NULL,
	placeTypeId INTEGER NOT NULL,
	parentRegion INTEGER
);

/* This table has information of cases */
CREATE TABLE IF NOT EXISTS ConfirmedCases (
	caseId INTEGER NOT NULL DEFAULT nextval('ConfirmedCases_caseId_seq'),
	placeId INTEGER NOT NULL,
	caseTypeId INTEGER NOT NULL,
	caseDate DATE,
	confirmed INTEGER DEFAULT 0,
	dead INTEGER DEFAULT 0,
	healed INTEGER DEFAULT 0,
	insertDate TIMESTAMP NOT NULL,
	updateDate TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Users (
	userId INTEGER NOT NULL DEFAULT nextval('Users_userId_seq'),
	userName VARCHAR(20) NOT NULL,
	userPass VARCHAR(100) NOT NULL
);

/* Constraints */
ALTER TABLE PlaceTypes ADD CONSTRAINT PK_PlaceTypes PRIMARY KEY (placeTypeId);
ALTER TABLE CaseTypes ADD CONSTRAINT PK_CasesTypes PRIMARY KEY (caseTypeId);
ALTER TABLE Places ADD CONSTRAINT PK_Places PRIMARY KEY (placeId);
ALTER TABLE ConfirmedCases ADD CONSTRAINT PK_ConfirmedCases PRIMARY KEY (caseId);
ALTER TABLE Users ADD CONSTRAINT PK_Users PRIMARY KEY (userId);

ALTER TABLE Places ADD CONSTRAINT FK_PlaceTypes_Places FOREIGN KEY (placeTypeId) REFERENCES PlaceTypes(placeTypeId);
ALTER TABLE Places ADD CONSTRAINT FK_Places_parentRegion FOREIGN KEY (parentRegion) REFERENCES Places(placeId);


ALTER TABLE ConfirmedCases ADD CONSTRAINT FK_Places_ConfirmedCases FOREIGN KEY (placeId) REFERENCES Places(placeId);
ALTER TABLE ConfirmedCases ADD CONSTRAINT FK_CaseTypes FOREIGN KEY (caseTypeId) REFERENCES CaseTypes(caseTypeId);