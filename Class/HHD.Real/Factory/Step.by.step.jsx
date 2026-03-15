Your code is an example of the Factory Pattern.
The factory creates objects based on a type without the user needing to know the exact class. Let’s understand step by step. 👇

1️⃣ Notification Classes

You created 3 different classes.

class EmailNotification {
  send(message) {
    console.log("Email sent:", message);
  }
}


Purpose:

Send Email notification

class SMSNotification {
  send(message) {
    console.log("SMS sent:", message);
  }
}


Purpose:

Send SMS notification

class PushNotification {
  send(message) {
    console.log("Push notification sent:", message);
  }
}


Purpose:

Send mobile push notification


So we now have 3 possible notification objects.



2️⃣ Factory Class
class System{
 static createNpfication(type){


This is the Factory method.

It decides:

Which object to create


based on the input type.

3️⃣ Switch Logic
switch(type){


The factory checks the type.

Case 1: Email
case 'email':
    return new EmailNotification()


If input is:

email


Factory creates:

EmailNotification object

Case 2: SMS
case 'sms':
    return new SMSNotification()


Factory returns:

SMSNotification object

Case 3: Push
case 'push':
    return new PushNotification()


Factory returns:

PushNotification object

Default
default:
 throw new ('erro check problem')


If type is wrong:

error


Better version should be:

throw new Error("Invalid notification type")

4️⃣ Calling the Factory
let link = System.createNpfication('email')


Execution:

type = "email"


Switch runs:

case 'email'


Factory returns:

new EmailNotification()


So now:

link → EmailNotification object


Memory:

link
  ↓
EmailNotification instance

5️⃣ Calling the Method
link.send('jugal sharma')


Since link is an EmailNotification object, it calls:

EmailNotification.send()


Output:

Email sent: jugal sharma

6️⃣ Execution Flow

Step-by-step flow:

System.createNpfication("email")
           │
           ▼
switch(type)
           │
           ▼
case 'email'
           │
           ▼
new EmailNotification()
           │
           ▼
return object
           │
           ▼
link.send("jugal sharma")
           │
           ▼
Email sent: jugal sharma

7️⃣ Why Factory Pattern Is Used

Without factory:

if(type === "email") new EmailNotification()
if(type === "sms") new SMSNotification()
if(type === "push") new PushNotification()


Code becomes messy.

Factory gives:

System.createNotification(type)


Cleaner code.

8️⃣ Real World Usage

Factory pattern is used in:

Notification systems of companies like
Amazon, Uber, and Netflix.

Example:

Order Placed
      │
      ▼
Notification Factory
      │
 ┌────┼────┐
 ▼    ▼    ▼
Email SMS Push

9️⃣ Small Improvement

Correct spelling + error handling:

class NotificationFactory {

 static createNotification(type){

    switch(type){

        case 'email':
            return new EmailNotification()

        case 'sms':
            return new SMSNotification()

        case 'push':
            return new PushNotification()

        default:
            throw new Error("Invalid notification type")
    }
 }
}


✅ Interview Answer

If interviewer asks:

What is Factory Pattern?

You can say:

Factory Pattern creates objects without exposing the object creation logic to the client and returns the appropriate instance based on input.