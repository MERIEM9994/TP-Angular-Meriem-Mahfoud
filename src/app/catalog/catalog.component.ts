import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products = [
    { 
      id: 1, 
      name: 'Téléphone Apple iPhone 13', 
      quantity: 15, 
      price: 999,
      image: 'assets/images/iphone13.jpg' 
    },
    { 
      id: 2, 
      name: 'Téléphone Samsung Galaxy S21', 
      quantity: 12, 
      price: 799,
      image: 'assets/images/sumsung-galaxy-s21.png' 
    },
    { 
      id: 3, 
      name: 'Télévision LG OLED 55 pouces', 
      quantity: 11, 
      price: 1499,
      image: 'assets/images/teleLG.png' 
    },
    { 
      id: 4,
      name: 'Tablette Samsung Galaxy Tab S7',
      quantity: 8,
      price: 649,
      image: 'assets/images/tab-s7.png' 
    }
  ];

  selectedProduct: any = null;

  showDetails(product: any) {
    this.selectedProduct = product;
    console.log('Produit sélectionné:', product); // Debug
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder.png';
    img.onerror = null;
  }
}