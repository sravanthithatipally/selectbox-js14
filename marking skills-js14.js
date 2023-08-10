let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];
let ulcontainer = document.getElementById("skillListContainer");
ulcontainer.style.listStyle = "none";

function checkboxclicked(labelId) {
    let labelele = document.getElementById(labelId);
    labelele.classList.toggle("selected");
}

function labelclicked(labelId) {
    let labelele = document.getElementById(labelId);
    let checkboxele = document.getElementById(checkboxId);
    if (checkboxele.checked === false) {
        checkboxele.checked = true;
    } else {
        checkboxele.checked = false;
    }
    checkboxclicked(labelId);
}

function createskilllist(skill) {
    let listele = document.createElement("li");
    listele.classList.add("p-2");
    ulcontainer.appendChild(listele);

    let checkboxele = document.createElement("input");
    checkboxele.type = "checkbox";
    checkboxele.classList.add("mr-2");
    checkboxele.setAttribute("id", "checkbox" + skill.uniqueNo);
    let checkboxId = "checkbox" + skill.uniqueNo;
    ulcontainer.appendChild(checkboxele);


    let labelele = document.createElement("label");
    labelele.setAttribute("for", "checkbox" + skill.uniqueNo);
    labelele.classList.add("liststyling");
    labelele.setAttribute("id", "label" + skill.uniqueNo);
    let labelId = "label" + skill.uniqueNo;


    ulcontainer.appendChild(labelele);
    labelele.textContent = skill.skillName;

    checkboxele.onclick = function() {
        let labelId = "label" + skill.uniqueNo;
        checkboxclicked(labelId);
    };
    labelId.onclick = function() {
        labelclicked(labelId);
    }
}

for (let skill of skillList) {
    createskilllist(skill);
}