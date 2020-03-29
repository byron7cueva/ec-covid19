/* DDL Database */
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

/* This table has information of places*/
CREATE TABLE IF NOT EXISTS Places (
	placeCode VARCHAR(5) NOT NULL UNIQUE,
	placeName VARCHAR(50) NOT NULL,
	x DOUBLE PRECISION,
	y DOUBLE PRECISION,
	placeTypeId INTEGER NOT NULL,
	parentRegion VARCHAR(5)
);

/* This table has information of cases */
CREATE TABLE IF NOT EXISTS ConfirmedCases (
	caseId INTEGER NOT NULL DEFAULT nextval('ConfirmedCases_caseId_seq'),
	placeCode VARCHAR(5) NOT NULL,
	caseDate DATE,
	confirmed INTEGER DEFAULT 0,
	totalConfirmed INTEGER DEFAULT 0,
	dead INTEGER DEFAULT 0,
	totalDead INTEGER DEFAULT 0,
	healed INTEGER DEFAULT 0,
	totalHealed INTEGER DEFAULT 0,
	insertDate TIMESTAMP NOT NULL,
	updateDate TIMESTAMP NOT NULL
);

/* This table has information of users */
CREATE TABLE IF NOT EXISTS Users (
	userId INTEGER NOT NULL DEFAULT nextval('Users_userId_seq'),
	userName VARCHAR(20) NOT NULL,
	userPass VARCHAR(100) NOT NULL
);

/* Constraints */

/* Primary Keys*/
ALTER TABLE PlaceTypes ADD CONSTRAINT PK_PlaceTypes PRIMARY KEY (placeTypeId);
ALTER TABLE Places ADD CONSTRAINT PK_Places PRIMARY KEY (placeCode);
ALTER TABLE ConfirmedCases ADD CONSTRAINT PK_ConfirmedCases PRIMARY KEY (caseId);
ALTER TABLE Users ADD CONSTRAINT PK_Users PRIMARY KEY (userId);

/* Foreing Keys */
ALTER TABLE Places ADD CONSTRAINT FK_PlaceTypes_Places FOREIGN KEY (placeTypeId) REFERENCES PlaceTypes(placeTypeId);
ALTER TABLE Places ADD CONSTRAINT FK_Places_parentRegion FOREIGN KEY (parentRegion) REFERENCES Places(placeCode);

ALTER TABLE ConfirmedCases ADD CONSTRAINT FK_Places_ConfirmedCases FOREIGN KEY (placeCode) REFERENCES Places(placeCode);