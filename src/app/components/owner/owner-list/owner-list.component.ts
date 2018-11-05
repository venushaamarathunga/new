import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../../shared/services/repository.service'
import { Owner } from './../../_interfaces/owner.model'

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  public owners: Owner[];

  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.getAllOwners();
  }
  public owner: any;

  public getAllOwners(){
    let apiAddress: string = "api/owner";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.owners = res as Owner[];
    },
    (error) =>{
        //this.handleErrors(error);
    })
  }

}
