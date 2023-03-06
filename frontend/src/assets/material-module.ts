import { NgModule } from "@angular/core";



import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule} from '@angular/material/select'
import { MatCheckboxModule} from '@angular/material/checkbox'
import { MatTableModule} from '@angular/material/table'
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatSortModule} from '@angular/material/sort'
import { MatDialogModule } from '@angular/material/dialog'
import { MatRadioModule } from '@angular/material/radio'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMenuModule





  ]
})
export class MaterialModule {

}
