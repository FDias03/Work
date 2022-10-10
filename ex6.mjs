class Spy{
    constructor(target, method){
        this.count = 0
        let targetM = target[method]
        let a = this
        target[method] = function(){
            a.count++
            targetM.call(this, arguments)
        }
    }
}

var spy = new Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3

