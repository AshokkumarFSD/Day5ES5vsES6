fetch("./resume.json").
    then(response => response.json()).
    then((json) => {
        handleTask(json);
    });


function handleTask(resumeJson) {
    // 0 argument passed to dispaly the content with space based on the level
    // taking resume json start with json object

    // using normal for loop
    handleObjectDataUsingNormalFor(resumeJson, 0);

    // using foreach
    handleObjectDataUsingForEach(resumeJson, 0);

    // using for in
    handleObjectDataUsingForIn(resumeJson, 0);

    // using for of
    handleObjectDataUsingForOf(resumeJson, 0);
}



// method to handle the object type data (key and value)
// based on inner type it will call array method
function handleObjectDataUsingNormalFor(input, space) {
    let keys = Object.keys(input);
    for (let i = 0; i < keys.length; i++) {
        let singleKey = keys[i];
        if (!Array.isArray(input[singleKey])) {
            let displaycontent = "";
            for (let i = 0; i < space; i++) {
                displaycontent = displaycontent + `   `;
            }
            displaycontent = displaycontent + `${singleKey} - ${input[singleKey]}`;
            console.log(displaycontent);
        }
        else {
            handleArrayDataUsingNormalFor(singleKey, input[singleKey], space + 1);
        }
    }
}

// method to handle the array data 
// based on inner type it will call object method
function handleArrayDataUsingNormalFor(title, input, space) {
    console.log(`${title}`);
    for (let i = 0; i < input.length; i++) {
        let singleVal = input[i];
        if (typeof singleVal == "object") {
            handleObjectDataUsingNormalFor(singleVal, space);
        }
        else {
            console.log(`    ${singleVal}`);
        }
    }
}

function handleObjectDataUsingForEach(input, space) {
    let keys = Object.keys(input);
    keys.forEach((singleKey, index, actualArray) => {
        if (!Array.isArray(input[singleKey])) {
            let displaycontent = "";
            for (let i = 0; i < space; i++) {
                displaycontent = displaycontent + `   `;
            }
            displaycontent = displaycontent + `${singleKey} - ${input[singleKey]}`;
            console.log(displaycontent);
        }
        else {
            handleArrayDataUsingForEach(singleKey, input[singleKey], space + 1);
        }
    });
}


function handleArrayDataUsingForEach(title, input, space) {
    console.log(`${title}`);
    input.forEach((singleVal, index, actualArray) => {
        if (typeof singleVal == "object") {
            handleObjectDataUsingForEach(singleVal, space);
        }
        else {
            console.log(`    ${singleVal}`);
        }
    });
}


function handleObjectDataUsingForIn(input, space) {
    for (let singleKey in input) {
        if (!Array.isArray(input[singleKey])) {
            let displaycontent = "";
            for (let i = 0; i < space; i++) {
                displaycontent = displaycontent + `   `;
            }
            displaycontent = displaycontent + `${singleKey} - ${input[singleKey]}`;
            console.log(displaycontent);
        }
        else {
            handleArrayDataUsingForIn(singleKey, input[singleKey], space + 1);
        }
    }
}

function handleArrayDataUsingForIn(title, input, space) {
    console.log(`${title}`);
    for (index in input) {
        let singleVal = input[index];
        if (typeof singleVal == "object") {
            handleObjectDataUsingForIn(singleVal, space);
        }
        else {
            console.log(`    ${singleVal}`);
        }
    };
}


function handleObjectDataUsingForOf(input, space) {
    let keys = Object.keys(input);
    for (let singleKey of keys) {
        if (!Array.isArray(input[singleKey])) {
            let displaycontent = "";
            for (let i = 0; i < space; i++) {
                displaycontent = displaycontent + `   `;
            }
            displaycontent = displaycontent + `${singleKey} - ${input[singleKey]}`;
            console.log(displaycontent);
        }
        else {
            handleArrayDataUsingForOf(singleKey, input[singleKey], space + 1);
        }
    }
}

function handleArrayDataUsingForOf(title, input, space) {
    console.log(`${title}`);
    for (let singleVal of input) {
        if (typeof singleVal == "object") {
            handleObjectDataUsingForOf(singleVal, space);
        }
        else {
            console.log(`    ${singleVal}`);
        }
    };
}