const express = require("express");
const cors = require("cors");
const sql = require("mssql");


const app = express();
app.use(cors());
app.use(express.json());

const config={
    user: 'sa',
    password: 'Galio67@',
    server: 'localhost',
    database: 'Bingo Book : Shinobi Intelligence Database',
    options :{
        encrypt:false,
        trustServerCertificate:true
    }
};

let pool;

const startServer = async() => {
    try{

    
    pool = await sql.connect(config)
    p => pool = p; console.log("SERVER CONNECTED SUCCESFULLY");
        app.listen(5000,()=>console.log('Server running on port 5000'));
    }
    catch {(err => console.log(err));}
}

startServer();

// app.get("/sp_shinobi/:village",async(req,res) => {
//     try{
//         const village = req.params.village
//         const getData = await pool.request()
//         .input("village",sql.VarChar,village)
//         .execute("demo1");
//         res.json(getData.recordset);
//     }
//     catch (err){
//         console.log("error : ",err.message);
//         res.status(500).json({error:err.message});
//     }

// });

// app.get("/sp_shinobi/:shinobi",async(req,res) => {
//     try{
//         const village = req.params.shinobi
//         const getData = await pool.request()
//         .input("shinobi",sql.VarChar,shinobi)
//         .execute("shinobi_info");
//         res.json(getData.recordset);
//     }
//     catch (err){
//         console.log("error : ",err.message);
//         res.status(500).json({error:err.message});
//     }

// });

app.get("/shinobi",async(req,res) =>{
    try {
    const getData = await pool.request().query("select * from shinobi");
    res.json(getData.recordset);
    }
    catch (err){
        console.log("ERROR:", err.message); 
        res.status(500).json({ error: err.message }); 
    }
});

app.get("/village", async (req, res) => {
    try {
        const getData = await pool.request().query("select * from village");
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/nf", async (req, res) => {
    try {
        const getData = await pool.request().query(`SELECT s.ninjaId, s.ninjaName, s.village, s.ninjaRank
FROM shinobi s
WHERE s.ninjaId NOT IN (
    SELECT DISTINCT g.teamMember1 FROM geninSquad g INNER JOIN ninjaMission m ON g.teamNo = m.teamAssigned WHERE g.teamMember1 IS NOT NULL
    UNION
    SELECT DISTINCT g.teamMember2 FROM geninSquad g INNER JOIN ninjaMission m ON g.teamNo = m.teamAssigned WHERE g.teamMember2 IS NOT NULL
    UNION
    SELECT DISTINCT g.teamMember3 FROM geninSquad g INNER JOIN ninjaMission m ON g.teamNo = m.teamAssigned WHERE g.teamMember3 IS NOT NULL
)
ORDER BY s.ninjaName;`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/chakra1", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT
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
ORDER BY AvgChakraWeight DESC`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/pp", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT v.villageName,COUNT(s.ninjaId)
FROM village v
JOIN shinobi s on s.village=v.villageName
GROUP BY v.villageName
HAVING COUNT(s.ninjaId)>1`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});




app.get("/op", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT v.villageName,COUNT(s.ninjaId) AS NinjaCount
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
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});



app.get("/op", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `select v.* from village v
join chuninCompetition c 
on v.villageName = c.venueNation

INTERSECT

select v.* from village v
join rogueAssociation r
on v.villageName = r.originNationName
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});


app.get("/ln", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `select n.* from shinobi n 
join standoff s 
on s.ninjaId1 = n.ninjaId
or s.ninjaId2 = n.ninjaId
where not exists 
                (
                    select 1
                    from standoff d
                    where n.ninjaId = d.winnerNinjaId
                )
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/vs", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT s.village AS VillageName, AVG(j.powerLevel) AS AvgNinjaStrength, COUNT(s.ninjaId) AS TotalNinjas
FROM shinobi s
JOIN jutsu j ON s.jutsuName = j.jutsuName
GROUP BY s.village
HAVING COUNT(s.ninjaId) > 1
ORDER BY AvgNinjaStrength DESC
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/nc", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT v.villageName,COUNT(s.ninjaId)
FROM village v
JOIN shinobi s on s.village=v.villageName
GROUP BY v.villageName
HAVING COUNT(s.ninjaId)>1
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/jc", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT s.NinjaID,j.jutsuName,j.jutsuType AS Jutsu_type,s.ninjaName AS Creator_name ,j.powerLevel
FROM shinobi s
JOIN created_by c ON s.ninjaId = c.NinjaID
JOIN jutsu j ON c.JutsuName=j.jutsuName
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});


app.get("/oj", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT jutsuName,jutsuType,powerLevel
FROM jutsu
WHERE powerLevel > ALL (
    SELECT powerLevel 
    FROM jutsu 
    WHERE jutsuType = 'Genjutsu'
)
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});


