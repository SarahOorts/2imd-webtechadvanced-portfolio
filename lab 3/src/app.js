class Note { // laad de storage terug op en zet het op het scherm
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
      // HINT🤩 this.element = this.createElement(title);
    }
  
    createElement(title) {
      let newNote = document.createElement("li");
      newNote.addEventListener("click", this.remove.bind(newNote)); //bind verwijst let newNote
      // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote)); 
      return newNote; //let newNote
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      console.log("HYELLOW");
      let stickynote = document.querySelector("#taskList").appendChild(this.element); // let newNote
      stickynote.innerHTML = this.title;      
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      
      localStorage.getItem("stickyArray");
      console.log(localStorage.getItem("stickyArray"));

      if(localStorage.getItem("stickyArray") === null){
        localStorage.setItem("stickyArray", JSON.stringify([this.title]));
      }
      else{
        let noteArray = JSON.parse(localStorage.getItem("stickyArray"));
        noteArray.push(this.title);
        localStorage.setItem("stickyArray", JSON.stringify(noteArray)); // noteArray = object uit local storage + toevoeging push
      }
      

      // let ticket = {
      //   note : this.title,
      // }
      // let id  = i;

      // localStorage.setItem(id, ticket);
      console.log("🤩");
    }
  
    remove(e) {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage

        console.log(e + "yess");
        // for (let i = 0; i < notes.length; i++){
        //   notes[i].
        // }
        //e.target.removeChild(this);

        document.querySelector("#taskList").removeChild(this);
      
    }
  }
  
  class App { // voegt nieuwe notes toe
    constructor() {
      console.log("👊🏼 The Constructor!");
      this.txtTodo = document.querySelector("#taskInput");

      this.txtTodo.addEventListener("keypress",this.createNote.bind(this)); //bind() houdt this gekoppeld aan de constructor (let app vanonder)
      this.loadNotesFromStorage();
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
      // this.txtTodo = ???
      // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      // this.loadNotesFromStorage();
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
    }
  
    createNote(e){
      // this function should create a new note by using the Note() class
      // HINT🤩
      // clear the text field with .reset in this class

      if(e.key === "Enter"){
        e.preventDefault();
        let textinput = this.txtTodo.value;
        let newSticky = new Note(textinput);
        newSticky.add();
        newSticky.saveToStorage();
        this.reset();
        console.log("hi" , this.txtTodo.value);
      }
    }

    reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value = "";
      console.log(this.txtTodo.value, "ok?");
    }
    
  }
  
  let app = new App(); // uitvoering classes
  