create database [Bingo Book : Shinobi Intelligence Database];
go
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


------------------__DML__------------------------------

INSERT INTO village (villageName, region, foundedYear,tailBeast, VillagePopulation, powerIndex) VALUES
('Leaf', 'Land of Fire', 1937, '9-Tails',1230, 9.5),
('Sand', 'Land of Wind', 1960, '1-Tail',2560, 7.8),
('Cloud', 'Land of Lightning', 2000, '8-Tails',9860, 6.5),
('Mist', 'Land of Water', 2005, '3-Tails',5000, 7.2),
('Stone', 'Land of Earth', 1990, '4-Tails',4350, 8.1),
('Rain', 'Land of Rivers', 1999, '2-Tails',1500, 8.9),
('Sound','Land of Fire',2007,NULL,1000,9.0);

INSERT INTO jutsu (jutsuName, jutsuType, coolDownTime, powerLevel,JutsuStatus,chakraConsumption,rankRequired,elementalNature) VALUES 
('Rasengan','Ninjutsu',5.00,8.5,'Active','High','A','Wind'),
('Chidori','Ninjutsu',4.50,8.0,'Active','High','A','Lightning'),
('Fire Dragon Flame','Ninjutsu',4.00,7.5,'Active','Medium','B','Fire'),
('Heavenly Foot of Pain','Taijutsu',3.00,7.0,'Active','Medium','B','Earth'),
('Snake Authority','Ninjutsu',4.20,8.2,'Forbidden','High','A','Wind'),
('Shadow Stitching','Hiden',3.50,6.5,'Clan Technique','Medium','B','Yin'),
('Mind Transfer','Hiden',3.00,6.0,'Clan Technique','Medium','B','Yin'),
('Human Bullet Tank','Taijutsu',2.50,6.8,'Clan Technique','Medium','C','Yang'),
('Daytime Tiger','Taijutsu',6.00,9.2,'Forbidden','Extreme','S','Fire'),
('Hidden Lotus','Taijutsu',5.00,8.8,'Forbidden','Extreme','A','None'),
('Sand Coffin','Ninjutsu',3.80,7.9,'Active','Medium','B','Wind'),
('Sea Dragon','Ninjutsu',4.10,7.4,'Active','High','B','Water'),
('Lariat','Taijutsu',3.50,8.7,'Active','High','A','Lightning'),
('Amaterasu','Dojutsu',7.00,9.9,'Forbidden','Extreme','S','Fire'),
('Kirin','Ninjutsu',8.00,9.5,'Active','Extreme','S','Lightning'),
('Almighty Push','Dojutsu',7.50,9.9,'Forbidden','Extreme','S','None'),
('Kamui','Dojutsu',7.00,9.7,'Forbidden','Extreme','S','None'),
('Paper Shuriken','Ninjutsu',2.80,7.2,'Active','Medium','B','None'),
('C4 Karura','Ninjutsu',6.50,9.1,'Forbidden','Extreme','S','Earth'),
('Water Dragon','Ninjutsu',4.00,7.8,'Active','High','B','Water');

INSERT INTO jutsu (jutsuName, jutsuType, coolDownTime, powerLevel,JutsuStatus,chakraConsumption,rankRequired,elementalNature) VALUES 
('Gentle Fist','Taijutsu',3.00,7.5,'Clan Technique','Medium','B','None');

INSERT INTO clan (clanName, originVillage, specialAbilities, clanSymbol, clanSize) VALUES
('Uchiha','Leaf','Sharingan','Fan',150),
('Hyuga','Leaf','Byakugan','FlameCircle',120),
('Nara','Leaf','Shadow Manipulation','Deer',80),
('Yamanaka','Leaf','Mind Transfer','Flower',70),
('Akimichi','Leaf','Body Expansion','Butterfly',75),
('Sarutobi','Leaf','Fire Release','Monkey',60),
('Kazekage Line','Sand','Sand Manipulation','Gourd',40),
('Hoshigaki','Mist','Enhanced Strength and Chakra','Shark',35),
('Yotsuki','Cloud','Lightning Release Mastery','Lightning Crest',50),
('Explosion Corps','Stone','Explosion Release','Blast Mark',45),
('Amegakure Elite','Rain','Rain Sensory Techniques','Rain Drop',30),
('Otogakure Experiments','Sound','Curse Mark Enhancement','Sound Wave',25),
('Senju','Leaf','Immense Chakra and Wood Affinity','Leaf Crest',60),
('Hatake','Leaf','Elite Combat Skill and Tactical Intelligence','White Fang Symbol',15),
('Uzumaki','Leaf','Massive Chakra Reserves and Sealing Jutsu','Spiral Crest',40);

