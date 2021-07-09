import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Part } from './parts';
import { PartService } from './parts.service';

@Component({
    selector: 'app-parts',
    templateUrl: './parts.component.html',
    styleUrls: ['./parts.component.css']
})
export class PartsComponent implements AfterViewInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort ;
    
    displayedColumns: string[] = ['id', 'name', 'vehicle', 'liquid', 'gross'];
    dataSource: MatTableDataSource<Part>;
    filteredParts: Part[] = [];
    _parts: Part[] = [];
    _filterBy: string = '';

    productForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
        vehicle: new FormControl('', [Validators.required, Validators.maxLength(200)]),
        liquidW: new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]),
        grossW: new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]),
    });

    constructor(private partService: PartService) { 
        this._parts = this.partService.retrieveAll()
        this.dataSource = new MatTableDataSource(this._parts)
    }

    ngAfterViewInit(){
       
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    }
    onSubmit() {
        let part: Part;

        if (this.productForm.valid) {
            console.log(this.productForm.value)
            this.productForm.value['id'] = 3
            part = this.productForm.value
            this.partService.addProduct(part)
            
        }else{
            console.log('deu ruim')
        }    
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
}

