let numbers = ["one", "two", "three", "four"]


// { one: 3, two: 3, three: 5, four: 4}

Array.prototype.associateWith = function(transformation){
    let b = {}
    this.map((a) =>
        b[a] = transformation(a)
    )
    return b
}
numbers.associateWith( str => str.length )