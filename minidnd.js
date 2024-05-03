const stats = document.getElementsByClassName("stat");
document.querySelector("#generate").addEventListener('click', benSauce);
function benSauce() {
    let returnCode = "";
    for (let i=0; i<stats.length; i++) {
        returnCode += stats[i].value + "|";
    }
    document.querySelector("#exportext").value = `_${returnCode}`;
}
document.querySelector("#submit").addEventListener('click', awesomeSauce);
function awesomeSauce() {
    const text = document.querySelector("#testext").value;
    let currentIndex = 0;
    function readText() {
        let returntext = "";
        for (let i=currentIndex + 1; i<text.length; i++) {
            currentIndex = i;
            if (text[i] == "|") break;
            else returntext += text[i];
        }
        return returntext;
    }
    for (let i=0; i<stats.length; i++) {
        stats[i].value = readText();
    }
    updateLevel();
}

const expInput = document.querySelector("#exp");
expInput.addEventListener('input', updateLevel);
function updateLevel() {
    let level = 0;
    const exp = expInput.value;
    if (exp >= 355000) {
        expInput.value = 355000;
        level = 20;
    }
    else if (exp >= 305000) level = 19
    else if (exp >= 265000) level = 18
    else if (exp >= 225000) level = 17
    else if (exp >= 195000) level = 16
    else if (exp >= 165000) level = 15
    else if (exp >= 140000) level = 14
    else if (exp >= 100000) level = 12
    else if (exp >= 85000) level = 11
    else if (exp >= 64000) level = 10
    else if (exp >= 48000) level = 9
    else if (exp >= 34000) level = 8
    else if (exp >= 23000) level = 7
    else if (exp >= 14000) level = 6
    else if (exp >= 6500) level = 5
    else if (exp >= 2700) level = 4
    else if (exp >= 900) level = 3
    else if (exp >= 300) level = 2
    else level = 1
    document.querySelector("#level").innerHTML = `Level: ${level}`
}

const charAttributes = [
    document.querySelector("#strength"),
    document.querySelector("#dexterity"),
    document.querySelector("#constitution"),
    document.querySelector("#intelligence"),
    document.querySelector("#wisdom"),
    document.querySelector("#charisma"),
];
const charModifiers = document.getElementsByClassName("modifier")
charAttributes.forEach(function(elem) {
        elem.addEventListener("input", updateMods(elem))
    }
);
function updateMods(elem) {
    const value = elem.value - 10
    if (value > 0) charModifiers[charAttributes.indexOf(elem)].innerHTML = `+${Math.floor(value/2)}`
    else charModifiers[charAttributes.indexOf(elem)].innerHTML = '+0'
}