INSERT INTO shinobi (ninjaId,ninjaName,dateOfBirth,NinjaStatus,clan,chakraNature,jutsuName,village,ninjaRank,mentorNinjaId) VALUES
(1,'Hiruzen Sarutobi','1937-02-08','Deceased','Sarutobi','Fire','Fire Dragon Flame','Leaf','H',null),
(2,'Jiraiya','1946-11-11','Deceased',NULL,'Fire','Rasengan','Leaf','S','1'),
(3,'Tsunade Senju','1950-08-02','Alive','Senju','Earth','Heavenly Foot of Pain','Leaf','H','1'),
(4,'Orochimaru','1951-10-27','Alive',NULL,'Wind','Snake Authority','Leaf','S','1'),
(5,'Minato Namikaze','1968-01-25','Deceased',NULL,'Wind','Rasengan','Leaf','H','2'),
(6,'Kakashi Hatake','1972-09-15','Alive','Hatake','Lightning','Chidori','Leaf','J','5'),
(7,'Naruto Uzumaki','1999-10-10','Alive','Uzumaki','Wind','Rasengan','Leaf','G','6'),
(8,'Sasuke Uchiha','1999-07-23','Alive','Uchiha','Lightning','Kirin','Leaf','G','6'),
(9,'Sakura Haruno','1999-03-28','Alive',NULL,'Earth','Heavenly Foot of Pain','Leaf','G','6'),
(10,'Asuma Sarutobi','1970-10-18','Deceased','Sarutobi','Wind','Fire Dragon Flame','Leaf','J','1'),
(11,'Shikamaru Nara','1999-09-22','Alive','Nara','Yin','Shadow Stitching','Leaf','C','10'),
(12,'Ino Yamanaka','1999-09-23','Alive','Yamanaka','Yin','Mind Transfer','Leaf','C','10'),
(13,'Choji Akimichi','1999-05-01','Alive','Akimichi','Yang','Human Bullet Tank','Leaf','C','10'),
(14,'Might Guy','1970-01-01','Alive',NULL,'Fire','Daytime Tiger','Leaf','J',null),
(15,'Rock Lee','2000-11-27','Alive',NULL,'None','Hidden Lotus','Leaf','J','14'),
(16,'Gaara','1999-01-19','Alive',NULL,'Wind','Sand Coffin','Sand','K',null),
(17,'Temari','1997-08-23','Alive',NULL,'Wind','Sea Dragon','Sand','J',null),
(18,'Kankuro','1998-05-15','Alive',NULL,'Wind','Sand Coffin','Sand','J',null),
(19,'Killer Bee','1970-05-15','Alive',NULL,'Lightning','Lariat','Cloud','J',null),
(20,'Itachi Uchiha','1985-06-09','Deceased','Uchiha','Fire','Amaterasu','Leaf','S','4'),
(21,'Pain','1987-09-19','Deceased',NULL,'None','Almighty Push','Rain','S','2'),
(22,'Konan','1987-02-20','Deceased',NULL,'None','Paper Shuriken','Rain','S','2'),
(23,'Tobi','1983-02-10','Deceased','Uchiha','None','Kamui','Leaf','S','5'),
(24,'Deidara','1988-05-05','Deceased',NULL,'Earth','C4 Karura','Stone','S',null),
(25,'Kisame Hoshigaki','1980-03-18','Deceased','Hoshigaki','Water','Water Dragon','Mist','S',null),
(26,'Neji Hyuga','1999-07-03','Deceased','Hyuga','Wind','Gentle Fist','Leaf','G','14'),
(27,'Hinata Hyuga','1999-12-27','Alive','Hyuga','Fire','Gentle Fist','Leaf','G','1');

