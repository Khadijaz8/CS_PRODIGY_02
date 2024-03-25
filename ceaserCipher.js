const encrypt=document.querySelector("#encrypt");
const decrypt=document.querySelector("#decrypt");
const key=document.querySelector("#key");
const list=['a','b','c','d','e','f'
            ,'g','h','i','j','k'      
            ,'l','m','n','o','p'
            ,'q','r','s','t','u'
            ,'v','w','x','y','z'
]
let newText=" ";
encrypt.addEventListener("click",()=>{
    const textArea=document.querySelector("#text");   
const keyValue=Number(key.value);



  for (let letters of textArea.value){
   letters=letters.toLowerCase(); 
        if(!list.includes(letters)){
        continue;}
       const indexLetter =list.findIndex((item)=>item===letters);
let indexNewLetter=indexLetter+keyValue;
if(indexNewLetter>25){
    indexNewLetter-=26;
}
newText+=list[indexNewLetter];
textArea.value=newText;
}   
  
       newText="";
    
});
decrypt.addEventListener("click",()=>{
    const textArea=document.querySelector("#text");   
const keyValue=Number(key.value);



  for (const letters of textArea.value) {
        if(!list.includes(letters)){
        continue}
       const indexLetter =list.findIndex((item)=>item===letters);
let indexNewLetter=indexLetter-keyValue;
if(indexNewLetter<0){
    indexNewLetter+=26;
}
newText+=list[indexNewLetter];
textArea.value=newText;
}   

       newText="";
    
});

