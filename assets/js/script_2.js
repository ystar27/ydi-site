function subNewsLetter(){
    let email = document.getElementById('email_news').value;
    
    const url = "https://ydi-site-backend.herokuapp.com/news/";
    const data = {
        email: email   
    }

    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            notification();
            console.log(res);
        })
        .catch(err => console.log(err));

    document.getElementById('email_news').value = ""; 
    
    return;
        
}

function closeNotification(){
    let element = document.getElementById('success');
    element.classList.remove("show");
    element.classList.add("hide");

    return;
}

function notification(){
    let element = document.getElementById('success');
    element.classList.add("show");
    element.classList.add("alert");
    element.classList.remove("hide");
    
    setTimeout(function(){
        element.classList.remove("show");
        element.classList.add("hide");
    }, 5000);

    return;
}

function loadDocContact() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const note = document.getElementById('note').value;
    const phone = document.getElementById('phone').value;

    const url = "https://ydi-site-backend.herokuapp.com/contact/";
    const data = {
        email: email,
        name: name,
        note: note,
        phone: phone   
    }

    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            notification();
            console.log(res);
        })
        .catch(err => console.log(err));

    
    document.getElementById('email').value = "";
    document.getElementById('name').value = "";
    document.getElementById('note').value = "";
    document.getElementById('phone').value = "";   

    
    // GET CALL

    // fetch('https://ydi-site-backend.herokuapp.com/')
    //     .then(res => res.text())
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));

    return;
}


function loadDocIntern() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const note = document.getElementById('note').value;
    const phone = document.getElementById('phone').value;

    const url = "https://ydi-site-backend.herokuapp.com/interns/";
    const data = {
        email: email,
        name: name,
        note: note,
        phone: phone   
    }

    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            notification();
            console.log(res);
        })
        .catch(err => console.log(err));

    document.getElementById('email').value = "";
    document.getElementById('name').value = "";
    document.getElementById('note').value = "";
    document.getElementById('phone').value = "";    

    
    // GET CALL

    // fetch('https://ydi-site-backend.herokuapp.com/')
    //     .then(res => res.text())
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));

    return;
}

function loadDocVol() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const note = document.getElementById('note').value;
    const phone = document.getElementById('phone').value;

    const url = "https://ydi-site-backend.herokuapp.com/volunteers/";
    const data = {
        email: email,
        name: name,
        note: note,
        phone: phone   
    }

    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            notification();
            console.log(res);
        })
        .catch(err => console.log(err));

    document.getElementById('email').value = "";
    document.getElementById('name').value = "";
    document.getElementById('note').value = "";
    document.getElementById('phone').value = "";     

    
    return;
}


function loadDocChallenges(){

    // console.log('I am here.....')

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const sex = document.getElementById('sex').value;
    const cityState = document.getElementById('city-state').value;
    const country = document.getElementById('country').value;
    const occupation = document.getElementById('occupation').value;
    const compName = document.getElementById('comp-name').value;
    const ideaName = document.getElementById('idea-name').value;
    const fofw = document.getElementById('fofw').value;
    const tellUs = document.getElementById('tell-us').value;
    const sdg = document.getElementById('sdg').value;
    const devTest = document.getElementById('dev-test').value;
    const benefit = document.getElementById('benefit').value;
    const perfMatch = document.getElementById('perf-match').value;
    const howMany = document.getElementById('how-many').value;
    const own = document.getElementById('own').value;
    const tools = document.getElementById('outline-tools').value;
    const timeframe = document.getElementById('outline-time').value;

    const url = "https://ydi-site-backend.herokuapp.com/challenges/";

    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        age: age,
        address: address,
        sex: sex,
        city: cityState,
        country: country,
        occupation: occupation,
        competitionName: compName,
        ideaName: ideaName,
        fieldOfWork: fofw,
        tellUs: tellUs,
        afterDevTest: devTest,
        ideaBenefit: benefit,
        perfectMatch: perfMatch,
        outreach: howMany,
        sdg: sdg,
        ownership: own,
        usedTools: tools,
        timeFrame: timeframe,
        
    }

    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            swal("Great!", "Challenge form submitted!", "success");
            console.log(res);
        })
        .catch(err => console.log(err));


    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('age').value = "";
    document.getElementById('address').value = "";
    document.getElementById('sex').value = "";
    document.getElementById('city-state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('occupation').value = "";
    document.getElementById('comp-name').value = "";
    document.getElementById('idea-name').value = "";
    document.getElementById('fofw').value = "";
    document.getElementById('tell-us').value = "";
    document.getElementById('sdg').value = "";
    document.getElementById('dev-test').value = "";
    document.getElementById('benefit').value = "";
    document.getElementById('perf-match').value = "";
    document.getElementById('how-many').value = "";
    document.getElementById('own').value = "";
    document.getElementById('outline-tools').value = "";
    document.getElementById('outline-time').value = "";

    return;
}