INSERT INTO Led_by (clanName, NinjaId, StartingDate) VALUES
('Sarutobi', 1, '1937-02-08'),
('Senju', 3, '1950-08-02'),
('Hatake', 6, '1972-09-15'),
('Uzumaki', 7, '1999-10-10'),
('Uchiha', 8, '1999-07-23'),
('Nara', 11, '1999-09-22'),
('Yamanaka', 12, '1999-09-23'),
('Akimichi', 13, '1999-05-01'),
('Hyuga', 26, '1999-07-03'),
('Hoshigaki', 25, '1980-03-18');

INSERT INTO rogueAssociation (ra_name, memberCount, leader, formationDate, activityLevel, originNationName, objective) VALUES
('Akatsuki',10,21,'2005-01-01','High','Rain','World Peace via Pain'),
('Taka',4,8,'2008-01-01','Medium','Leaf','Destroy the Leaf'),
('Seven Swordsmen',7,25,'2000-01-01','Medium','Mist','Coup detat');

INSERT INTO presided_by (villageName, ninjaId, leaderShipStartingDate, LeaderShipStatus) VALUES
('Leaf', 1, '1995-01-01', 'Former'),
('Leaf', 5, '2001-01-01', 'Former'),
('Leaf', 3, '2006-01-01', 'Active'),
('Sand', 16, '2004-01-01', 'Active'),
('Rain', 21, '2006-01-01', 'Active');

INSERT INTO created_by (NinjaID, JutsuName, creationDate) VALUES
(5,'Rasengan','2001-01-01'),
(6,'Chidori','2003-01-01'),
(1,'Fire Dragon Flame','1995-01-01'),
(3,'Heavenly Foot of Pain','2006-01-01'),
(4,'Snake Authority','1998-01-01'),
(11,'Shadow Stitching','2007-01-01'),
(12,'Mind Transfer','2007-01-01'),
(13,'Human Bullet Tank','2007-01-01'),
(14,'Daytime Tiger','2005-01-01'),
(14,'Hidden Lotus','2003-01-01'),
(16,'Sand Coffin','2004-01-01'),
(17,'Sea Dragon','2006-01-01'),
(19,'Lariat','2002-01-01'),
(20,'Amaterasu','2008-01-01'),
(8,'Kirin','2009-01-01'),
(21,'Almighty Push','2006-01-01'),
(23,'Kamui','2005-01-01'),
(22,'Paper Shuriken','2007-01-01'),
(24,'C4 Karura','2008-01-01'),
(25,'Water Dragon','2003-01-01'),
(26,'Gentle Fist','2007-01-01');

INSERT INTO chuninCompetition (ChuninYear, winnerNinjaId, runnersUpNinjaId, venueNation, participantCount, MainSponsorClan, totalMatches, duration)VALUES
(2002, 11, 17, 'Leaf', 30, 'Nara', '15', 7),
(2004, 8, 7, 'Leaf', 32, 'Uchiha', '16', 7),
(2006, 26, 7, 'Leaf', 35, 'Hyuga', '18', 8),
(2008, 7, 11, 'Leaf', 40, 'Uzumaki', '20', 10),
(2010, 8, 26, 'Leaf', 45, 'Uchiha', '22', 12);

INSERT INTO geninSquad (teamNo, teamMentor, teamMember1, teamMember2, teamMember3, SquadStatus, SquadRank, missionAccomplished) VALUES
(7, 6, 7, 8, 9, 'Active', 'A', 150),     -- Team Kakashi: Naruto, Sasuke, Sakura
(10, 10, 11, 12, 13, 'Active', 'B', 125), -- Team Asuma: Shikamaru, Ino, Choji
(8, 1, 15, 17, 18, 'Active', 'C', 90),    -- Team Kurenai (IDs for variety)
(9, 14, 15, 7, 11, 'Active', 'A', 210),   -- Team Guy
(5, 16, 16, 17, 18, 'Active', 'B', 110),  -- Sand Siblings: Gaara, Temari, Kankuro
(1, 5, 2, 3, 4, 'Active', 'S', 300),      -- The Legendary Sannin (Minato�s team)
(12, 2, 21, 22, 19, 'Active', 'A', 45),   -- Rain Team: Pain, Konan, Killer Bee
(13, 20, 23, 24, 25, 'Active', 'A', 60);  -- Rogue Team: Tobi, Deidara, Kisame