app.get("/en", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT ninjaName 
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
)
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/sv", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `select v.* from village v
join chuninCompetition c 
on v.villageName = c.venueNation

INTERSECT

select v.* from village v
join rogueAssociation r
on v.villageName = r.originNationName
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/ms", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT m.missionId, m.missionObjective, m.missionRank, m.missionStatus, m.revenue,
       g.teamNo, g.SquadRank, g.missionAccomplished
FROM ninjaMission m
INNER JOIN geninSquad g ON m.teamAssigned = g.teamNo

`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/sq", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `SELECT m.ninjaName AS MentorName, COUNT(s.ninjaId) AS Ninja_count
FROM shinobi m
JOIN shinobi s ON m.ninjaId = s.mentorNinjaId
GROUP BY m.ninjaName
HAVING COUNT(s.ninjaId) > 1

`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/rv", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `
    select * from View_Mission_Revenue_Stats 
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/st", async (req, res) => {
    try {
        const getData = await pool.request().query(
    `select * from View_Standoff_Results
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

/* =========================== META FUNCTIONALITIES ===========================*/


app.post("/sl", async (req, res) => {
    try {
        const {threshold} = req.body;
        const getData = await pool.request().query(
    `
WITH StudentOutcomes AS (
    SELECT 
        mentorNinjaId,
        COUNT(ninjaId) AS TotalStudents,
        SUM(CASE WHEN ninjaRank IN ('S', 'H', 'K') THEN 1 ELSE 0 END) AS SRankStudents,
        SUM(CASE WHEN NinjaStatus IN ('Rogue', 'Deceased') THEN 1 ELSE 0 END) AS LostStudents
    FROM shinobi
    WHERE mentorNinjaId IS NOT NULL
    GROUP BY mentorNinjaId
)
SELECT 
    m.ninjaName AS MentorName,
    o.TotalStudents,
    (o.SRankStudents * 100.0 / o.TotalStudents) AS ElitePercentage,
    (o.LostStudents * 100.0 / o.TotalStudents) AS FailurePercentage,
    ((o.SRankStudents * 2.0) - o.LostStudents) AS PrestigeScore
FROM StudentOutcomes o
JOIN shinobi m ON o.mentorNinjaId = m.ninjaId
WHERE o.TotalStudents > ${threshold};
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});


