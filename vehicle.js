
class Vehicle {

    constructor(id, name, vehicleType, owner) {
        this.id = id;
        this.name = name;
        this.vehicleType = vehicleType;
        this.owner = owner;
    }

    drive() {
        console.log(`Vehicle ${this.name} is driving`);
    }
}

export default Vehicle;

