"use strict";
//Here's my contact class
class Contact {
  constructor(name, email, phone, relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

//Here's my address book class
class AddressBook {
    constructor() {
    this.contacts = [];   
    }
    
//Method
add(info){
    let newContact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newContact);
    console.log(this.contacts);
}
    
//Method
removeAt(index) {
 this.contacts.splice(index, 1);
    }
    
//Method
  print() {
     console.log(this.contacts);
  }
}

const address = new AddressBook();

//While Loop
while (true){
let greeting = prompt("Would you like to add, remove, print, or quit?");
  if (greeting === "add") {
    let info = {
      name: prompt("Enter a name"),
      email: prompt("Enter an email"),
      phone: prompt("Enter a phone number"),
      relation: prompt("Enter relation")
    };
    
      address.add(info);
  }
    
  if (greeting === "remove") {
      let removeGreeting = prompt ("Which number would you like to delete?");
      address.removeAt(removeGreeting);
  }
    
  if (greeting === "print") {
    address.print();
  }
    
  if (greeting === "quit") {
    console.log ("Byeeeee");
      break;
  }
}















