import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';
// import swal from 'sweetalert';
@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {
  assignmentList:any=[{headerName: 'TITLE', field: 'title' },
  {headerName: 'DESCRIPTION', field: 'emaildescription' },
  ];
  columnDefs = [{headerName: 'TITLE', field: 'title' },
{headerName: 'DESCRIPTION', field: 'description' },

];
  assignment: any;
constructor(private _assignment:AssignmentService){}
  ngOnInit(): void {
  
    this._assignment.assignments().subscribe((data:any)=> {
      console.log('Response',data);
      //css
      this.assignmentList=data;
      console.log('assignments',this.assignmentList);
    },
    (error)=>{
      //
      console.log(error);
      alert("server error");
      
    }
    );
  }
  

}
