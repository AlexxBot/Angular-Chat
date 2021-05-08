import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CamaraComponent } from './components/camara/camara.component';
import { ChatComponent } from './components/chat/chat.component';
import { ImagenComponent } from './components/imagen/imagen.component';

const routes: Routes = [
  /* {
    path: "", component: AppComponent
  }, */
  {
    path: "chat", component: ChatComponent
  },
  {
    path: "camara", component: CamaraComponent
  },
  {
    path: "imagen", component: ImagenComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
