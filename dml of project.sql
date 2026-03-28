use [Bingo Book : Shinobi Intelligence Database];


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