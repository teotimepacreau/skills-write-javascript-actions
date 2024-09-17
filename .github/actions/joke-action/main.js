let getJoke = require("./joke")
let core = require("@actions/core")

async function run(){
    let joke = await getJoke()
    console.log(joke)
    core.setOutput("joke-output", joke)
}

run()