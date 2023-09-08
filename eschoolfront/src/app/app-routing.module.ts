import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssignmentComponent } from './pages/admin/add-assignment/add-assignment.component';
import { AddAttendanceComponent } from './pages/admin/add-attendance/add-attendance.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateStudentComponent } from './pages/admin/update-student/update-student.component';
import { ViewAssignmentComponent } from './pages/admin/view-assignment/view-assignment.component';
import { ViewAttendanceComponent } from './pages/admin/view-attendance/view-attendance.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentsComponent } from './pages/students/students.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UviewAssignmentsComponent } from './pages/user/uview-assignments/uview-assignments.component';
import { UviewTestresultComponent } from './pages/user/uview-testresult/uview-testresult.component';
import { UviewTimetableComponent } from './pages/user/uview-timetable/uview-timetable.component';
import { ViewTestresultComponent } from './pages/admin/view-testresult/view-testresult.component';
import { AddTestresultComponent } from './pages/admin/add-testresult/add-testresult.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { SuperadminWelcomeComponent } from './pages/superadmin/superadmin-welcome/superadmin-welcome.component';
import { SuperadminDashboardComponent } from './pages/superadmin/superadmin-dashboard/superadmin-dashboard.component';
import { SuperadminSidebarComponent } from './pages/superadmin/superadmin-sidebar/superadmin-sidebar.component';
import { SuperViewtimetableComponent } from './pages/superadmin/super-viewtimetable/super-viewtimetable.component';
import { SuperAddtimetableComponent } from './pages/superadmin/super-addtimetable/super-addtimetable.component';
import { SearchStudentComponent } from './pages/admin/search-student/search-student.component';
import { UserStatusComponent } from './pages/superadmin/user-status/user-status.component';
import { UpdateUserstatusComponent } from './pages/superadmin/update-userstatus/update-userstatus.component';

const routes: Routes = [

{
  path:'admin',
  component:SuperadminDashboardComponent,
  children:[
    {
      path:'',
      component:SuperadminWelcomeComponent,
    },
    {
      path:'timetables',
      component:SuperViewtimetableComponent,
    },
    {
      path:'add-timetables',
      component:SuperAddtimetableComponent,
    },
    {
      path:'signup',
      component:SignupComponent,
    },
    {
      path:'users',
      component:UserStatusComponent,
    },
    {
      path:'userupdate',
      component:UpdateUserstatusComponent,
    },
    

   
  ]
},

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
     path:'teacher',
     component:DashboardComponent,
     
     children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'students',
        component:StudentsComponent,
      },
      {
        path:'assignments',
        component:ViewAssignmentComponent,
      },
      {
        path:'add-assignment',
        component:AddAssignmentComponent,
      },
      {
        path:'attendances',
        component:ViewAttendanceComponent,
      },
      {
        path:'add-attendance',
        component:AddAttendanceComponent,
      },
      {
        path:'update-student',
        component:UpdateStudentComponent,
      },
      {
        path:'view-testresult',
        component:ViewTestresultComponent,
      },
      {
        path:'add-testresult',
        component:AddTestresultComponent,
      },
      {
        path:'search-student',
        component:SearchStudentComponent,
      },
     ]},
     
    {
      path:'student',
      component:UserDashboardComponent,
      children:[
        {

          path:'',
          component:WelcomeUserComponent
        },
        {
          path:'user-profile',
          component:UserProfileComponent,
        },
        {
          path:'uview-timetable',
          component:UviewTimetableComponent,
        },
        {
          path:'uview-assignments',
          component:UviewAssignmentsComponent,
        },
        {
          path:'uview-testresult',
          component:UviewTestresultComponent,
        },
        
        ]
    },
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
