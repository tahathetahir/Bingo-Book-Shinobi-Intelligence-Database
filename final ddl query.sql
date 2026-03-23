create database Bingo Book : Shinobi Intelligence;
use [Bingo Book : Shinobi Intelligence Database];

CREATE TABLE  shinobi (
	ninjaId int primary key,
	ninjaName varchar(50),
	dateOfBirth date,
	NinjaStatus varchar(50),
	clan varchar(50),
	chakraNature varchar(50),
	jutsuName varchar(50),
	village varchar(50),
	ninjaRank varchar(50),
	mentorNinjaId int NULL
);

CREATE TABLE village(
	villageName varchar(50) primary key,
	region varchar(50),
	foundedYear int,
	VillagePopulation int,
	tailBeast varchar(10),
	powerIndex decimal(3,2)
);

CREATE TABLE presided_by(
	villageName varchar(50),
	ninjaId int,
	leaderShipStartingDate date,
	LeaderShipStatus varchar(50),

	PRIMARY KEY(villageName,ninjaId)
);

CREATE TABLE jutsu(
	jutsuName varchar(50) primary key,
	jutsuType varchar(50),
	coolDownTime decimal(5,2),
	powerLevel decimal(3,2),
	jutsuStatus varchar(50),
	chakraConsumption varchar(50),
	rankRequired varchar(50),
	elementalNature varchar(50)
);

CREATE TABLE created_by(
	NinjaID int,
	JutsuName varchar(50),
	creationDate date,

	PRIMARY KEY(NinjaId,JutsuName)
);

CREATE TABLE rogueAssociation(
	ra_name varchar(50) primary key,
	memberCount int,
	leader int,
	formationDate date,
	activityLevel varchar(50),
	originNationName varchar(50),
	objective varchar(50)
);

CREATE TABLE ninjaMission(
	missionId int primary key,
	missionObjective varchar(50),
	missionRank char,
	missionType varchar(50),
	missionStatus varchar(50),
	teamAssigned int,
	clientNation varchar(50),
	revenue decimal(10,2)

);

CREATE TABLE standoff(
	ninjaId1 int,
	ninjaId2 int,
	Slocation varchar(50),
	Sstatus varchar(50),
	winnerNinjaId int,

	PRIMARY KEY(ninjaId1,ninjaId2)
);

CREATE TABLE chuninCompetition(
	ChuninYear int primary key,
	winnerNinjaId int,
	runnersUpNinjaId int,
	venueNation varchar(50),
	participantCount int,
	MainSponsorClan varchar(50),
	totalMatches varchar(50),
	duration int

);

CREATE TABLE geninSquad(
	teamNo int primary key,
	teamMentor int,
	teamMember1 int,
	teamMember2 int,
	teamMember3 int,
	SquadStatus varchar(50),
	SquadRank char,
	missionAccomplished int
);

CREATE TABLE inventory(
	ninjaGearId int primary key,
	Iname varchar(50),
	Irange decimal(3,2),
	worth decimal(3,2),
	Icount int,
	rarity varchar(50),
	ownedByNation varchar(50)
);

CREATE TABLE clan(
	clanName varchar(50),
	originVillage varchar(50),
	specialAbilities varchar(50),
	clanSymbol varchar(50),
	clanSize int,

	PRIMARY KEY (clanName)
);

CREATE TABLE Led_by(
	clanName varchar(50),
	NinjaId int,
	StartingDate date,

	PRIMARY KEY (clanName,NinjaId)
);

--Shinobi
ALTER TABLE shinobi ADD CONSTRAINT fk_clan FOREIGN KEY (clan) REFERENCES clan(clanName) ON DELETE SET NULL ON UPDATE CASCADE
ALTER TABLE shinobi ADD CONSTRAINT fk_jutsu FOREIGN KEY (jutsuName) REFERENCES jutsu(jutsuName) ON DELETE SET NULL ON UPDATE CASCADE
ALTER TABLE shinobi ADD CONSTRAINT fk_village FOREIGN KEY (village) REFERENCES village(villageName) ON DELETE SET NULL ON UPDATE CASCADE
ALTER TABLE shinobi ADD CONSTRAINT fk_mentorNinja FOREIGN KEY (mentorNinjaId) REFERENCES shinobi(ninjaId) ON DELETE NO ACTION ON UPDATE NO ACTION
ALTER TABLE shinobi ADD CONSTRAINT fk_clan1 FOREIGN KEY (clan) REFERENCES clan(clanName) ON DELETE NO ACTION ON UPDATE NO ACTION

