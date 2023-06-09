function add(a: number,b: number): number{
    return a + b
}

const a: number = 6
const b: number = 7

let c:number = add(a,b)
console.log(c)

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}
interface MyPosition{
    x: number |undefined
    y: number |undefined
}

interface MyPositionWithDefault extends MyPosition{
    default: string
}
function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a:number,b:number):MyPosition

function position(a?:number,b?:number){
    if (!a && !b){
        return {x: undefined, y:undefined}
    }
    if(a && !b){
        return {x:a,y:undefined,default:a.toString()}
    }
    return {x:a,y:b}
}

console.log('Empty: ', position());
console.log('One param: ', position(42));
console.log('Two params: ', position(10,15));