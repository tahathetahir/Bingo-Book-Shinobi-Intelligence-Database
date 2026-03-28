----------------------------------------------------------------------------------------------------------------------------------- TAHA

--SOME INSERT STATEMENT FUNCTIONALITIES

--1
--Adding a new ninja to the Bingo Book
Insert into shinobi (ninjaId,ninjaName,dateOfBirth,NinjaStatus,clan,chakraNature,jutsuName,village,ninjaRank,mentorNinjaId)
values(28,'Konohamaru Sarutobi','2007-09-24','Alive','Sarutobi','Wind','Rasengan','Leaf','C',7);

--2
--Adding a new Village
Insert into village (villageName,region,foundedYear,VillagePopulation,tailBeast,powerIndex)
values ('Tagikakure','Land of Waterfalls',NULL, 3252000, '7-Tails', 7);

--3
--Adding new standoff
Insert into standoff (ninjaId1, ninjaId2, Slocation, Sstatus, winnerNinjaId)
values (1, 4, 'Leaf', 'Completed', 4);

--4
--Adding new clan 
INSERT INTO clan (clanName, originVillage, specialAbilities, clanSymbol, clanSize) VALUES
('Uchiha','Leaf','Sharingan','Fan',150);

--5
--Adding new Ninja Gear
INSERT INTO inventory (ninjaGearId, Iname, Irange, worth, Icount, rarity, ownedByNation) VALUES
(11,'Zabuza Executioner Blade',2.50,8.50,1,'Legendary',NULL);

--6
--Adding new Jutsu
INSERT INTO jutsu (jutsuName, jutsuType, coolDownTime, powerLevel,JutsuStatus,chakraConsumption,rankRequired,elementalNature) VALUES 
('Gentle Fist','Taijutsu',3.00,7.5,'Clan Technique','Medium','B','None');

--7
--Adding new Rogue NinjaGang
INSERT INTO rogueAssociation (ra_name, memberCount, leader, formationDate, activityLevel, originNationName, objective) VALUES
('Akatsuki',10,21,'2005-01-01','High','Rain','World Peace via Pain');

--8
--Adding new log of chunin competition
INSERT INTO chuninCompetition (ChuninYear, winnerNinjaId, runnersUpNinjaId, venueNation, participantCount, MainSponsorClan, totalMatches, duration)VALUES
(2002, 11, 17, 'Leaf', 30, 'Nara', '15', 7)

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

----------------------------------------------------------------------------------------------------------------------------------- RAFAY


-- 1. Update the rank of a ninja after promotion
UPDATE shinobi
SET ninjaRank = 'B'
WHERE ninjaId = 11;

-- 2. Change the leader of a rogue association
UPDATE rogueAssociation
SET leader = 22
WHERE ra_name = 'Taka';

-- 3. Delete all ninjas who have retired from the system
DELETE FROM shinobi
WHERE NinjaStatus = 'Retired';

-- 4. Remove a jutsu that is marked obsolete
DELETE FROM jutsu
WHERE jutsuStatus = 'Obsolete';

-- 5. Retrieve all ninjas belonging to a specific village
SELECT s.ninjaId, s.ninjaName, s.ninjaRank, s.chakraNature, s.clan
FROM shinobi s
WHERE s.village = 'Leaf'
ORDER BY s.ninjaRank, s.ninjaName;

-- 6. Find ninjas whose names start with a specific letter
SELECT ninjaId, ninjaName, village, ninjaRank
FROM shinobi
WHERE ninjaName LIKE 'S%'
ORDER BY ninjaName;

-- 7. Get all jutsu with power level greater than a given value
SELECT jutsuName, jutsuType, powerLevel, chakraConsumption, rankRequired
FROM jutsu
WHERE powerLevel > 8.0
ORDER BY powerLevel DESC;

-- 8. List villages with population above a threshold
SELECT villageName, region, VillagePopulation, powerIndex
FROM village
WHERE VillagePopulation > 500000
ORDER BY VillagePopulation DESC;

-- 9. Find all ninjas of a specific rank
SELECT ninjaId, ninjaName, village, clan, chakraNature
FROM shinobi
WHERE ninjaRank = 'S'
ORDER BY ninjaName;

-- 10. Count total number of ninjas in each village
SELECT v.villageName, COUNT(s.ninjaId) AS NinjaCount
FROM village v
LEFT JOIN shinobi s ON v.villageName = s.village
GROUP BY v.villageName
ORDER BY NinjaCount DESC;

-- 11. Find ninja ranks with average chakra consumption above a threshold
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

-- 12. Retrieve ninja names along with their village details
SELECT s.ninjaId, s.ninjaName, s.ninjaRank,
       v.villageName, v.region, v.powerIndex
FROM shinobi s
INNER JOIN village v ON s.village = v.villageName;

-- 13. List all jutsu along with the ninja who created them
SELECT j.jutsuName, j.jutsuType, j.powerLevel,
       s.ninjaName AS CreatedBy, cb.creationDate
FROM jutsu j
INNER JOIN created_by cb ON j.jutsuName = cb.JutsuName
INNER JOIN shinobi s     ON cb.NinjaID  = s.ninjaId;

-- 14. Display missions along with the squad assigned to them
SELECT m.missionId, m.missionObjective, m.missionRank, m.missionStatus, m.revenue,
       g.teamNo, g.SquadRank, g.missionAccomplished
FROM ninjaMission m
INNER JOIN geninSquad g ON m.teamAssigned = g.teamNo;

-- 15. List all ninjas and their mentors, including those without mentors
SELECT s.ninjaId, s.ninjaName, s.ninjaRank,
       m.ninjaName AS MentorName, m.ninjaRank AS MentorRank
FROM shinobi s
LEFT JOIN shinobi m ON s.mentorNinjaId = m.ninjaId
ORDER BY s.ninjaName;

-- 16. Find ninjas who are both clan members and mission participants
SELECT DISTINCT s.ninjaId, s.ninjaName, s.clan, s.village
FROM shinobi s
INNER JOIN geninSquad g ON (s.ninjaId = g.teamMember1
                         OR s.ninjaId = g.teamMember2
                         OR s.ninjaId = g.teamMember3)
INNER JOIN ninjaMission m ON g.teamNo = m.teamAssigned
WHERE s.clan IS NOT NULL;

-- 17. Get ninjas who have never participated in any mission
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

-- 18. Find the clan with the maximum number of members
SELECT TOP 1 clanName, clanSize, originVillage, specialAbilities
FROM clan
ORDER BY clanSize DESC;