INSERT INTO ninjaMission (missionId, missionObjective, missionRank, teamAssigned, clientNation, revenue) VALUES
(101,'Escort Bridge Builder Tazuna','A',7,'Leaf',50000.00),
(102,'Retrieve Forbidden Scroll','S',7,'Leaf',150000.00),
(103,'Infiltrate Hidden Rain','S',1,'Rain',200000.00),
(104,'Defend Sunagakure Borders','B',5,'Sand',35000.00),
(105,'Capture Rare Medicinal Herbs','C',10,'Leaf',12000.00),
(106,'Protect Land of Fire Daimyo','A',9,'Leaf',80000.00),
(107,'Investigate Rogue Activity','B',10,'Cloud',45000.00),
(108,'Intercept Akatsuki Spy','S',13,NULL,180000.00),
(109,'Deliver Secret Intelligence','B',8,'Mist',30000.00),
(110,'Search for Rare Ore','C',12,'Stone',15000.00),
(111,'Escort Merchant Caravan','C',8,'Sand',10000.00),
(112,'Neutralize Bandit Leader','B',9,'Leaf',25000.00),
(113,'Reconnaissance in Land of Iron','A',5,'Cloud',70000.00),
(114,'Sabotage Weapon Supply Line','A',13,'Mist',90000.00),
(115,'Recover Stolen Kunai Shipment','D',7,'Leaf',5000.00);


INSERT INTO standoff (ninjaId1, ninjaId2, Slocation, Sstatus, winnerNinjaId) VALUES
(7, 8, 'Valley of the End', 'Completed', 8),        -- Naruto vs Sasuke (Sasuke wins)
(2, 21, 'Hidden Rain Village', 'Completed', 21),   -- Jiraiya vs Pain (Pain wins)
(6, 23, 'Kamui Dimension', 'Completed', 6),        -- Kakashi vs Tobi (Kakashi wins)
(20, 8, 'Uchiha Hideout', 'Completed', 8),         -- Itachi vs Sasuke (Sasuke wins)
(16, 7, 'Hidden Leaf Village', 'Completed', 7),    -- Gaara vs Naruto (Naruto wins)
(14, 21, 'Hidden Leaf Crater', 'Completed', 21),   -- Might Guy vs Pain (Pain wins)
(4, 1, 'Leaf Rooftop', 'Completed', 4),            -- Orochimaru vs Hiruzen (Orochimaru wins)
(11, 24, 'Forest of Quiet Movement', 'Completed', 11), -- Shikamaru vs Deidara (Shikamaru wins)
(19, 25, 'Turtle Island', 'Completed', 19),        -- Killer Bee vs Kisame (Bee wins)
(5, 23, 'Hidden Leaf Outskirts', 'Completed', 5);  -- Minato vs Tobi (Minato wins)

INSERT INTO standoff (ninjaId1, ninjaId2, Slocation, Sstatus, winnerNinjaId) VALUES
(15, 16, 'Prelim Arena', 'Completed', 16),        -- Rock Lee vs Gaara
(27, 26, 'Prelim Arena', 'Completed', 26),        -- Hinata vs Neji
(7, 26, 'Konoha Stadium', 'Completed', 7),         -- Naruto vs Neji
(11, 17, 'Konoha Stadium', 'Completed', 17),       -- Shikamaru vs Temari
(8, 16, 'Konoha Stadium', 'Interrupted', NULL),    -- Sasuke vs Gaara
(7, 16, 'Forest of Death', 'Completed', 7),        -- Naruto vs Gaara (Invasion)
(9, 12, 'Prelim Arena', 'Draw', NULL),             -- Sakura vs Ino
(8, 4, 'Forest of Death', 'Completed', 4),         -- Sasuke vs Orochimaru
(18, 25, 'Prelim Arena', 'Completed', 18),        -- Kankuro vs Misumi 
(17, 9, 'Prelim Arena', 'Completed', 17);         -- Temari vs Tenten 

