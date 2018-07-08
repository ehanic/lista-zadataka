import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatListModule,
  MatToolbarModule,
  MatDialogModule
} from '@angular/material';
import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { HeaderComponent } from './header/header.component';
import { TaskService } from './services/task.service';
import { FormsModule } from '../../node_modules/@angular/forms';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfTasksComponent,
    AddNewTaskComponent,
    HeaderComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent]
})
export class AppModule { }
