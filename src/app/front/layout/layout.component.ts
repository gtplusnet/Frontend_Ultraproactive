import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-layout',
templateUrl: './layout.component.html',
styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

constructor() { }

ngOnInit() 
{
	this.header_fixed();
}

	header_fixed(): void
	{
		// When the user scrolls the page, execute myFunction 
		window.onscroll = function() {myFunction()};

		// Get the header
		var header = document.getElementById("pageHeader");

		// Get the offset position of the navbar
		var sticky = header.offsetTop;

		// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
		function myFunction() 
		{
			if (window.pageYOffset > sticky) 
			{
				header.classList.add("sticky");
			} 

			else 
			{
				header.classList.remove("sticky");
			}
		}
	}
}