INSERT INTO inventory (ninjaGearId, Iname, Irange, worth, Icount, rarity, ownedByNation) VALUES
(1,'Standard Kunai',5.50,0.50,5000,'Common','Leaf'),
(2,'Paper Bomb',3.00,1.20,1200,'Common','Leaf'),
(3,'Smoke Bomb',2.00,0.80,850,'Medium','Sand'),
(4,'Shuriken',7.50,0.30,8000,'Common','Cloud'),
(5,'Giant Fan',9.99,5.50,15,'Rare','Sand'),
(6,'Samehada Scale',1.50,9.00,1,'Legendary','Mist'),
(7,'Hidan Blade',1.00,2.50,300,'Rare','Stone'),
(8,'Poison Senbon',6.00,1.50,2000,'Rare','Sand'),
(9,'Flash Bomb',4.00,1.10,600,'Common','Cloud'),
(10,'Chakra Blade',2.00,8.50,50,'Medium','Leaf');


----------------------____FUNCTIONALITIES___---------------------------------------------

--SOME INSERT STATEMENT FUNCTIONALITIES
--1
--Adding a new ninja to the Bingo Book
Insert into shinobi (ninjaId,ninjaName,dateOfBirth,NinjaStatus,clan,chakraNature,jutsuName,village,ninjaRank,mentorNinjaId)
values(29,'Konohamaru Sarutobi','2007-09-24','Alive','Sarutobi','Wind','Rasengan','Leaf','C',7);

--2
--Adding a new Village
Insert into village (villageName,region,foundedYear,VillagePopulation,tailBeast,powerIndex)
values ('Sugukure','Land of Waterfalls',NULL, 3252000, '7-Tails', 7);

--3
--Adding new standoff
Insert into standoff (ninjaId1, ninjaId2, Slocation, Sstatus, winnerNinjaId)
values (10, 4, 'Leaf', 'Completed', 4);

--4
--Adding new clan 
INSERT INTO clan (clanName, originVillage, specialAbilities, clanSymbol, clanSize) VALUES
('Uchihaa','Leaf','Sharingan','Fan',150);

--5
--Adding new Ninja Gear
INSERT INTO inventory (ninjaGearId, Iname, Irange, worth, Icount, rarity, ownedByNation) VALUES
(111,'Zabuza Executioner Blade',2.50,8.50,1,'Legendary',NULL);

--6
--Adding new Jutsu
INSERT INTO jutsu (jutsuName, jutsuType, coolDownTime, powerLevel,JutsuStatus,chakraConsumption,rankRequired,elementalNature) VALUES 
('Gentle Fisst','Taijutsu',3.00,7.5,'Clan Technique','Medium','B','None');

--7
--Adding new Rogue NinjaGang
INSERT INTO rogueAssociation (ra_name, memberCount, leader, formationDate, activityLevel, originNationName, objective) VALUES
('Akatssuki',10,21,'2005-01-01','High','Rain','World Peace via Pain');

--8
--Adding new log of chunin competition
INSERT INTO chuninCompetition (ChuninYear, winnerNinjaId, runnersUpNinjaId, venueNation, participantCount, MainSponsorClan, totalMatches, duration)VALUES
(2001, 11, 17, 'Leaf', 30, 'Nara', '15', 7)

--SOME UPDATE STATEMETNS FUNCTIONALITY

--9
--Marking Death of a Ninja
Update shinobi 
set NinjaStatus = 'Deseased'
where ninjaId = 26;

--10
--Assign a Mentor to existing ninja
Update shinobi 
set mentorNinjaId = 14
where ninjaId = 17;

--11
--update a jutsu with Cool Down Time equal to maximum cooldown time 
update jutsu
set coolDownTime = 4.0
where coolDownTime =
					(
						select max(coolDownTime)
						from jutsu
					);

--SOME RETRIEVAL STATEMETNS FUNCTIONALITY

--12
--Retrieve shinobi count belonging to each village founded before 2000 
select v.villageName,count(*) as Shinobi_count
from village v
join shinobi s
on v.villageName = s.village 
and v.foundedYear <= 2000
group by v.villageName;

--13
--Retreive shinobis 
select * from village

--14. Update the rank of a ninja after promotion
UPDATE shinobi
SET ninjaRank = 'B'
WHERE ninjaId = 11;

