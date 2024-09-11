import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DbzAddCharacterComponent } from './components/add-character/add-character.component';
import { DbzListComponent } from './components/list/list.component';
import { DbzMainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    DbzAddCharacterComponent,
    DbzListComponent,
    DbzMainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzMainPageComponent,
  ]
})
export class DbzModule { }
