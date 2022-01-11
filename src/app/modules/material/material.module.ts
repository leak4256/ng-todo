import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
const modules = [MatToolbarModule, 
  MatIconModule,
  MatDialogModule,
  MatButtonModule, 
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