--15. Change the leader of a rogue association
UPDATE rogueAssociation
SET leader = 22
WHERE ra_name = 'Taka';

--16. Delete all ninjas who have retired from the system
DELETE FROM shinobi
WHERE NinjaStatus = 'Retired';

--17. Remove a jutsu that is marked obsolete
DELETE FROM jutsu
WHERE jutsuStatus = 'Obsolete';

--18. Retrieve all ninjas belonging to a specific village
SELECT s.ninjaId, s.ninjaName, s.ninjaRank, s.chakraNature, s.clan
FROM shinobi s
WHERE s.village = 'Leaf'
ORDER BY s.ninjaRank, s.ninjaName;

--19. Find ninjas whose names start with a specific letter
SELECT ninjaId, ninjaName, village, ninjaRank
FROM shinobi
WHERE ninjaName LIKE 'S%'
ORDER BY ninjaName;

--20. Get all jutsu with power level greater than a given value
SELECT jutsuName, jutsuType, powerLevel, chakraConsumption, rankRequired
FROM jutsu
WHERE powerLevel > 8.0
ORDER BY powerLevel DESC;

--21. List villages with population above a threshold
SELECT villageName, region, VillagePopulation, powerIndex
FROM village
WHERE VillagePopulation > 500000
ORDER BY VillagePopulation DESC;

--22. Find all ninjas of a specific rank
SELECT ninjaId, ninjaName, village, clan, chakraNature
FROM shinobi
WHERE ninjaRank = 'S'
ORDER BY ninjaName;

--23. Count total number of ninjas in each village
SELECT v.villageName, COUNT(s.ninjaId) AS NinjaCount
FROM village v
LEFT JOIN shinobi s ON v.villageName = s.village
GROUP BY v.villageName
ORDER BY NinjaCount DESC;

--24. Find ninja ranks with average chakra consumption above a threshold
SELECT
	ninjaRank,
	COUNT(*) AS NinjaCount,
	AVG(CASE j.chakraConsumption
               WHEN 'Low'     THEN 1
               WHEN 'Medium'  THEN 2
               WHEN 'High'    THEN 3
               WHEN 'Extreme' THEN 4
               ELSE 0
		END) AS AvgChakraWeight
FROM shinobi s
LEFT JOIN jutsu j ON s.jutsuName = j.jutsuName
GROUP BY ninjaRank
HAVING AVG	(CASE j.chakraConsumption
               WHEN 'Low'     THEN 1
               WHEN 'Medium'  THEN 2
               WHEN 'High'    THEN 3
               WHEN 'Extreme' THEN 4
               ELSE 0
			END) > 2
ORDER BY AvgChakraWeight DESC;

--25. Retrieve ninja names along with their village details
SELECT s.ninjaId, s.ninjaName, s.ninjaRank,
       v.villageName, v.region, v.powerIndex
FROM shinobi s
INNER JOIN village v ON s.village = v.villageName;

--26. List all jutsu along with the ninja who created them
SELECT j.jutsuName, j.jutsuType, j.powerLevel,
       s.ninjaName AS CreatedBy, cb.creationDate
FROM jutsu j
INNER JOIN created_by cb ON j.jutsuName = cb.JutsuName
INNER JOIN shinobi s     ON cb.NinjaID  = s.ninjaId;

--27. Display missions along with the squad assigned to them
SELECT m.missionId, m.missionObjective, m.missionRank, m.missionStatus, m.revenue,
       g.teamNo, g.SquadRank, g.missionAccomplished
FROM ninjaMission m
INNER JOIN geninSquad g ON m.teamAssigned = g.teamNo;

--28. List all ninjas and their mentors, including those without mentors
SELECT s.ninjaId, s.ninjaName, s.ninjaRank,
       m.ninjaName AS MentorName, m.ninjaRank AS MentorRank
FROM shinobi s
LEFT JOIN shinobi m ON s.mentorNinjaId = m.ninjaId
ORDER BY s.ninjaName;

--29. Find ninjas who are both clan members and mission participants
SELECT DISTINCT s.ninjaId, s.ninjaName, s.clan, s.village
FROM shinobi s
INNER JOIN geninSquad g ON (s.ninjaId = g.teamMember1
                         OR s.ninjaId = g.teamMember2
                         OR s.ninjaId = g.teamMember3)
