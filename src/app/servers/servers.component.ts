import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: [ './servers.component.css' ]
})
export class ServersComponent implements OnInit {
	allowServer = false;
	serverCreationStatus = 'No server was created!';
  serverName = 'Hello';
  serverCreated = false;

servers = ['TestServer 1', 'TestServer 2', 'TestServer 3'];

	constructor() {
		setTimeout(() => {
			this.allowServer = true;
		}, 2000);
	}

	ngOnInit() {}

	onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);

		this.serverCreationStatus = 'new server has been created!';
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
  }
}