function loadDocCampaign(){

    // console.log('I am here.....')

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const sex = document.getElementById('sex').value;
    const cityState = document.getElementById('city-state').value;
    const country = document.getElementById('country').value;
    const occupation = document.getElementById('occupation').value;
    const compName = document.getElementById('comp-name').value;
    const ideaName = document.getElementById('idea-name').value;
    const fofw = document.getElementById('fofw').value;
    const tellUs = document.getElementById('tell-us').value;
    const sdg = document.getElementById('sdg').value;
    const devTest = document.getElementById('dev-test').value;
    const benefit = document.getElementById('benefit').value;
    const perfMatch = document.getElementById('perf-match').value;
    const howMany = document.getElementById('how-many').value;
    const own = document.getElementById('own').value;
    const tools = document.getElementById('outline-tools').value;
    const timeframe = document.getElementById('outline-time').value;

    const url = "https://ydi-site-backend.herokuapp.com/campaigns/";

    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        age: age,
        address: address,
        sex: sex,
        city: cityState,
        country: country,
        occupation: occupation,
        competitionName: compName,
        ideaName: ideaName,
        fieldOfWork: fofw,
        tellUs: tellUs,
        afterDevTest: devTest,
        ideaBenefit: benefit,
        perfectMatch: perfMatch,
        outreach: howMany,
        sdg: sdg,
        ownership: own,
        usedTools: tools,
        timeFrame: timeframe,
        
    }

    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            swal("Great!", "Campaign form submitted!", "success");
            console.log(res);
        })
        .catch(err => console.log(err));


    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('age').value = "";
    document.getElementById('address').value = "";
    document.getElementById('sex').value = "";
    document.getElementById('city-state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('occupation').value = "";
    document.getElementById('comp-name').value = "";
    document.getElementById('idea-name').value = "";
    document.getElementById('fofw').value = "";
    document.getElementById('tell-us').value = "";
    document.getElementById('sdg').value = "";
    document.getElementById('dev-test').value = "";
    document.getElementById('benefit').value = "";
    document.getElementById('perf-match').value = "";
    document.getElementById('how-many').value = "";
    document.getElementById('own').value = "";
    document.getElementById('outline-tools').value = "";
    document.getElementById('outline-time').value = "";

    return;
}

function clearFields(){
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('age').value = "";
    document.getElementById('address').value = "";
    document.getElementById('sex').value = "";
    document.getElementById('city-state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('occupation').value = "";
    document.getElementById('comp-name').value = "";
    document.getElementById('idea-name').value = "";
    document.getElementById('fofw').value = "";
    document.getElementById('tell-us').value = "";
    document.getElementById('sdg').value = "";
    document.getElementById('dev-test').value = "";
    document.getElementById('benefit').value = "";
    document.getElementById('perf-match').value = "";
    document.getElementById('how-many').value = "";
    document.getElementById('own').value = "";
    document.getElementById('outline-tools').value = "";
    document.getElementById('outline-time').value = "";
}

function loadDocCoalition(){
    console.log('Clicking.....!!!')

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const sex = document.getElementById('sex').value;
    const cityState = document.getElementById('city-state').value;
    const country = document.getElementById('country').value;
    const occupation = document.getElementById('occupation').value;
    const compName = document.getElementById('comp-name').value;
    const bizName = document.getElementById('biz-name').value;
    const compEmail = document.getElementById('comp-email').value;
    const comPhone = document.getElementById('comp-phone').value;
    const mediaLink = document.getElementById('media-link').value;
    const timeFrame = document.getElementById('timeframe').value;
    const compAddress = document.getElementById('com-address').value;
    const compCityState = document.getElementById('comp-city-state').value;
    const countryOfResidence = document.getElementById('country-res').value;
    const compPosition = document.getElementById('rank').value;
    const areaOfFocus = document.getElementById('AoF').value;
    const projInterest = document.getElementById('proj-interest').value;
    const coalition = document.getElementById('coalition').value;
    const expectation = document.getElementById('expectation').value;

    const url = "https://ydi-site-backend.herokuapp.com/coalitions/";

    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        age: age,
        address: address,
        sex: sex,
        city: cityState,
        country: country,
        occupation: occupation,
        companyName: compName,
        businessName: bizName,
        companyEmail: compEmail,
        companyPhone: comPhone,
        mediaLink: mediaLink,
        timeFrame: timeFrame,
        compAddress: compAddress,
        compCityState: compCityState,
        countryLocation: countryOfResidence,
        rank: compPosition,
        areaOfFocus: areaOfFocus,
        projectInterest: projInterest,
        coalition: coalition,
        expectation: expectation 
    }

    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            swal("Great!", "Coalition form submitted!", "success");
            console.log(res);
        })
        .catch(err => console.log(err));


    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('age').value = "";
    document.getElementById('address').value = "";
    document.getElementById('sex').value = "";
    document.getElementById('city-state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('occupation').value = "";
    document.getElementById('comp-name').value = "";
    document.getElementById('biz-name').value = "";
    document.getElementById('comp-email').value = "";
    document.getElementById('comp-phone').value = "";
    document.getElementById('media-link').value = "";
    document.getElementById('timeframe').value = "";
    document.getElementById('com-address').value = "";
    document.getElementById('comp-city-state').value = "";
    document.getElementById('country-res').value = "";
    document.getElementById('rank').value = "";
    document.getElementById('AoF').value = "";
    document.getElementById('proj-interest').value = "";
    document.getElementById('coalition').value = "";
    document.getElementById('expectation').value = "";

    return;    
}