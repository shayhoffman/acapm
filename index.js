//## Let's create our own package manager

// * Create a node program
// * Check for the first process argument to be init
// * If the first argument is init continue processing
// * Use readline to ask for 5 inputs
// * Create a string that is a json object
// * The key values should be the inputs you get from the user
// * Save this json to a file called package.json

// # Bonus
// * Don't hardcode the readlines
// * Don't use a loop
// * Don't using string concatenation or template literals

const readLine = require('readLine');

const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

if(process.argv[2] === "init") {
    (rl.question("What is the app name?", (name) => {
        rl.question("What is the description?", (description) => {
            rl.question("What is the version?", (version) => {
                rl.question("Who is the author?", (author) => {
                    rl.question("Which is the main file?", (main) => {
                        const answers = {
                            "name": name,
                            "description": description,
                            "version": version,
                            "author": author,
                            "main": main
                        }

                        const writeThisObject = JSON.stringify(answers, null, '\t')
                        fs.writeFile('package.json', writeThisObject, (err) => {
                            if (err) throw err;
                                console.log("Your package was created! Woo!");
                        });
                        rl.close()
                    })
                })
            })
        })
    }))
}

