function receivesAFunction(callback = lol){
    callback()

}
function returnsANamedFunction(){
    return function firstClass(){
    }

}

function returnsAnAnonymousFunction (){
    return function(){
    }
}