const myLibrary=[];
const addButton=document.querySelector("#add-book");
const body=document.querySelector("body");
const container=document.querySelector("#container");
const form=document.querySelector("#form");
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
    myLibrary.push(book);
}
addBookToLibrary("Kafka",'Metamorphisis',40,true);
addBookToLibrary('Tolkien','Hobbit',300,true);
addBookToLibrary("Asimov","The Foundations Edge",250,true);
for(let i=0;i<myLibrary.length;i++){
    console.log(myLibrary[i]);
}