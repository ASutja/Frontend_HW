// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

// const book = {
//     contacts: [
//         {
//             name: "Serhii",
//             phone: "+380999999999",
//             email: "example@email.com",
//         },
//     ],
//     find: function (name) {
//         for (const contact of this.contacts) {
//             if (contact.name === name) {
//                 return contact; 
//             }
//         }
//         return null; 
//     },
//     add: function (contact) {
//         this.contacts.push(contact); 
//     },
// };

// const foundContact = book.find("Serhii");
//     if (foundContact) {
//         console.log("Found contact:", foundContact);
//     } 
//     else {
//         console.log("Contact not found.");
//     }

// const newContact = {
//     name: "Bob",
//     phone: "+380911111111",
//     email: "anna@example.com",
// };
// book.add(newContact);
// console.log("Book after adding new contact:", book.contacts);




// ** Створіть функцію конструктор на базі якої будуть створені обʼєкти книг контактів

const contacts = [
    {
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
];

function Contact({ name, phone, email }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts;
}

Book.prototype.find = function (name) {
    
    for (const contact of this.contacts) {
        if (contact.name === name) {
            return contact; 
        }
    }
    return null; 
};

Book.prototype.add = function (contact) {
    this.contacts.push(contact); 
};

const mappedContacts = contacts.map((el) => {
    return new Contact(el);
});

const book = new Book(mappedContacts);

console.log(book);
