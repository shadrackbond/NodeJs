//we dont need to import the process module as we can use it as it iss+
console.log(process.env)

//process registering
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
})

process.exit(0);