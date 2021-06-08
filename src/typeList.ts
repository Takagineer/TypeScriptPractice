// TypeScriptの基本の方

// boolean
let bool: boolean = true;

// 数値型
let num: number = 0;

// string
let str: string = "文字";

// Array
let arr1: Array<number> = [0, 1, 2];
// 配列の後になんの配列か明示する
let arr2: number[] = [0, 1, 2];
// 肩を先に指定している

// tuple
let tuple:[number,string] = [0,"A"];
// あまり使わない

// any
let any1:any=false;
エラーにならないため、使用しないのが良い

// void
const funcA =():void=>{
  const test ="TEST";
}
// 何も返却値がないことを示す。
// 上記の関数では何も返却していないためvoidと記述している。

// null
let null1:null=null;

// undrfined
let undefined1:undefined= undefined;

// object
let obj1:object = {};
let obj2:{} = 1244341;
let obj3:{id:number,name:string} = {id:1,name:"A"};
// obj2はあまり使わない
// obj3はよく出る
