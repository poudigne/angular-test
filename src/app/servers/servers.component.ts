import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus = 'No server was created!';

  serverName='testserver';

  username='';
  constructor() {
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' +  this.serverName ;
  }

  onUpdateServerName(event:any){
    this.serverName = event.target.value;

  }
  
}
