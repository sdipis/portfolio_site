function getData(params, cb) {
    let baseURL = "./includes/index.php";

    if (params) {
        let keys = Object.keys(params);
        let newQStringParams = keys.map(key => `${key}=${params[key]}`).join("&&");
        // console.log(newQStringParams);

        baseURL += `?${newQStringParams}`;
    }

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            // console.log(data[0]);
            cb(data[0]);
        })
        .catch(error => console.error(error));
}

function getSecondData(params, cb) {
    let secondBaseURL = "./includes/profileIndex.php";

    if (params) {
        let keys = Object.keys(params);
        let newQStringParams = keys.map(key => `${key}=${params[key]}`).join("&&");
        // console.log(newQStringParams);

        secondBaseURL += `?${newQStringParams}`;
    }

    fetch(secondBaseURL)
        .then(res => res.json())
        .then(data => {
            // console.log(data[0]);
            cb(data[0]);
        })
        .catch(error => console.error(error));
}

export { getData, getSecondData };