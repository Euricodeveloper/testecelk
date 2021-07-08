import { Injectable } from "@angular/core"
import{ Part } from "./parts"


@Injectable({
    providedIn: 'root'
})

export class PartService {
    retrieveAll(): Part[]{
        return PARTS
    }
};

var PARTS: Part[] = [
    {
        id: 1,
        name: 'polia',
        vehicle: 'Ford Focus',
        liquid: 1.200,
        gross: 1.700,
    },
    {
        id: 2,
        name: 'impulsor',
        vehicle: 'Ford Focus',
        liquid: 2.200,
        gross: 2.700,
    },
]