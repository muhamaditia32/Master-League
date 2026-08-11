let career = {
    manager: "",
    league: "",
    club: "",
    date: "2026-07-01",
    season: "2026/27",
    budget: 0
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

    const league =
        document.getElementById("league-select").value;

    const clubSelect =
        document.getElementById("club-select");

    clubSelect.innerHTML =
        '<option value="">Select a club</option>';

    if (!league) {
        return;
    }

    const leagueClubs =
        clubs.filter(club => club.league === league);

    leagueClubs.forEach(club => {

        const option =
            document.createElement("option");

        option.value = club.id;
        option.textContent = club.name;

        clubSelect.appendChild(option);

    });

}


document.addEventListener("DOMContentLoaded", function () {

    const clubSelect =
        document.getElementById("club-select");

    if (!clubSelect) {
        return;
    }

    clubSelect.addEventListener("change", function () {

        const clubId = this.value;

        const club =
            clubs.find(club => club.id === clubId);

        if (!club) {
            return;
        }

        document.getElementById("club-name").textContent =
            club.name;

        document.getElementById("club-details").textContent =
            "Transfer Budget: €" +
            club.budget +
            "M  •  Reputation: " +
            club.reputation +
            "/5";

    });

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
    clubs.find(club => club.id === clubIndex);


    if (!selectedClub) {

    alert("Klub tidak ditemukan.");

    return;
}

    
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
