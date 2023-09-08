import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { StudentsComponent } from './pages/students/students.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddAssignmentComponent } from './pages/admin/add-assignment/add-assignment.component';
import { ViewAssignmentComponent } from './pages/admin/view-assignment/view-assignment.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewAttendanceComponent } from './pages/admin/view-attendance/view-attendance.component';
import { AddAttendanceComponent } from './pages/admin/add-attendance/add-attendance.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdateStudentComponent } from './pages/admin/update-student/update-student.component';
import {MatTableModule} from '@angular/material/table';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UviewAssignmentsComponent } from './pages/user/uview-assignments/uview-assignments.component';
import { UviewTestresultComponent } from './pages/user/uview-testresult/uview-testresult.component';
import { UviewTimetableComponent } from './pages/user/uview-timetable/uview-timetable.component';
import { UserNavbarComponent } from './pages/user/user-navbar/user-navbar.component';
import { AddTestresultComponent } from './pages/admin/add-testresult/add-testresult.component';
import { AgGridModule } from 'ag-grid-angular';
import { ViewTestresultComponent } from './pages/admin/view-testresult/view-testresult.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { SuperadminNavbarComponent } from './pages/superadmin/superadmin-navbar/superadmin-navbar.component';
import { SuperadminSidebarComponent } from './pages/superadmin/superadmin-sidebar/superadmin-sidebar.component';
import { SuperadminDashboardComponent } from './pages/superadmin/superadmin-dashboard/superadmin-dashboard.component';
import { SuperadminWelcomeComponent } from './pages/superadmin/superadmin-welcome/superadmin-welcome.component';
import { SuperAddtimetableComponent } from './pages/superadmin/super-addtimetable/super-addtimetable.component';
import { SuperViewtimetableComponent } from './pages/superadmin/super-viewtimetable/super-viewtimetable.component';
import { SearchStudentComponent } from './pages/admin/search-student/search-student.component';
import { UserStatusComponent } from './pages/superadmin/user-status/user-status.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateUserstatusComponent } from './pages/superadmin/update-userstatus/update-userstatus.component';
@NgModule({
  
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    StudentsComponent,
    WelcomeComponent,
    ViewAssignmentComponent,
    AddAssignmentComponent,
    AddAttendanceComponent,
   ViewAttendanceComponent,
   UpdateStudentComponent,
   UserProfileComponent,
   UserSidebarComponent,
   UviewAssignmentsComponent,
   UviewTestresultComponent,
   UviewTimetableComponent,
   UserNavbarComponent,
   ViewTestresultComponent,
   AddAssignmentComponent,
   AddTestresultComponent,
   WelcomeUserComponent,
   SuperadminNavbarComponent,
   SuperadminSidebarComponent,
   SuperadminDashboardComponent,
   SuperadminWelcomeComponent,
   SuperAddtimetableComponent,
   SuperViewtimetableComponent,
   SearchStudentComponent,
   UserStatusComponent,
   UpdateUserstatusComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    AgGridModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
