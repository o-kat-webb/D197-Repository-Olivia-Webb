import { Component } from '@angular/core';
import { WorldBankService } from '../world-bank';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-map',
  standalone: true,
  styleUrl: './map.css',
  templateUrl: './map.html',
})
export class MapComponent {
  countryData: any = null;

  constructor(private worldBankService: WorldBankService) {}

  onCountryClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const countryCode = target.id; 

    console.log('Clicked element ID:', countryCode);

    if (countryCode) {
      this.worldBankService.getCountryData(countryCode).subscribe((response: any) => {
        if (response && response[1] && response[1][0]) {
          const data = response[1][0];
          this.countryData = {
            name: data.name,
            capital: data.capitalCity,
            region: data.region.value,
            incomeLevel: data.incomeLevel.value,
            regionCode: data.region?.id || 'N/A',
            lendingType: data.lendingType.value
          };
        }
      });
    }
   }
  }
