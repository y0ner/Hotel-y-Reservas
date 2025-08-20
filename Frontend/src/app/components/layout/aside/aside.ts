import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api'; // Importante para definir el tipo de items

@Component({
  selector: 'app-aside',
  standalone: true,       // Si estás usando Angular standalone components
  imports: [ButtonModule, PanelMenuModule],
  templateUrl: './aside.html',
  styleUrls: ['./aside.css']   // corregido
})
export class Aside {
  // Aquí declaramos los items del PanelMenu
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      items: [
        { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
      ]
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-users',
      items: [
        { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
        { label: 'List Users', icon: 'pi pi-fw pi-users' }
      ]
    }
  ];
}
