import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: false,
  templateUrl: './person.html',
  styles: ``,
})
export class PersonComponent implements OnInit {
  public id!: number;
  public idTekst!: string;

  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(x=> {
      const id = x['id'];
      this.idTekst = this.id;

      const idNumber = parseInt(id);
      if (!isNaN(idNumber)) {
        this.id = idNumber;
      } else {
          this.id = -1;
      }
      this.id = parseInt(id);
    });     
  }

}