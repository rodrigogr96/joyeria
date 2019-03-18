import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoyeriaComponent } from './joyeria/joyeria.component';

const routes: Routes = [
  {path: 'Joyeria-Aries', component: JoyeriaComponent},
  {path: '**', redirectTo: 'Joyeria-Aries',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
