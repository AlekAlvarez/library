const myLibrary=[];
const addButton=document.querySelector("#add-book");
const body=document.querySelector("body");
const container=document.querySelector("#container");
const form=document.querySelector("#form");
const submit=document.querySelector("#Submit");
const author=document.querySelector("#author");
const title=document.querySelector("#title");
const pageNumbers=document.querySelector("#pageNumbers");
const isRead=document.querySelector("#isRead");
const table=document.querySelector("tbody");
isRead.addEventListener("click",()=>{
    if(isRead.checked){
    isRead.value='read';
    }
    else{
        isRead.value='unread';
    }
    console.log(isRead.value);
})
submit.addEventListener("click",()=>{
    container.removeChild(form);
    addBookToLibrary(author.value,title.value,pageNumbers.value,isRead.value);
    author.value="";
    title.value="";
    pageNumbers.value="";
    isRead.value="";
    isRead.checked=false;
})
container.removeChild(form);
addButton.addEventListener("click",()=>{
    container.appendChild(form);
});
function Book(author,title,pageNumbers,isRead,index){
    this.author=author;
    this.title=title;
    this.pageNumbers=pageNumbers;
    this.isRead=isRead;
    this.index=index;
    this.decrementIndex=function(){
        this.pageNumbers--;
    };
}
function addBookToLibrary(author,title,pageNumbers,isRead){
    let book=new Book(author,title,pageNumbers,isRead,myLibrary.length);
    let row=document.createElement("tr");
    let b=document.createElement("td");
    b.innerText=myLibrary.length+1;
    row.appendChild(b);
    let a=document.createElement("td");
    a.innerText=author;
    row.appendChild(a);
    let t=document.createElement("td");
    t.innerText=title;
    row.appendChild(t);
    let n=document.createElement("td");
    n.innerText=pageNumbers;
    row.appendChild(n);
    let r=document.createElement("td");
    r.innerText=isRead;
    row.appendChild(r);
    let tog=document.createElement("td");
    row.appendChild(tog);
    let rem=document.createElement("td");
    row.appendChild(rem);
    table.appendChild(row);
    myLibrary.push(book);
}
