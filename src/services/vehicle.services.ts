import VehicleModel from "../models/vehicle.model";
import { Vehicle } from "../interfaces/vehicle.interface";

const getAll = async() => {
    const response = await VehicleModel.findAll();
    return response;
}

const getById = async(id: string) => {
    const vehicleExists = await VehicleModel.findByPk(id);
    if (!vehicleExists) return "VEHICLE_NOT_FOUND";
    return vehicleExists;
}

const getByOwnerId = async(id: string) => {
    const response = await VehicleModel.findAll({where: {OwnerId: id}});
    return response;
}

const create = async(vehicle: Vehicle) => {
    const response = await VehicleModel.create({
        Brand: vehicle.Brand,
        Model: vehicle.Model,
        MaximumSpeed: vehicle.MaximumSpeed,
        Consumption: vehicle.Consumption,
        Dimensions: vehicle.Dimensions,
        Weight: vehicle.Weight,
        CarClass: vehicle.CarClass,
        Transmission: vehicle.Transmission,
        TimeType: vehicle.TimeType,
        RentalCost: vehicle.RentalCost,
        PickUpPlace: vehicle.PickUpPlace,
        UrlImage: vehicle.UrlImage,
        RentStatus: vehicle.RentStatus,
        OwnerId: vehicle.OwnerId,
        IsActive: 1
    });
    return response;
}

const _delete = async(id: string) => {
    const vehicleExists = await VehicleModel.findByPk(id);
    if (!vehicleExists) return "VEHICLE_NOT_FOUND"
    const response = await vehicleExists.destroy();
    return response;
}

export {getAll, getById, getByOwnerId, _delete, create};