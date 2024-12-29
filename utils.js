import { VEHICLE_PARKING_SPOT_TYPES } from "./constants.js"

export const vehicleToParkingSpot = (vehicleType) => {
    return VEHICLE_PARKING_SPOT_TYPES[vehicleType];
}