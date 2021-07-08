import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as EventEmitter from 'events';
import { isConstructorDeclaration } from 'typescript';
import { Part } from './parts';
import { PartService } from './parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

    filteredParts: Part[] = [];

    _parts: Part[] = [];

    _filterBy: string = '';

    addProduct!: FormGroup;

    constructor(private partService: PartService, private fb: FormBuilder, private part: FormGroup){}

    ngOnInit(): void{
        this._parts = this.partService.retrieveAll();
        this.filteredParts = this._parts;
        this.addProduct = this.fb.group({
            name:['',[Validators.required,Validators.minLength(5), Validators.maxLength(200)]],
            vehicle:['',[Validators.required,Validators.minLength(5), Validators.maxLength(200)]],
            liquidW:[''],
            grossW:[''],
        })
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredParts = this._parts.filter((part: Part)=> part.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }
}

