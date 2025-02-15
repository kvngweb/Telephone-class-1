// Step 1: Create the Telephone class
class Telephone {
    constructor() {
        this.phoneNumbers = new Set(); // Store phone numbers
        this.observers = new Set(); // Store observers
    }

    // Step 2: Add a phone number to the set
    AddPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
    }

    // Step 3: Remove a phone number from the set
    RemovePhoneNumber(phoneNumber) {
        this.phoneNumbers.delete(phoneNumber);
    }

    // Step 4: Dial a phone number and notify observers
    DialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            console.log(`Dialing ${phoneNumber}...`);
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    }

    // Step 5: Observer pattern methods
    AddObserver(observer) {
        this.observers.add(observer);
    }

    RemoveObserver(observer) {
        this.observers.delete(observer);
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }
}

// Step 6: Create an Observer class
class Observer {
    constructor(name) {
        this.name = name;
    }

    update(phoneNumber) {
        console.log(`${this.name}: ${phoneNumber}`);
    }
}

// Step 7: Create a Telephone instance
const phone = new Telephone();

// Step 8: Create observers
const observer1 = new Observer("Observer 1");
const observer2 = {
    update: (phoneNumber) => console.log(`Now Dialling ${phoneNumber}`)
};

// Step 9: Add observers to the telephone class
phone.AddObserver(observer1);
phone.AddObserver(observer2);

// Step 10: Add phone numbers
phone.AddPhoneNumber("2347023232");
phone.AddPhoneNumber("1234567890");

// Step 11: Dial a number and notify observers
phone.DialPhoneNumber("2347023232");
