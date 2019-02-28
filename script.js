class AddressBook {
    constructor(contacts) {
      this.contacts = contacts;
    }

    add(contact) {
      this.contacts.push(contact);
    }

    deleteAt(index) {
      this.contacts.splice(index, 1);
      }
    
    print() {
      let index = 1
      console.group('printing Address Book');
        for (const contact of this.contacts) {
        console.log(index, contact);
        index++;
    }   
    console.groupEnd();
  }
}

class Contact {
    constructor(name, email, phone, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
}

const myAddressBook = new AddressBook ([new Contact('Ian', 'ian@gmail.com', '313-123-456', 'bae'), new Contact ('Kat','kat@gmail.com', '313-123-4577', 'sister')]);
console.log(myAddressBook);


while(true) {
const response = prompt('Would you like to add, delete, print or quit?'); 

    if (response === 'quit') {
      break;
      console.log('Farewell.');

    } else if(response === 'add') {
      const name = prompt('Name?');
      const email = prompt('Email address?')
      const phone = prompt('Phone number?')
      const relation = prompt('Relation?')
      const contact = new Contact(name, email, phone, relation);
        myAddressBook.add(contact);

    } else if(response === 'delete') {
      const index = prompt('Index to delete?')
        myAddressBook.deleteAt(index);

    } else if(response === 'print') {
        myAddressBook.print();
    }
}


