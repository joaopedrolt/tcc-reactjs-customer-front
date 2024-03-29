import { Customer } from "./Customer";
import { Driver } from "./Driver";
import { Truck } from "./Truck";

export type OrderAdd = {
    desc: string;
    weight: number;
    addressin: string;
    cepin: string;
    addressout: string;
    cepout: string;
    customer: {
        _id: string;
        name: string;
        email: string;
        cnpj: string;
    }
}

export type Order = {
    _id: string;
    desc: string;
    weight: number;
    addressin: string;
    cepin: string;
    addressout: string;
    cepout: string;
    status: boolean;
    statusdesc: string;
    driver?: Driver;
    truck?: Truck;
    customer: Customer;
    price?: number;
    distance?: string;
    accepted: boolean;
    finished: boolean;
}
