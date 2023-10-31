import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface PeriodicElement {
  position: number;
  name: string;
  persona: string;
  veiculo: string;
  data: string;
  horarioEntrada: string;
  horarioSaida: string;
}

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  position: number = 0;
  name?: string;
  persona?: string;
  veiculo?: string;
  data?: string;
  horarioEntrada?: string;
  horarioSaida?: string;

  displayedColumns: string[] = ['position', 'name', 'persona', 'veiculo', 'data', 'horarioEntrada', 'horarioSaida'];

  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', persona: '1.0079', veiculo: 'H', data: '2023-10-30', horarioEntrada: '09:00 AM', horarioSaida: '05:00 PM' },
];
