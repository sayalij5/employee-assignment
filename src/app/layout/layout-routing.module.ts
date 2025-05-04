import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
   {path:'',component:LayoutComponent,
  children:[
    
    { path:'employee',loadChildren:()=>import('../employee-module/employee.module').then((m)=>m.EmployeeModule)},
    {path:'note',loadChildren:()=>import('../note/note.module').then((m)=>m.NoteModule)},
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
      component:HeaderComponent
    },
  ]  
  }
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
