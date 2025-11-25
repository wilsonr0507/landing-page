import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  nombre = '';
  telefono = '';
  mensaje = '';

  enviarWhatsApp() {
    const numero = "573228479168"; // <-- TU NÚMERO AQUÍ
    
    const texto = `Hola, soy ${this.nombre}.
Mi teléfono es ${this.telefono}.
Necesito: ${this.mensaje}.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

}