INNER JOIN ninjaMission m ON g.teamNo = m.teamAssigned
WHERE s.clan IS NOT NULL;

--30. Get ninjas who have never participated in any mission
SELECT s.ninjaId, s.ninjaName, s.village, s.ninjaRank
FROM shinobi s
WHERE s.ninjaId NOT IN (
    SELECT DISTINCT g.teamMember1 FROM geninSquad g INNER JOIN ninjaMission m ON g.teamNo = m.teamAssigned WHERE g.teamMember1 IS NOT NULL
    UNION
    SELECT DISTINCT g.teamMember2 FROM geninSquad g INNER JOIN ninjaMission m ON g.teamNo = m.teamAssigned WHERE g.teamMember2 IS NOT NULL
    UNION
    SELECT DISTINCT g.teamMember3 FROM geninSquad g INNER JOIN ninjaMission m ON g.teamNo = m.teamAssigned WHERE g.teamMember3 IS NOT NULL
)
ORDER BY s.ninjaName;

--31. Find the clan with the maximum number of members
SELECT TOP 1 clanName, clanSize, originVillage, specialAbilities
FROM clan
ORDER BY clanSize DESC;

--32.AVG powerlevel
SELECT AVG(powerLevel) as AVG_JUSTU
FROM jutsu;

--33.Max revenue
SELECT MAX(revenue) AS MAX_Reveneue
FROM ninjaMission;

--34.Villages sorted by power index

SELECT villagename,powerIndex 
FROM village
ORDER BY powerIndex;

--35.Sum of mission revenue
SELECT SUM(revenue) AS TOTAL_Reveneue
FROM ninjaMission;

--36. Average combat strength 
SELECT s.village AS VillageName, AVG(j.powerLevel) AS AvgNinjaStrength, COUNT(s.ninjaId) AS TotalNinjas
FROM shinobi s
JOIN jutsu j ON s.jutsuName = j.jutsuName
GROUP BY s.village
HAVING COUNT(s.ninjaId) > 1
ORDER BY AvgNinjaStrength DESC;

--37. Shinobis sorted by DOB
SELECT ninjaName,dateOfBirth 
FROM shinobi
ORDER BY dateOfBirth;

--38. list of villages along with the total number of ninjas residing in each
SELECT v.villageName,COUNT(s.ninjaId)
FROM village v
JOIN shinobi s on s.village=v.villageName
GROUP BY v.villageName
HAVING COUNT(s.ninjaId)>1

--39. Jutsu and their creators
SELECT s.NinjaID,j.jutsuName,j.jutsuType AS Jutsu_type,s.ninjaName AS Creator_name ,j.powerLevel
FROM shinobi s
JOIN created_by c ON s.ninjaId = c.NinjaID
JOIN jutsu j ON c.JutsuName=j.jutsuName;

--40.Clan and their leaders
SELECT l.NinjaId,c.clanName,s.ninjaName AS leader_name
FROM clan c
JOIN led_by l ON c.clanName=l.clanName
JOIN shinobi s on s.ninjaId=l.NinjaId;

--41.Ninjas from 2 specific villages
SELECT ninjaName,village
FROM shinobi
WHERE village = 'Leaf ' 
   OR village = 'Rain ';

--42.Villages having more ninjas than average
SELECT v.villageName,COUNT(s.ninjaId) AS NinjaCount
FROM village v
JOIN shinobi s ON v.villageName = s.village
GROUP BY v.villageName
HAVING COUNT(s.ninjaId) > (
    SELECT AVG(VillageCounts.Total)
    FROM (
        SELECT COUNT(ninjaId) AS Total
        FROM shinobi
        GROUP BY village
    ) AS VillageCounts
);

--43.Jutsus having more power than specific jutsu
SELECT jutsuName,jutsuType,powerLevel
FROM jutsu
WHERE powerLevel > ALL (
    SELECT powerLevel 
    FROM jutsu 
    WHERE jutsuType = 'Genjutsu'
);
--44.Squads with mentor names having more than 1 member under it
SELECT m.ninjaName AS MentorName, COUNT(s.ninjaId) AS Ninja_count
FROM shinobi m
JOIN shinobi s ON m.ninjaId = s.mentorNinjaId
GROUP BY m.ninjaName
HAVING COUNT(s.ninjaId) > 1;

