

class ParkingCharge {
    constructor() {
    }

    calculate(parkingSpot, startTime, endTime) {
        console.log(`parking spot: ${parkingSpot.id} , starttime: ${startTime}, endtime: ${endTime}`);
        return 30;
    }
}

export default ParkingCharge;