--Standoff
ALTER TABLE standoff ADD CONSTRAINT fk_member1 FOREIGN KEY (ninjaId1) REFERENCES shinobi(ninjaId) ON DELETE CASCADE ON UPDATE CASCADE
ALTER TABLE standoff ADD CONSTRAINT fk_member2 FOREIGN KEY (ninjaId2) REFERENCES shinobi(ninjaId) ON DELETE NO ACTION ON UPDATE NO ACTION
ALTER TABLE standoff ADD CONSTRAINT fk_winnerId FOREIGN KEY (winnerNinjaId) REFERENCES shinobi(ninjaId) ON DELETE NO ACTION ON UPDATE NO ACTION

--rogueAssociation
ALTER TABLE rogueAssociation ADD CONSTRAINT fk_leader FOREIGN KEY (leader) REFERENCES shinobi(ninjaId) ON DELETE SET NULL ON UPDATE CASCADE
ALTER TABLE rogueAssociation ADD CONSTRAINT fk_origin FOREIGN KEY (originNationName) REFERENCES village(villageName) ON DELETE NO ACTION ON UPDATE NO ACTION

--NinjaMission
ALTER TABLE ninjaMission ADD CONSTRAINT fk_teamAssigned FOREIGN KEY (teamAssigned) REFERENCES geninSquad(teamNo) ON DELETE SET NULL ON UPDATE CASCADE
ALTER TABLE ninjaMission ADD CONSTRAINT fk_client FOREIGN KEY (clientNation) REFERENCES village(villageName) ON DELETE SET NULL ON UPDATE CASCADE
ALTER TABLE ninjaMission ADD CONSTRAINT fk_client1 FOREIGN KEY (clientNation) REFERENCES village(villageName) ON DELETE NO ACTION ON UPDATE NO ACTION

--Clan
ALTER TABLE clan ADD CONSTRAINT fk_villageOfClan FOREIGN KEY (originVillage) REFERENCES village(villageName) ON DELETE NO ACTION ON UPDATE NO ACTION

--Chunin Competition
ALTER TABLE chuninCompetition ADD CONSTRAINT fk_winner FOREIGN KEY (winnerNinjaId) REFERENCES shinobi(ninjaId) ON DELETE SET NULL ON UPDATE CASCADE
ALTER TABLE chuninCompetition ADD CONSTRAINT fk_runersUp FOREIGN KEY (runnersUpNinjaId) REFERENCES shinobi(ninjaId) ON DELETE NO ACTION ON UPDATE NO ACTION
ALTER TABLE chuninCompetition ADD CONSTRAINT fk_sponsor FOREIGN KEY (MainSponsorClan) REFERENCES clan(clanName) ON DELETE NO ACTION ON UPDATE NO ACTION
ALTER TABLE chuninCompetition ADD CONSTRAINT fk_venue FOREIGN KEY (venueNation) REFERENCES village(villageName) ON DELETE NO ACTION ON UPDATE NO ACTION

--Created By
ALTER TABLE created_by ADD CONSTRAINT fk_ninjaLeader FOREIGN KEY (ninjaID) REFERENCES shinobi(ninjaId) ON DELETE NO ACTION ON UPDATE NO ACTION
ALTER TABLE created_by ADD CONSTRAINT fk_JutsuName FOREIGN KEY (jutsuName) REFERENCES jutsu(jutsuName) ON DELETE NO ACTION ON UPDATE NO ACTION

--Led By
ALTER TABLE led_by ADD CONSTRAINT fk_ninjaLeader1 FOREIGN KEY (ninjaID) REFERENCES shinobi(ninjaId) ON DELETE NO ACTION ON UPDATE NO ACTION
ALTER TABLE led_by ADD CONSTRAINT fk_clanName FOREIGN KEY (clanName) REFERENCES clan(clanName) ON DELETE NO ACTION ON UPDATE NO ACTION

--Presided By
ALTER TABLE presided_by ADD CONSTRAINT fk_ninjaLeader2 FOREIGN KEY (ninjaID) REFERENCES shinobi(ninjaId) ON DELETE NO ACTION ON UPDATE NO ACTION
ALTER TABLE presided_by ADD CONSTRAINT fk_village2 FOREIGN KEY (villageName) REFERENCES village(villageName) ON DELETE NO ACTION ON UPDATE NO ACTION

--Inventory
ALTER TABLE inventory ADD CONSTRAINT fk_ninjaGearId FOREIGN KEY (ownedByNation) REFERENCES village(villageName) ON DELETE NO ACTION ON UPDATE NO ACTION
