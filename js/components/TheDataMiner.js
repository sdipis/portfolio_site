// a callback is a reference to another function that gets called at a certain point in your programming flow
// params is the object were passing in that contains an id or another bit of information (paramaters)
// {id: 1} or {id: 1, name: "Spencer", Role: "Scooby Doo"}
// we need to convert the object into a query scheme
//example: {id: 1, name: "Spencer", Role: "Scooby Doo"} --> id=1&&name=Spencer

function getData(params, cb) {
    // use the Fetch API to retrieve some data

    let baseURL = "./includes/index.php";

    if (params) {
        let keys = Object.keys(params); 
        // takes an object and creates a usable array ["id", "name"]
        // look at mozilla docs for more information on keys
        let newQStringParams = keys.map(key => `${key}=${params[key]}`).join("&&");
        console.log(newQStringParams);

        baseURL += `?${newQStringParams}`; 
        // += take existing value and add to it
    } // this is a method

    
    fetch(baseURL)
    .then(res => res.json()) // unpack the API response (turn it back into plain JS)
    .then(data => {
        // do anything else here that we want with our data
        // call a function to generate our dynamic content
        console.log(data[0]);
        cb(data[0]);
    })
    .catch(error => console.error(error)); // catch and report any errors
}

export { getData }