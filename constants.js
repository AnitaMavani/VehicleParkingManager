export const PARKING_SPOT_TYPE_BIKE = "bike";
export const PARKING_SPOT_TYPE_COMPACT = "compact";
export const PARKING_SPOT_TYPE_LARGE = "large";

export const VEHICLE_TYPE_BIKE = "bike";
export const VEHICLE_TYPE_CAR = "car";
export const VEHICLE_TYPE_TRUCK = "truck";

export const VEHICLE_PARKING_SPOT_TYPES = {
    [VEHICLE_TYPE_BIKE]: PARKING_SPOT_TYPE_BIKE,
    [VEHICLE_TYPE_CAR]: PARKING_SPOT_TYPE_COMPACT,
    [VEHICLE_TYPE_TRUCK]: PARKING_SPOT_TYPE_LARGE
}

export const PAYMENT_TYPE_CC = 'cc';
export const PAYMENT_TYPE_BANK = 'bank';