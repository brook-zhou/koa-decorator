const {Controller} = require('./src/class-decorator')

function doTest(a,b){
    return a+b
}


module.exports = {
    Controller,
    doTest
}