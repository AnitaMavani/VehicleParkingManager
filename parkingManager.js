import { PARKING_SPOT_TYPE_BIKE, PARKING_SPOT_TYPE_COMPACT, PARKING_SPOT_TYPE_LARGE } from "./constants.js";
import ParkingCharge from "./parkingCharge.js";
import ParkingSpot from "./parkingSpot.js";
import PaymentManager from "./paymentManager.js";
import { vehicleToParkingSpot } from "./utils.js";
import Invoice from "./invoice.js";

class ParkingManager {

    constructor() {
        this.chargeManager = new ParkingCharge();
        this.paymentManager = new PaymentManager();
        this.invoice = new Invoice();

        this.availableSpots = {
            [PARKING_SPOT_TYPE_BIKE]: [
                new ParkingSpot(1, 1, PARKING_SPOT_TYPE_BIKE),
                new ParkingSpot(2, 2, PARKING_SPOT_TYPE_BIKE),
                new ParkingSpot(3, 3, PARKING_SPOT_TYPE_BIKE),

                new ParkingSpot(4, 4, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(5, 5, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(6, 6, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(7, 7, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(8, 8, PARKING_SPOT_TYPE_COMPACT),

                new ParkingSpot(9, 9, PARKING_SPOT_TYPE_LARGE),
                new ParkingSpot(10, 10, PARKING_SPOT_TYPE_LARGE),
            ],
            [PARKING_SPOT_TYPE_COMPACT]: [
                new ParkingSpot(4, 4, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(5, 5, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(6, 6, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(7, 7, PARKING_SPOT_TYPE_COMPACT),
                new ParkingSpot(8, 8, PARKING_SPOT_TYPE_COMPACT),
            ],
            [PARKING_SPOT_TYPE_LARGE]: [
                new ParkingSpot(9, 9, PARKING_SPOT_TYPE_LARGE),
                new ParkingSpot(10, 10, PARKING_SPOT_TYPE_LARGE),
            ]
        };

        this.occupiedSpots = {};
    }

    parkVehicle(vehicle, startTime, endTime) {
        const parkingSpot = vehicleToParkingSpot(vehicle.vehicleType);
        if (!parkingSpot) {
            return "No parking spot available";
        }

        const availableSpot = this.availableSpots[parkingSpot]?.[0];
        if (!availableSpot) {
            return "No parking spot available";
        }

        // Charge the customer
        const charge = this.chargeManager.calculate(availableSpot, startTime, endTime);

        //payment
        const isPaid = this.paymentManager.process(vehicle.owner.name, vehicle.owner.paymentMethod, charge);
        if (!isPaid) {
            return "Payment failed";
        }
        const generateInvoice = this.invoice.printInvoice(vehicle.owner.name, vehicle.owner.paymentMethod, charge);
        if (!generateInvoice) {
            return `failes to generate invoice`;
        }
        availableSpot.markOccupied();
        // TODO - Move to new class called "ParkingSpotAssignment"
        this.occupiedSpots[vehicle.id] = { "spot": availableSpot, startTime, endTime, charge };
        this.availableSpots[parkingSpot] = this.availableSpots[parkingSpot].filter((s) => s.id !== availableSpot.id);
        return `Vehicle ${vehicle.name} is parked on spot ${availableSpot.spotNumber}`;

    }

    exitVehicle(vehicle, endTime) {
        const occupiedSpotInfo = this.occupiedSpots[vehicle.id];
        if (!occupiedSpotInfo) {
            return `Vehicle ${vehicle.name} was not parked`;
        }

        // if endtime exceeds
        // TODO

        const occupiedSpot = occupiedSpotInfo["spot"];
        occupiedSpot.markAvailable();
        delete this.occupiedSpots[vehicle.id];
        this.availableSpots[occupiedSpot.spotType] = [...this.availableSpots[occupiedSpot.spotType], occupiedSpot];
        return `Vehicle ${vehicle.name} is released from spot ${occupiedSpot.spotNumber}`;
    }
}

export default ParkingManager;