--45.Village abandoned
SELECT villageName 
FROM village
WHERE villageName NOT IN (
    SELECT villageName 
    FROM presided_by 
    WHERE LeaderShipStatus = 'Active'
);

--46.Ninja who isn't in standoff
SELECT ninjaName 
FROM shinobi
WHERE ninjaId IN (SELECT ninjaId1 FROM standoff UNION SELECT ninjaId2 FROM standoff) -- Participated
AND ninjaId NOT IN (
    SELECT 
        CASE 
            WHEN ninjaId1 = winnerNinjaId THEN ninjaId2 
            ELSE ninjaId1 
        END
    FROM standoff
    WHERE winnerNinjaId IS NOT NULL
);

--47.Jutsu owned/used by no-one
SELECT j.jutsuName, j.jutsuType
FROM jutsu j
WHERE j.jutsuName NOT IN (
    SELECT DISTINCT s.jutsuName 
    FROM shinobi s 
    WHERE s.jutsuName IS NOT NULL
);

--48.Villages and their details
SELECT 
    v.villageName,
    (SELECT COUNT(*) FROM shinobi s WHERE s.village = v.villageName) AS NinjaCount,
    (SELECT COUNT(*) FROM ninjaMission m WHERE m.clientNation = v.villageName) AS MissionCount,
    (SELECT COUNT(*) FROM rogueAssociation ra WHERE ra.originNationName = v.villageName) AS RogueAssocCount
FROM village v;

--49.Jutsus and their details
SELECT 
    j.jutsuName,
    j.jutsuStatus,
    COALESCE(s_creator.ninjaName, 'Unknown') AS Creator,
    COUNT(s_users.ninjaId) AS NumberOfUsers
FROM jutsu j
LEFT JOIN created_by cb ON j.jutsuName = cb.JutsuName
LEFT JOIN shinobi s_creator ON cb.NinjaID = s_creator.ninjaId
LEFT JOIN shinobi s_users ON j.jutsuName = s_users.jutsuName
GROUP BY j.jutsuName, j.jutsuStatus, s_creator.ninjaName;

--50.Min cooldown time of jutsu
SELECT MIN(coolDownTime) AS Shortest_Cooldown
FROM jutsu;

SELECT TOP 5 jutsuName, coolDownTime 
FROM jutsu 
ORDER BY coolDownTime ASC;

--51.Clans having more than specific amount
SELECT clanName,clanSize,specialAbilities,originVillage
FROM clan
WHERE clanSize > 50
ORDER BY clanSize DESC;

--52.Full clan details with missing details 
SELECT c.clanName,c.specialAbilities,s.ninjaName AS LeaderName,lb.StartingDate
FROM clan c
FULL OUTER JOIN led_by lb ON c.clanName = lb.clanName
LEFT JOIN shinobi s ON lb.NinjaId = s.ninjaId;

--53.Missions sorted by revenue
SELECT missionId,missionObjective,missionRank,revenue
FROM ninjaMission
ORDER BY revenue DESC;

--54.Villages who have hosted chunin cometition and also have rogue associations originating from them
select v.* from village v
join chuninCompetition c 
on v.villageName = c.venueNation

INTERSECT

select v.* from village v
join rogueAssociation r
on v.villageName = r.originNationName

--55. Display ninjas who never won a standoff but participated in atleast one 
select n.* from shinobi n 
join standoff s 
on s.ninjaId1 = n.ninjaId
or s.ninjaId2 = n.ninjaId
where not exists 
                (
                    select 1
                    from standoff d
                    where n.ninjaId = d.winnerNinjaId
                )

--56. clans who never sponsored chunin competitions
select * from clan
except 
select c.* from clan c
join chuninCompetition cc
on c.clanName = cc.MainSponsorClan

--57. all items owned by nations and region including those owned by none
select i.*,v.region from village v
right join inventory i
on i.ownedByNation = v.villageName

--58. Find all jutsu that contain word "fist" in them
select * from jutsu 
where jutsuName like '%fist%' 

