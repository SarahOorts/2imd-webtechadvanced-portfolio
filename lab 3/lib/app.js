"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note = /*#__PURE__*/function () {
  // laad de storage terug op en zet het op het scherm
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title;
    this.element = this.createElement(title); // HINT🤩 this.element = this.createElement(title);
  }

  _createClass(Note, [{
    key: "createElement",
    value: function createElement(title) {
      var newNote = document.createElement("li");
      newNote.addEventListener("click", this.remove.bind(newNote)); //bind verwijst let newNote
      // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote)); 

      return newNote; //let newNote
    }
  }, {
    key: "add",
    value: function add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      console.log("HYELLOW");
      var stickynote = document.querySelector("#taskList").appendChild(this.element); // let newNote

      stickynote.innerHTML = this.title;
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      localStorage.getItem("stickyArray");
      console.log(localStorage.getItem("stickyArray"));

      if (localStorage.getItem("stickyArray") === null) {
        localStorage.setItem("stickyArray", JSON.stringify([this.title]));
      } else {
        var noteArray = JSON.parse(localStorage.getItem("stickyArray"));
        noteArray.push(this.title);
        localStorage.setItem("stickyArray", JSON.stringify(noteArray)); // noteArray = object uit local storage + toevoeging push
      }

      console.log("🤩");
    }
  }, {
    key: "remove",
    value: function remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      var list = document.querySelector("#taskList");

      var listindex = _toConsumableArray(list.childNodes).indexOf(this); // childNodes laad 1 vr 1 li in een array // indexOf geeft plaatst van li weer in array


      console.log(listindex + " huh?");
      document.querySelector("#taskList").removeChild(this);
      var noteArray = JSON.parse(localStorage.getItem("stickyArray"));
      noteArray.splice(listindex, 1);
      localStorage.setItem("stickyArray", JSON.stringify(noteArray)); // noteArray = object uit local storage + zonder verwijderde list adhv splice
    }
  }]);

  return Note;
}();

var App = /*#__PURE__*/function () {
  // voegt nieuwe notes toe
  function App() {
    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!");
    this.txtTodo = document.querySelector("#taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this)); //bind() houdt this gekoppeld aan de constructor (let app vanonder)

    this.loadNotesFromStorage(); // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    // this.txtTodo = ???
    // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    // this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      if (localStorage.getItem("stickyArray") !== null) {
        var storageInput = JSON.parse(localStorage.getItem("stickyArray"));

        for (var i = 0; i < storageInput.length; i++) {
          var stickyStorage = new Note(storageInput[i]); // storageInput[i] geeft title/inhoud

          stickyStorage.add();
        }
      }
    }
  }, {
    key: "createNote",
    value: function createNote(e) {
      // this function should create a new note by using the Note() class
      // HINT🤩
      // clear the text field with .reset in this class
      if (e.key === "Enter") {
        e.preventDefault();
        var textinput = this.txtTodo.value;
        var newSticky = new Note(textinput);
        newSticky.add();
        newSticky.saveToStorage();
        this.reset();
        console.log("hi", this.txtTodo.value);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value = "";
      console.log(this.txtTodo.value, "ok?");
    }
  }]);

  return App;
}();

var app = new App(); // uitvoering classes