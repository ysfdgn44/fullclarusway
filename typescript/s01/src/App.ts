// console.log('Hello World')

// const button = document.getElementById('submit')!;
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;
// const result = document.getElementById('result')!;

// let x = '5'
// x = 'ww'
// x = false
// hata giderildi

// function add(a :number, b: number) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     console.log('clicked')
//     result.innerText = `${add(+a.value, +b.value)}`;
// })

// let addArrow = (a:number, b: number)=> a*b;

// let xyz : number = 5

// let aa;

// aa = '5'
// aa = 5
// aa = false

// let ab = '5'
// ab = 5,
// ab = true
// ab = 'Hello'

// let ac: any = 4
// ac = '4'
// ac = true


// let ad = true;


//Array

// let arr: number [] = [1,2,3,4]
// arr.push('a') // error
// arr.push(5)

// let str: Array<string> = ['a', 'b']

// let arr2 = [] //empty array

// let arr3: number[] = []; //empty correct way

// let arr4: readonly number[] = [1,2,3,4];

// arr4.push(8) // error

// arr4 = [10,20,30,10,40,50] //allowed

//Tuples

// let myTuple: [number,string];

// myTuple = [2,'Hello']

// myTuple.push('0','admin')

// console.log(myTuple)

// let myArray: [number,string][] = [] // Tuple arrays

// myArray.push([0,'Admin'])
// myArray.push([1,'User'])

// console.log(myArray)


// Enum

// enum Role {
//     User,
//     Admin 
// }

// let currentUser: Role = Role.User
// // let currentUser = 0

// console.log(currentUser)

// currentUser = Role.Admin

// console.log(currentUser)

// console.log('-----------')

// const enum Role2 { //js de daha anlamlı çıktı
//     User,
//     Admin 
// }

// let user2: Role2 = Role2.Admin
// let user3: Role2 = Role2.User



// enum Tshirt {
//     'Small' = 'S',
//     'Medium' = 'M',
//     'Large' = 'L',
//     'XL' = 100,
//     'XXL'
// }

// console.log(Tshirt.Small)
// console.log(Tshirt.XXL)

// enum StatusCodes {
//     NotFound = 404, 
//     Success = 200, 
//     Accepted = 202, 
//     BadRequest = 400
// }

// const request: StatusCodes = StatusCodes.Success;
// console.log(request) ;   //200

//Unknown

// let notSure:unknown = 4;
// notSure = 'Hello';
// notSure = 100;

// let numVar: number = notSure as number

// let anyVar: any = notSure

// let anyVar2: any = 2

// numVar = anyVar2

//Void

// function add(n1: number, n2:number): void  {
//     console.log(n1+n2)
//     // return undefined
//     }

//     let result: number = add(2,5)
//     console.log(result)

//never

// function error(message: string): never{
//     throw new Error(message);
    
// }

// error('New Error')

// console.log(error('New Error'))


//Union

// let uVar: string | number = 0
// uVar = '0'
// uVar = true // error

// //type narrowing
// function checkNumber(n: (string | number)):string{
//     n.
//     if (typeof n === 'number'){
//         n.
//     }else {
//         n.
//     }
// }


//Type aliasses

// type Nums = number | string 


// let xc: Nums = false;
// let y: Nums = '0'
// function add(n1: Nums, n2: Nums){
//     console.log(n1+n2)
// }


//String Literals

// type car = 'BMW' | 'Audi'

// let car1: car = 'BMW' 
// let car2: car = 'Audi' 
// let car3: car = 'Mercedes' 

// Intersection

//object

// const employee :{
//     eName: string;
//     id?:number; //? opsiyonel yapar
//     getID():void
// } = {
//     eName : 'Mark',
//     id:1,
//     getID(){
//         console.log(this.id)
//     }
    
// }

// type Book = {
//     book_id: number;
//     book_name: string;
//   }
    
//   type Author = {
//     Author_Id: number;
//     Author_name: string;
//   }

//   type intersected_type = Book & Author;

//   let obj1: intersected_type = {
//     book_id: 1234,
//     book_name: "Lord of the Rings",
//     Author_Id: 1892,
//     Author_name: "J. R. R. Tolkien",
//   };

// Type Asertions

// let score: unknown = '350';

// console.log(score.split(''))
// console.log((<string>score).split('')) 
// console.log((score as string).split('')) 

// console.log((score as number));

//functions

// function selamla (greet: string, name?:string ):string{
//     if(!name) name = 'user'
//     return `${greet+' '+name}`
// }

// selamla('Merhaba','sercan')
// selamla('Merhaba')
// selamla('Merhaba','sercan', 'yılmaz')


// function overloading

// function add (a:string, b:string):string;
// function add (a:number, b:number):number;
// function add (a:any, b:any):any{
//     return a+b
// }

// console.log(add('Hello ', "Mark"))
// console.log(add(4, 2))
// console.log(add(4, 'string'))

// Rest Parameters
// function add(num: number, ...numbers:number[]){
//     let total = num; 

//     numbers.forEach(number=> total+= number)
//     console.log(total);
// }


// add(1,2);
// add(1,2,3,4)
// add(100, 200, 3, 5, 6, 7, 8, 9)
// add(1);












