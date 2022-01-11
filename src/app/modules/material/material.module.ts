import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
const modules = [MatToolbarModule, MatIconModule, MatButtonModule, 
  MatDividerModule,
  MatCardModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...modules],
  ],
  exports: [modules]
})
export class MaterialModule { }
