let crickerTeams = [{
        name: "Afghanistan",
        odiRanking: " ODI Ranking 10th",
        t20Ranking: "T20 Ranking 8th",
        imagpath: "img/AFG.png",
    },
    {
        name: "Australia",
        odiRanking: "ODI Ranking 6th",
        t20Ranking: "T20 Ranking 3th",
        imagpath: "img/AUS.png",
    },

    {
        name: "Bangladesh",
        odiRanking: "ODI Ranking 7th",
        t20Ranking: "T20 Ranking 10th",
        imagpath: "img/BAN.png",
    },
    {
        name: "England",
        odiRanking: "ODI Ranking 1st ",
        t20Ranking: "T20 Ranking 4th",
        imagpath: "img/ENG.png",
    },

    {
        name: "India",
        odiRanking: "ODI Ranking 2nd ",
        t20Ranking: "T20 Ranking 2nd",
        imagpath: "img/IND.png",
    }, {
        name: "Ireland",
        odiRanking: "ODI Ranking 17th ",
        t20Ranking: "T20 Ranking 12th",
        imagpath: "img/IRE.png",
    }, {
        name: "New Zealand",
        odiRanking: "ODI Ranking 3rd ",
        t20Ranking: "T20 Ranking 5th",
        imagpath: "img/NZ.png",
    }, {
        name: "Pakistan",
        odiRanking: "ODI Ranking 5th ",
        t20Ranking: "T20 Ranking 1st",
        imagpath: "img/PAK.png",
    }, {
        name: "South Africa",
        odiRanking: "ODI Ranking 4th ",
        t20Ranking: "T20 Ranking 6th",
        imagpath: "img/SA.png",
    }, {
        name: "Sri Lanka",
        odiRanking: "ODI Ranking 8th ",
        t20Ranking: "T20 Ranking 9th",
        imagpath: "img/SL.png",
    }, {
        name: "West Indies",
        odiRanking: "ODI Ranking 9th ",
        t20Ranking: "T20 Ranking 7th",
        imagpath: "img/WI.png",
    }, {
        name: "Zimbabwe",
        odiRanking: "ODI Ranking 11th",
        t20Ranking: "T20 Ranking 12th",
        imagpath: "img/ZIM.png",
    },

]

// function init() {
//     let bodyEi = document.querySelector("body");
//     for (let i = 0; i < crickerTeams.length; i++) {
//         bodyEi.innerHTML += "<div class='celebriyt-img' style= 'background-image: url(" + crickerTeams[i].imagpath + ")'<p></p></div>"
//     }
// }



function init() {
    let bodyEi = document.querySelector(".celeb1");
    for (let i = 0; i < crickerTeams.length; i++) {
        bodyEi.innerHTML += `
        <div class="celebriyt-img" 
        style= "background-image: 
        url( ${crickerTeams[i].imagpath})" onclick="changeTeam(${i})">
            <p class="name-p">
                ${crickerTeams[i].name}
            </p>
            </div>
        `
    }
}

function changeTeam(teamIndex) {

    document.querySelector("#team-name").innerHTML = crickerTeams[teamIndex].name
    document.querySelector("#team-title").innerHTML = crickerTeams[teamIndex].name
    document.querySelector("#odi-ranking").innerHTML = crickerTeams[teamIndex].odiRanking
    document.querySelector("#t20-ranking").innerHTML = crickerTeams[teamIndex].t20Ranking



}