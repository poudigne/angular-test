import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls : ['./server.component.css']
})

export class ServerComponent  {
    serverId: number = 123;
    serverStatus: string = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }
    
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
} 
