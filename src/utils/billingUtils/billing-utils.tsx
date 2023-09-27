import Customer from "../../utils/classes/customer";
import CreditCard from "../../utils/classes/credit-card";
import Bill from "../../utils/classes/bill";

export const generateBill = (formDataArray, cart) => {
    let actualDate = new Date();
    let day = actualDate.getDate().toString().padStart(2, '0');
    let month = (actualDate.getMonth() + 1).toString().padStart(2, '0'); // El mes se cuenta desde 0, por eso se suma 1
    let year = actualDate.getFullYear().toString();

    // Crear la cadena con el formato deseado
    let formattedDate = `${day}/${month}/${year}`;

    let customer = new Customer(formDataArray[0].nombre, formDataArray[0].apellido, formDataArray[0].direccion, formDataArray[0].email, formDataArray[0].telefono);
    let creditCardInfo = new CreditCard(formDataArray[1].cardNumber, formDataArray[1].securityCode, formDataArray[1].expirationDate);
    let bill = new Bill(generateBillNumber(), formattedDate, customer, cart, creditCardInfo);
    bill.calculateTotal();
    
    return bill;
}

export const generateBillNumber = () => {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = Math.floor(Math.random() * 10000); // Genera un número aleatorio de 0 a 9999
    let letter = letters.charAt(Math.floor(Math.random() * letters.length)); // Elige una letra aleatoria
    
    // Completa con ceros a la izquierda si el número es menor a 1000
    let numeroFactura = numbers.toString().padStart(4, '0');
    
    return numeroFactura + letter;
}
