function displayResults(responseJson) {
    console.log(responseJson)
    $('#results').empty()
    if (responseJson.total==0){
    $('#results').append("<p>No Results Found</p>")
    }
    for (let i = 0; i < responseJson.data.length; i++) {
        $('#results').append(`
    <div>
    ${responseJson.data[i].fullName}
    <p>${responseJson.data[i].description}</p>
    <a href="${responseJson.data[i].url}">link </a>
    </div>
    `)
    }
}
function getData(state_code,max) {
    fetch(`https://developer.nps.gov/api/v1/parks?limit=${max}&stateCode=${state_code}&api_key=HMtgZ7o4QO9ofI3rtDvirxwby08E58v3xdAzohxK`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        const state_code= event.target.state_code.value
        const max= event.target.max.value
        console.log(state_code)
        getData(state_code,max)
    })
}
$(watchForm)