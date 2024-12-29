import Vehicle from "./vehicle.js";
import ParkingManager from "./parkingManager.js";
import { PAYMENT_TYPE_BANK, PAYMENT_TYPE_CC, VEHICLE_TYPE_TRUCK } from "./constants.js";
import VehicleOwner from "./VehicleOwner.js";
import PaymentMethod from "./paymentMethod.js";

function main() {
    const manager = new ParkingManager();

    const vehicle1 = new Vehicle(1, "CRV", VEHICLE_TYPE_TRUCK);
    const vehicle2 = new Vehicle(2, "SWIFT", VEHICLE_TYPE_TRUCK);
    const vehicle3 = new Vehicle(3, "CIVIC", VEHICLE_TYPE_TRUCK);

    // const park1 = manager.parkVehicle(vehicle1, 1, 4);
    // console.log(park1);
    // const park2 = manager.parkVehicle(vehicle2, 1, 4);
    // console.log(park2);
    // const park3 = manager.parkVehicle(vehicle3, 1, 4);
    // console.log(park3);

    // // exit vehicle 2
    // console.log(manager.exitVehicle(vehicle2, 4));

    // console.log(manager.parkVehicle(vehicle3, 1, 4));

    const ownerCard = new PaymentMethod(PAYMENT_TYPE_CC, { "cardNumber": "123", "expiry": "01/26", "cvv": "321" }, 300);
    const ownerBank = new PaymentMethod(PAYMENT_TYPE_BANK, { "accountNumber": "87654321", "name": "Abc" }, 100);

    const owner1 = new VehicleOwner(1, "Anita", ownerBank);
    //const vehicle1 = new Vehicle(1, "CRV", VEHICLE_TYPE_TRUCK, owner1);
    console.log(manager.parkVehicle(vehicle1, 1, 4));
    console.log(ownerBank.printBalance());
}

main();
