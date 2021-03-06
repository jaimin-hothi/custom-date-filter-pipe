import { Component, Pipe, PipeTransform } from '@angular/core';
import  *  as  data  from  './json/user.json';
import { FilterDatePipe } from './shared/filterDate.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

    ngOnInit(){
    console.log("Data::"+JSON.stringify(data));
 let dataJson:any;
    dataJson=data;
    let filterPipe = new FilterDatePipe();
     let selectFromDate = "2-1-2020";
        let selectToDate = "5-1-2020";

        let filterData = filterPipe.transform(dataJson.user,  selectFromDate, selectToDate,"created_date");
        console.log("Filter Data::"+JSON.stringify(filterData));

  }
}
