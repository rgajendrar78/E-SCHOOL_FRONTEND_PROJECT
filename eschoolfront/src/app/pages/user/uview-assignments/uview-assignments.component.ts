import { Component } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-uview-assignments',
  templateUrl: './uview-assignments.component.html',
  styleUrls: ['./uview-assignments.component.css']
})
export class UviewAssignmentsComponent {
  assignmentList:any=[{headerName: 'TITLE', field: 'title' },
  {headerName: 'DESCRIPTION', field: 'emaildescription' },
  ];
  columnDefs = [{headerName: 'TITLE', field: 'title' },
{headerName: 'DESCRIPTION', field: 'description' },

];
  assignment={
    email:''
  }
constructor(private _assignment:AssignmentService){}
  ngOnInit(): void {
  
    this._assignment.findAssignment(this.assignment).subscribe((data:any)=> {
      console.log('Response',data);
      //css
      this.assignmentList=data;
      console.log('Assignment',this.assignmentList);
      

    },
    (error)=>{
      //
      console.log(error);
      alert("server error");
      
    }
    );
  }
  
}
