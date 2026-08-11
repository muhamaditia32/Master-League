let career = {
    manager: "",
    league: "",
    club: "",
    date: "2026-07-01",
    season: "2026/27",
    budget: 0
};


const clubs = {

    england: [
        {
            name: "Manchester United",
            budget: 120,
            reputation: 5
        },
        {
            name: "Liverpool",
            budget: 110,
            reputation: 5
        },
        {
            name: "Arsenal",
            budget: 105,
            reputation: 5
        },
        {
            name: "Chelsea",
            budget: 100,
            reputation: 5
        }
    ],

    spain: [
        {
            name: "Real Madrid",
            budget: 180,
            reputation: 5
        },
        {
            name: "Barcelona",
            budget: 150,
            reputation: 5
        },
        {
            name: "Atlético Madrid",
            budget: 90,
            reputation: 5
        }
    ],

    italy: [
        {
            name: "Inter Milan",
            budget: 100,
            reputation: 5
        },
        {
            name: "Juventus",
            budget: 95,
            reputation: 5
        },
        {
            name: "AC Milan",
            budget: 90,
            reputation: 5
        }
    ],

    germany: [
        {
            name: "Bayern Munich",
            budget: 140,
            reputation: 5
        },
        {
            name: "Borussia Dortmund",
            budget: 85,
            reputation: 4
        }
    ],

    france: [
        {
            name: "Paris Saint-Germain",
            budget: 180,
            reputation: 5
        },
        {
            name: "Olympique Marseille",
            budget: 70,
            reputation: 4
        }
    ],

    saudi: [
        {
            name: "Al Nassr",
            budget: 120,
            reputation: 4
        },
        {
            name: "Al Hilal",
            budget: 130,
            reputation: 5
        }
    ],

    usa: [
        {
            name: "Inter Miami",
            budget: 80,
            reputation: 4
        },
        {
            name: "LA Galaxy",
            budget: 60,
            reputation: 4
        }
    ],

    brazil: [
        {
            name: "Flamengo",
            budget: 75,
            reputation: 4
        },
        {
            name: "Palmeiras",
            budget: 70,
            reputation: 4
        }
    ],

    argentina: [
        {
            name: "River Plate",
            budget: 60,
            reputation: 4
        },
        {
            name: "Boca Juniors",
            budget: 60,
            reputation: 4
        }
    ],

    japan: [
        {
            name: "Vissel Kobe",
            budget: 45,
            reputation: 3
        },
        {
            name: "Kashima Antlers",
            budget: 40,
            reputation: 3
        }
    ]

};


function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");
    }
}


function newCareer() {

    showScreen("career-screen");

}


function showMainMenu() {

    showScreen("main-menu");

}


function updateClubs() {

    const league = document.getElementById("league-select").value;

    const clubSelect = document.getElementById("club-select");

    clubSelect.innerHTML =
        '<option value="">Select a club</option>';

    if (!league || !clubs[league]) {
        return;
    }

    clubs[league].forEach((club, index) => {

        const option = document.createElement("option");

        option.value = index;

        option.textContent = club.name;

        clubSelect.appendChild(option);

    });

}


document.getElementById("club-select").addEventListener("change", function () {

    const league = document.getElementById("league-select").value;

    const clubIndex = this.value;

    if (
        league &&
        clubIndex !== "" &&
        clubs[league] &&
        clubs[league][clubIndex]
    ) {

        const club = clubs[league][clubIndex];

        document.getElementById("club-name").textContent =
            club.name;

        document.getElementById("club-details").textContent =
            "Transfer Budget: €" +
            club.budget +
            "M  •  Reputation: " +
            club.reputation +
            "/5";

    }

});


function startCareer() {

    const managerName =
        document.getElementById("manager-name").value.trim();

    const league =
        document.getElementById("league-select").value;

    const clubIndex =
        document.getElementById("club-select").value;


    if (!managerName) {

        alert("Masukkan nama manager terlebih dahulu.");

        return;
    }


    if (!league || clubIndex === "") {

        alert("Pilih liga dan klub terlebih dahulu.");

        return;
    }


    const selectedClub =
        clubs[league][clubIndex];


    career = {

        manager: managerName,

        league: league,

        club: selectedClub.name,

        date: "2026-07-01",

        season: "2026/27",

        budget: selectedClub.budget

    };


    updateDashboard();

    showScreen("dashboard-screen");

}


function updateDashboard() {

    document.getElementById("dashboard-manager").textContent =
        career.manager;

    document.getElementById("dashboard-club").textContent =
        career.club;

    document.getElementById("dashboard-budget").textContent =
        "€" + career.budget + "M";

    document.getElementById("game-date").textContent =
        formatDate(career.date);

}


function formatDate(dateString) {

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString("en-GB", {

        day: "numeric",

        month: "long",

        year: "numeric"

    });

}


function continueGame() {

    const savedCareer =
        localStorage.getItem("masterLeagueSave");

    if (!savedCareer) {

        alert("Belum ada career yang tersimpan.");

        return;
    }


    career = JSON.parse(savedCareer);

    updateDashboard();

    showScreen("dashboard-screen");

}


function saveGame() {

    localStorage.setItem(
        "masterLeagueSave",
        JSON.stringify(career)
    );

    alert("Career berhasil disimpan! 💾");

}


function loadGame() {

    const savedCareer =
        localStorage.getItem("masterLeagueSave");

    if (!savedCareer) {

        alert("Belum ada save game.");

        return;
    }


    career = JSON.parse(savedCareer);

    updateDashboard();

    showScreen("dashboard-screen");

}


function settings() {

    alert("Settings akan kita buat nanti.");

}

console.log("DATABASE LOADED");

console.log("Leagues:", leagues.length);
console.log("Clubs:", clubs.length);
console.log("Players:", players.length);
