var x=document.querySelectorAll("button");
let firstvalue;
let lastvalue;
let result;
var number=[];
for(let button of x){
    button.addEventListener('click',function() {document.getElementsByClassName('display')[0].value+=button.innerHTML})
}

var count=1
document.getElementsByClassName('add')[0].addEventListener('click',function(){


    let inp = document.getElementsByClassName('display')[0].value;
    firstvalue= parseFloat(inp.toString());
    console.log(firstvalue);

    number.push(firstvalue);



    document.getElementsByClassName('display')[0].value='';
        
    count+=1;
    number.push('+');

})
document.getElementsByClassName('subtract')[0].addEventListener('click',function(){


    let inp = document.getElementsByClassName('display')[0].value;
    firstvalue= parseFloat(inp.toString());
    console.log(firstvalue);

    number.push(firstvalue);


    document.getElementsByClassName('display')[0].value='';
        
    count+=1;
    number.push('-');

})
document.getElementsByClassName('multiply')[0].addEventListener('click',function(){


    let inp = document.getElementsByClassName('display')[0].value;
    firstvalue= parseFloat(inp.toString());
    console.log(firstvalue);

    number.push(firstvalue);

    
    document.getElementsByClassName('display')[0].value='';
        
    count+=1;
    number.push('*');

})
document.getElementsByClassName('divide')[0].addEventListener('click',function(){


    let inp = document.getElementsByClassName('display')[0].value;
    firstvalue= parseFloat(inp.toString());
    console.log(firstvalue);

    number.push(firstvalue);

    document.getElementsByClassName('display')[0].value='';
        
    count+=1;
    number.push('/');

})
document.getElementsByClassName('equalto')[0].addEventListener('click',function(){
    let inp = document.getElementsByClassName('display')[0].value;
    lastvalue= parseFloat(inp.toString());
    console.log(lastvalue);

    document.getElementsByClassName('display')[0].value='';

    number.push(lastvalue);

    // result=addnumber(firstvalue,secondvalue);
    
    console.log('count',count);
    console.log('number',number);
    console.log('strings',number.toString());

    result=calc(number);

    console.log("result",result);


})

function calc(number){
    let finalvalue;

    if(number.includes('/')){

        // find the '/' index in array
        let n_index=number.indexOf('/');

        // '/' se pehle wala item pick kiya
        let a=parseFloat(number[n_index-1]);
        console.log('a-',a);
        
        // '/' ke baad wala item pick kiya
        let b=parseFloat(number[n_index+1]);
        console.log('b-',b);

        // execute the calculation
        finalvalue=a/b;

        // remove the numbers from the array and also '/' sign
        number.splice(n_index-1,3);

        // now replace the replaced item with the calculation result
        number.splice(n_index-1,0,finalvalue);
    }
    if(number.includes('*')){

        // find the '*' index in array
        let n_index=number.indexOf('*');

        // '*' se pehle wala item pick kiya
        let a=parseFloat(number[n_index-1]);
        console.log('a-',a);
        
        // '*' ke baad wala item pick kiya
        let b=parseFloat(number[n_index+1]);
        console.log('b-',b);

        // execute the calculation
        finalvalue=a*b;

        // remove the numbers from the array and also '*' sign
        number.splice(n_index-1,3);

        // now replace the replaced item with the calculation result
        number.splice(n_index-1,0,finalvalue);
    }
    if(number.includes('-')){

        // find the '-' index in array
        let n_index=number.indexOf('-');

        // '-' se pehle wala item pick kiya
        let a=parseFloat(number[n_index-1]);
        console.log('a-',a);
        
        // '-' ke baad wala item pick kiya
        let b=parseFloat(number[n_index+1]);
        console.log('b-',b);

        // execute the calculation
        finalvalue=a-b;

        // remove the numbers from the array and also '-' sign
        number.splice(n_index-1,3);

        // now replace the replaced item with the calculation result
        number.splice(n_index-1,0,finalvalue);

    }
    if(number.includes('+')){
        // find the '+' index in array
        let n_index=number.indexOf('+');

        // '+' se pehle wala item pick kiya
        let a=parseFloat(number[n_index-1]);
        console.log('a-',a);
        
        // '+' ke baad wala item pick kiya
        let b=parseFloat(number[n_index+1]);
        console.log('b-',b);

        // execute the calculation
        finalvalue=a+b;

        // remove the numbers from the array and also '+' sign
        number.splice(n_index-1,3);

        // now replace the replaced item with the calculation result
        number.splice(n_index-1,0,finalvalue);
    }

    console.log(number);
    return number[0];
}
