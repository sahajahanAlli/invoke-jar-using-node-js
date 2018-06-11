const exec = require('child_process').exec;
const childPorcess = exec('java -jar C:\\Users\\devil\\eclipse-workspace\\invoke-jar.jar "Jar is invoked by Node js"', function(err, stdout, stderr) {
    if (err) {
        console.log(err)
    }
    console.log(stdout)
})

module.exports = childPorcess;