const arrayOfNumbers: Array<number> = [1,1,2,34]
const arrayOfString: Array<string> = ['Hello',"World"]
function reverse<T>(array: T[]): T[]{
    return array.reverse()
}