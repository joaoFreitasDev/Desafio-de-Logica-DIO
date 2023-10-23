let heroi = {"nome":"", "xp": 0, "nivel":""}
// Altere o nível e o nome do heroi:
heroi["nome"] = "JOT!NH4"

while(heroi["nivel"] != "RADIANTE"){

    heroi["xp"] += 1000

    if (heroi["XP"] <= 1000){
        heroi["nivel"] = "FERRO"

    }else if(heroi["xp"] >= 1001 && heroi["xp"] <= 2000){
        heroi["nivel"] = "BRONZE"

    }else if(heroi["xp"] >= 2001 && heroi["xp"] <= 5000){
        heroi["nivel"] = "PRATA"

    }else if(heroi["xp"] >= 5001 && heroi["xp"] <= 6000){
        heroi["nivel"] = "OURO"

    }else if(heroi["xp"] >= 6001 && heroi["xp"] <= 7000){
        heroi["nivel"] = "PLATINA"

    }else if(heroi["xp"] >= 7001 && heroi["xp"] <= 8000){
        heroi["nivel"] = "PLATINA"

    }else if(heroi["xp"] >= 8001 && heroi["xp"] <= 9000){
        heroi["nivel"] = "IMORTAL"

    }else if(heroi["xp"] >= 10001){
        heroi["nivel"] = "RADIANTE"

    }

    console.log("O Herói de nome " + heroi['nome'] + " está no nível " + heroi["nivel"])
    console.log("")
}

