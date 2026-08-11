const clubs = [

    // =========================
    // ENGLAND — PREMIER LEAGUE
    // =========================

    {
        id: "manchester-united",
        name: "Manchester United",
        country: "England",
        league: "england",
        stadium: "Old Trafford",
        capacity: 76212,
        reputation: 5,
        budget: 120,
        wageBudget: 350
    },

    {
        id: "liverpool",
        name: "Liverpool",
        country: "England",
        league: "england",
        stadium: "Anfield",
        capacity: 61276,
        reputation: 5,
        budget: 110,
        wageBudget: 350
    },

    {
        id: "arsenal",
        name: "Arsenal",
        country: "England",
        league: "england",
        stadium: "Emirates Stadium",
        capacity: 60704,
        reputation: 5,
        budget: 105,
        wageBudget: 300
    },

    {
        id: "chelsea",
        name: "Chelsea",
        country: "England",
        league: "england",
        stadium: "Stamford Bridge",
        capacity: 40341,
        reputation: 5,
        budget: 100,
        wageBudget: 300
    },

    {
        id: "manchester-city",
        name: "Manchester City",
        country: "England",
        league: "england",
        stadium: "Etihad Stadium",
        capacity: 53400,
        reputation: 5,
        budget: 150,
        wageBudget: 400
    },

    {
        id: "tottenham",
        name: "Tottenham Hotspur",
        country: "England",
        league: "england",
        stadium: "Tottenham Hotspur Stadium",
        capacity: 62850,
        reputation: 4,
        budget: 95,
        wageBudget: 280
    },


    // =========================
    // SPAIN — LA LIGA
    // =========================

    {
        id: "real-madrid",
        name: "Real Madrid",
        country: "Spain",
        league: "spain",
        stadium: "Santiago Bernabéu",
        capacity: 81044,
        reputation: 5,
        budget: 180,
        wageBudget: 450
    },

    {
        id: "barcelona",
        name: "Barcelona",
        country: "Spain",
        league: "spain",
        stadium: "Spotify Camp Nou",
        capacity: 99354,
        reputation: 5,
        budget: 150,
        wageBudget: 400
    },

    {
        id: "atletico-madrid",
        name: "Atlético Madrid",
        country: "Spain",
        league: "spain",
        stadium: "Riyadh Air Metropolitano",
        capacity: 70460,
        reputation: 5,
        budget: 90,
        wageBudget: 280
    },

    {
        id: "athletic-bilbao",
        name: "Athletic Club",
        country: "Spain",
        league: "spain",
        stadium: "San Mamés",
        capacity: 53331,
        reputation: 4,
        budget: 55,
        wageBudget: 180
    },


    // =========================
    // ITALY — SERIE A
    // =========================

    {
        id: "inter",
        name: "Inter Milan",
        country: "Italy",
        league: "italy",
        stadium: "San Siro",
        capacity: 80018,
        reputation: 5,
        budget: 100,
        wageBudget: 280
    },

    {
        id: "juventus",
        name: "Juventus",
        country: "Italy",
        league: "italy",
        stadium: "Allianz Stadium",
        capacity: 41507,
        reputation: 5,
        budget: 95,
        wageBudget: 270
    },

    {
        id: "ac-milan",
        name: "AC Milan",
        country: "Italy",
        league: "italy",
        stadium: "San Siro",
        capacity: 80018,
        reputation: 5,
        budget: 90,
        wageBudget: 260
    },

    {
        id: "napoli",
        name: "Napoli",
        country: "Italy",
        league: "italy",
        stadium: "Stadio Diego Armando Maradona",
        capacity: 54726,
        reputation: 4,
        budget: 75,
        wageBudget: 220
    },


    // =========================
    // GERMANY — BUNDESLIGA
    // =========================

    {
        id: "bayern",
        name: "Bayern Munich",
        country: "Germany",
        league: "germany",
        stadium: "Allianz Arena",
        capacity: 75024,
        reputation: 5,
        budget: 140,
        wageBudget: 350
    },

    {
        id: "borussia-dortmund",
        name: "Borussia Dortmund",
        country: "Germany",
        league: "germany",
        stadium: "Signal Iduna Park",
        capacity: 81365,
        reputation: 5,
        budget: 85,
        wageBudget: 240
    },

    {
        id: "bayer-leverkusen",
        name: "Bayer Leverkusen",
        country: "Germany",
        league: "germany",
        stadium: "BayArena",
        capacity: 30210,
        reputation: 4,
        budget: 80,
        wageBudget: 220
    },


    // =========================
    // FRANCE — LIGUE 1
    // =========================

    {
        id: "psg",
        name: "Paris Saint-Germain",
        country: "France",
        league: "france",
        stadium: "Parc des Princes",
        capacity: 47929,
        reputation: 5,
        budget: 180,
        wageBudget: 450
    },

    {
        id: "marseille",
        name: "Olympique Marseille",
        country: "France",
        league: "france",
        stadium: "Orange Vélodrome",
        capacity: 67394,
        reputation: 4,
        budget: 70,
        wageBudget: 190
    },


    // =========================
    // SAUDI PRO LEAGUE
    // =========================

    {
        id: "al-nassr",
        name: "Al Nassr",
        country: "Saudi Arabia",
        league: "saudi",
        stadium: "Al-Awwal Park",
        capacity: 25000,
        reputation: 4,
        budget: 120,
        wageBudget: 350
    },

    {
        id: "al-hilal",
        name: "Al Hilal",
        country: "Saudi Arabia",
        league: "saudi",
        stadium: "Kingdom Arena",
        capacity: 26000,
        reputation: 5,
        budget: 130,
        wageBudget: 400
    },


    // =========================
    // MLS
    // =========================

    {
        id: "inter-miami",
        name: "Inter Miami",
        country: "United States",
        league: "usa",
        stadium: "Chase Stadium",
        capacity: 21500,
        reputation: 4,
        budget: 80,
        wageBudget: 250
    },

    {
        id: "la-galaxy",
        name: "LA Galaxy",
        country: "United States",
        league: "usa",
        stadium: "Dignity Health Sports Park",
        capacity: 27000,
        reputation: 4,
        budget: 60,
        wageBudget: 200
    },


    // =========================
    // BRAZIL
    // =========================

    {
        id: "flamengo",
        name: "Flamengo",
        country: "Brazil",
        league: "brazil",
        stadium: "Maracanã",
        capacity: 78838,
        reputation: 5,
        budget: 75,
        wageBudget: 200
    },

    {
        id: "palmeiras",
        name: "Palmeiras",
        country: "Brazil",
        league: "brazil",
        stadium: "Allianz Parque",
        capacity: 43713,
        reputation: 5,
        budget: 70,
        wageBudget: 190
    },


    // =========================
    // ARGENTINA
    // =========================

    {
        id: "river-plate",
        name: "River Plate",
        country: "Argentina",
        league: "argentina",
        stadium: "Mâs Monumental",
        capacity: 85018,
        reputation: 5,
        budget: 60,
        wageBudget: 170
    },

    {
        id: "boca-juniors",
        name: "Boca Juniors",
        country: "Argentina",
        league: "argentina",
        stadium: "La Bombonera",
        capacity: 54000,
        reputation: 5,
        budget: 60,
        wageBudget: 170
    },


    // =========================
    // JAPAN
    // =========================

    {
        id: "vissel-kobe",
        name: "Vissel Kobe",
        country: "Japan",
        league: "japan",
        stadium: "Noevir Stadium Kobe",
        capacity: 30132,
        reputation: 3,
        budget: 45,
        wageBudget: 120
    },

    {
        id: "kashima-antlers",
        name: "Kashima Antlers",
        country: "Japan",
        league: "japan",
        stadium: "Kashima Soccer Stadium",
        capacity: 40728,
        reputation: 3,
        budget: 40,
        wageBudget: 110
    }

];
