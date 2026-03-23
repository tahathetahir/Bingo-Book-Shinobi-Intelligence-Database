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
					)

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

