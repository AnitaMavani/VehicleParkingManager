

class ParkingSpot {
    constructor(id, spotNumber, spotType) {
        this.id = id;
        this.spotNumber = spotNumber;
        this.spotType = spotType;
        this.occupied = false;
    }

    markOccupied() {
        this.occupied = true;
    }

    markAvailable() {
        this.occupied = false;
    }
}

export default ParkingSpot;

