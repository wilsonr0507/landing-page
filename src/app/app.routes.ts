import { Routes } from '@angular/router';
import { Services } from './components/services/services';
import { Hero } from './components/hero/hero';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path:'', 
      component: Hero },
    { path:'servicios', 
      component: Services },
      { path:'contacto', 
      component: Contact },
      { path:'inicio', 
      component: Hero }
      
];