app.post("/tp", async (req, res) => {
    try {
        console.log(req.body);
        const {id,rog} = req.body;
        const getData = await pool.request().query(
    `BEGIN TRY
    BEGIN TRANSACTION;
    
    DECLARE @TraitorId INT = ${id}; -- Sasuke Uchiha
    DECLARE @RogueOrgName VARCHAR(50) = '${rog}';

    UPDATE shinobi 
    SET village = NULL, clan = NULL, NinjaStatus = 'Rogue'
    WHERE ninjaId = @TraitorId;

    UPDATE rogueAssociation 
    SET memberCount = memberCount + 1 
    WHERE ra_name = @RogueOrgName;

    DECLARE @NewMissionId INT = (SELECT MAX(missionId) + 1 FROM ninjaMission);
    INSERT INTO ninjaMission (missionId, missionObjective, missionRank, missionType, missionStatus, clientNation)
    VALUES (@NewMissionId, 'Eliminate Defector', 'S', 'Assassination', 'Open', 'Leaf');

    select * from ninjaMission where missionId = @newMissionId 

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
END CATCH;
`);
        res.json(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post("/ks", async (req, res) => {
    try {
        const {id,village} = req.body;
        const getData = await pool.request().query(
    `BEGIN TRY
    BEGIN TRANSACTION;

    DECLARE @VillageName VARCHAR(50) = '${village}';
    DECLARE @NewKageId INT = ${id}; -- Kakashi
    DECLARE @OldKageId INT = (SELECT ninjaId 
								FROM presided_by 
								WHERE villageName = @VillageName AND LeaderShipStatus = 'Active');

    UPDATE presided_by SET LeaderShipStatus = 'Former'
    WHERE ninjaId = @OldKageId AND villageName = @VillageName;

    INSERT INTO presided_by (villageName, ninjaId, leaderShipStartingDate, LeaderShipStatus)
    VALUES (@VillageName, @NewKageId, GETDATE(), 'Active');

    DECLARE @KagePower DECIMAL(3,2) = (SELECT j.powerLevel 
										FROM shinobi s 
										JOIN jutsu j ON s.jutsuName = j.jutsuName 
										WHERE s.ninjaId = @NewKageId);
    UPDATE village 
    SET powerIndex = CASE WHEN powerIndex + (@KagePower / 10.0) <= 9.99 THEN powerIndex + (@KagePower / 10.0) ELSE 9.99 END
    WHERE villageName = @VillageName;

    select * from village where villageName = @VillageName

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
END CATCH;
`);
        res.json(getData.recordset);
        console.log(res.json(getData.recordset))
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post("/jf", async (req, res) => {
    try {
        const {element} = req.body;
        const getData = await pool.request().query(
    `BEGIN TRY
    BEGIN TRANSACTION;
    
    DECLARE @BannedElement VARCHAR(50) = '${element}';

    --Flag Jutsu as Forbidden
    UPDATE jutsu SET JutsuStatus = 'Forbidden' 
    WHERE elementalNature = @BannedElement AND JutsuStatus != 'Forbidden';

    UPDATE shinobi SET NinjaStatus = 'Under Surveillance'
    WHERE jutsuName IN (
        SELECT jutsuName FROM jutsu WHERE elementalNature = @BannedElement
    ) 
	AND NinjaStatus = 'Alive';

    select * from jutsu where elementalNature = '${element}'

    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
END CATCH;
`);
        res.json(getData.recordset);
        console.log(res.json(getData.recordset))
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post("/bp", async (req, res) => {
    try {
        const getData = await pool.request().query(
	`
	--Clan Bloodline Purity Report
	SELECT 
	    c.clanName,
	    c.specialAbilities AS ClanSpecialty,
	    s.ninjaName AS ClanMember,
	    j.jutsuName,
	    j.elementalNature AS ActualNature,
	    CASE 
		WHEN c.clanName = 'Hyuga' AND j.elementalNature != 'None' THEN 'Divergent'
		WHEN c.clanName = 'Uchiha' AND j.elementalNature != 'Fire' THEN 'Divergent'
		ELSE 'Pure'
	    END AS BloodlineStatus
	FROM clan c
	JOIN shinobi s ON c.clanName = s.clan
	JOIN jutsu j ON s.jutsuName = j.jutsuName
	WHERE s.NinjaStatus = 'Alive';
	GO
	`
	);
        res.json(getData.recordset);
        console.log(res.json(getData.recordset))
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post("/pc", async (req, res) => {
    try {
        const {id,element} = req.body;
        const getData = await pool.request().query(
	`
	--The "Perfect Counter" Matchmaker

	DECLARE @TargetId INT = '${id}';
	DECLARE @TargetElement VARCHAR(50) = (SELECT chakraNature FROM shinobi WHERE ninjaId = @TargetId);

	SELECT 
	    ally.ninjaName, 
	    ally.ninjaRank, 
	    ally.chakraNature,
	    ally.jutsuName
	FROM shinobi ally
	WHERE ally.NinjaStatus = 'Alive' 
	  AND ally.ninjaId != @TargetId
	  AND ally.chakraNature = CASE 
	      WHEN @TargetElement = 'Fire' THEN 'Water'
	      WHEN @TargetElement = 'Water' THEN 'Earth'
	      WHEN @TargetElement = 'Earth' THEN 'Lightning'
	      WHEN @TargetElement = 'Lightning' THEN 'Wind'
	      WHEN @TargetElement = 'Wind' THEN 'Fire'
	  END;
	GO
	`);
        res.json(getData.recordset);
        console.log(res.json(getData.recordset))
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/sf", async (req, res) => {
    try {
        const getData = await pool.request().query(`
            SELECT 
                g.teamNo,
                m_leader.ninjaName AS MentorName,
                ISNULL(SUM(nm.revenue), 0) AS TotalMissionRevenue,
                COUNT(nm.missionId) AS MissionsUndertaken,
                CASE 
                    WHEN COUNT(nm.missionId) > 0 THEN ISNULL(SUM(nm.revenue), 0) / COUNT(nm.missionId) 
                    ELSE 0 
                END AS AverageRevenuePerMission
            FROM geninSquad g
            JOIN shinobi m_leader ON g.teamMentor = m_leader.ninjaId
            LEFT JOIN ninjaMission nm ON g.teamNo = nm.teamAssigned
            GROUP BY g.teamNo, m_leader.ninjaName
            ORDER BY TotalMissionRevenue DESC;
        `);
        res.json(getData.recordset);
        console.log(res.json(getData.recordset))
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/vrws", async (req, res) => {
    try {
        const getData = await pool.request().query(`
            --Village Resource War Simulator
            SELECT 
                v.villageName,
                v.VillagePopulation,
                (v.VillagePopulation * 1.5) AS RequiredSustenanceWorth, 
                ISNULL(SUM(i.worth * i.Icount), 0) AS CurrentInventoryWorth,
                CASE 
                WHEN ISNULL(SUM(i.worth * i.Icount), 0) < (v.VillagePopulation * 1.5) THEN 'Eligible for War (Desperation)'
                ELSE 'Stable'
                END AS WarStatus,
                (SELECT ISNULL(SUM(inv.Icount), 0) FROM inventory inv 
                 WHERE inv.rarity = 'Legendary' AND inv.ownedByNation != v.villageName) AS NeighborLegendaryItemCount
            FROM village v
            LEFT JOIN inventory i ON v.villageName = i.ownedByNation
            GROUP BY v.villageName, v.VillagePopulation;
        `);
        res.json(getData.recordset);
        console.log(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/cecd", async (req, res) => {
    try {
        const getData = await pool.request().query(`
            --Chunin Exam Corruption Detector
            SELECT 
                c.ChuninYear, 
                c.MainSponsorClan, 
                w.ninjaName AS WinnerName, 
                w.clan AS WinnerClan,
                CASE 
                WHEN w.clan = c.MainSponsorClan THEN 'High Probability of Corruption'
                ELSE 'Clean Competition'
                END AS CorruptionFlag
            FROM chuninCompetition c
            JOIN shinobi w ON c.winnerNinjaId = w.ninjaId;
        `);
        res.json(getData.recordset);
        console.log(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/mppa", async (req, res) => {
    try {
        const getData = await pool.request().query(`
            WITH PupilAverages AS (
                SELECT s.mentorNinjaId, AVG(j.powerLevel) AS AvgPupilPower
                FROM shinobi s
                JOIN jutsu j ON s.jutsuName = j.jutsuName
                WHERE s.mentorNinjaId IS NOT NULL
                GROUP BY s.mentorNinjaId
            )
            SELECT 
                m.ninjaName AS MentorName,
                jm.powerLevel AS MentorPower,
                p.AvgPupilPower,
                CASE 
                    WHEN p.AvgPupilPower > jm.powerLevel THEN 'New Generation Surpassed Mentor'
                    ELSE 'Mentor Remains Superior'
                END AS GenerationStatus
            FROM PupilAverages p
            JOIN shinobi m ON p.mentorNinjaId = m.ninjaId
            JOIN jutsu jm ON m.jutsuName = jm.jutsuName;
        `);
        res.json(getData.recordset);
        console.log(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post("/lsdp", async (req, res) => {
    try {
        const { villageName, population } = req.body;
        const getData = await pool.request().query(`
            BEGIN TRY
                BEGIN TRANSACTION;
                
                DECLARE @CriticalVillage VARCHAR(50) = '${villageName}';
                DECLARE @PopulationThreshold INT = ${population};

                IF (SELECT VillagePopulation FROM village WHERE villageName = @CriticalVillage) < @PopulationThreshold
                BEGIN
                    -- Assign Genin and Chunin to defensive status
                    UPDATE shinobi 
                    SET NinjaStatus = 'Village Defense'
                    WHERE village = @CriticalVillage 
                      AND NinjaStatus = 'Alive'
                      AND ninjaRank IN ('G', 'C');
                END
                
                COMMIT TRANSACTION;
                
                SELECT ninjaName, clan, ninjaRank, NinjaStatus, village 
                FROM shinobi 
                WHERE village = @CriticalVillage AND NinjaStatus = 'Village Defense';
                
            END TRY
            BEGIN CATCH
                IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
                THROW;
            END CATCH
        `);
        res.json(getData.recordset);
        console.log(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/gpir", async (req, res) => {
    try {
        const getData = await pool.request().query(`
            UPDATE village
            SET powerIndex = (
                SELECT 
                    CASE 
                        WHEN AVG(j.powerLevel) IS NULL THEN 5.0
                        ELSE (AVG(j.powerLevel) * 0.7) + 
                             (CASE WHEN village.tailBeast IS NOT NULL THEN 1.5 ELSE 0 END) +
                             (village.VillagePopulation / 10000.0)
                    END
                FROM shinobi s
                LEFT JOIN jutsu j ON s.jutsuName = j.jutsuName
                WHERE s.village = village.villageName AND s.NinjaStatus = 'Alive'
            );
            
            -- Added SELECT to return the new rankings to React
            SELECT villageName, powerIndex, VillagePopulation, tailBeast 
            FROM village 
            ORDER BY powerIndex DESC;
        `);
        res.json(getData.recordset);
        console.log(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/cia", async (req, res) => {
    try {
        const getData = await pool.request().query(`
            WITH SquadWins AS (
                SELECT 
                    g.teamNo,
                    s1.ninjaName AS Member1, (SELECT COUNT(*) FROM standoff WHERE winnerNinjaId = g.teamMember1) AS M1Wins,
                    s2.ninjaName AS Member2, (SELECT COUNT(*) FROM standoff WHERE winnerNinjaId = g.teamMember2) AS M2Wins,
                    s3.ninjaName AS Member3, (SELECT COUNT(*) FROM standoff WHERE winnerNinjaId = g.teamMember3) AS M3Wins
                FROM geninSquad g
                JOIN shinobi s1 ON g.teamMember1 = s1.ninjaId
                JOIN shinobi s2 ON g.teamMember2 = s2.ninjaId
                JOIN shinobi s3 ON g.teamMember3 = s3.ninjaId
            )
            SELECT 
                teamNo,
                Member1, M1Wins,
                Member2, M2Wins,
                Member3, M3Wins,
                CASE 
                    WHEN M1Wins > (M2Wins + M3Wins) * 2 AND M1Wins > 0 THEN Member1 + ' is carrying the squad.'
                    WHEN M2Wins > (M1Wins + M3Wins) * 2 AND M2Wins > 0 THEN Member2 + ' is carrying the squad.'
                    WHEN M3Wins > (M1Wins + M2Wins) * 2 AND M3Wins > 0 THEN Member3 + ' is carrying the squad.'
                    ELSE 'Balanced Squad'
                END AS CarryStatus
            FROM SquadWins;
        `);
        res.json(getData.recordset);
        console.log(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/hrr", async (req, res) => {
    try {
        const getData = await pool.request().query(`
            SELECT s1.ninjaName AS Ninja1, s1.village AS Village1,
                   s2.ninjaName AS Ninja2, s2.village AS Village2,
                   COUNT(st.Slocation) AS TotalEncounters,
                   SUM(CASE WHEN st.winnerNinjaId = s1.ninjaId THEN 1 ELSE 0 END) AS Ninja1Wins,
                   SUM(CASE WHEN st.winnerNinjaId = s2.ninjaId THEN 1 ELSE 0 END) AS Ninja2Wins
            FROM standoff st
            JOIN shinobi s1 ON st.ninjaId1 = s1.ninjaId
            JOIN shinobi s2 ON st.ninjaId2 = s2.ninjaId
            WHERE s1.village != s2.village AND st.Sstatus = 'Completed'
            GROUP BY s1.ninjaName, s1.village, s2.ninjaName, s2.village
            HAVING COUNT(st.Slocation) > 0;
        `);
        res.json(getData.recordset);
        console.log(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.get("/ibma", async (req, res) => {
    try {
        const getData = await pool.request().query(`
            SELECT i.Iname, i.rarity, i.ownedByNation, i.Icount, i.worth,
                CASE 
                    WHEN i.Icount < 100 AND i.rarity = 'Common' THEN 'High Risk of Black Market Leakage'
                    WHEN i.Icount < 5 AND i.rarity IN ('Rare', 'Legendary') THEN 'Critical Shortage - Investigate'
                    ELSE 'Secure'
                END AS SecurityAuditStatus
            FROM inventory i
            ORDER BY i.Icount ASC;
        `);
        res.json(getData.recordset);
        console.log(getData.recordset);
    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});
