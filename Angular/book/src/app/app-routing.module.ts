import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracBookComponent } from './components/carac-book/carac-book.component';
import { ListBookComponent } from './components/list-book/list-book.component';

const routes: Routes = [
  { path: '', component: ListBookComponent},
  { path: 'book/:id', component: CaracBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
