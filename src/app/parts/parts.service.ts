import { Injectable } from "@angular/core"
import{ Part } from "./parts"


@Injectable({
    providedIn: 'root'
})

export class PartService {
    PARTS: Part[] = [
        {
            id: 1,
            name: 'polia',
            vehicle: 'Ford Focus',
            liquid: 1.22,
            gross: 1.72,
        },
        {
            id: 2,
            name: 'impulsor',
            vehicle: 'Ford Focus',
            liquid: 2.25,
            gross: 2.73,
        },
    ]
    addProduct(part: Part){
        this.PARTS.push(part)
        return this.PARTS
    }
    retrieveAll(): Part[]{
        return this.PARTS
    }
}