import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
  isSidebarOpen = false;
  isMobile: boolean = false;
  isCadastroOpen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.menu) {
      if (this.isSidebarOpen) {
        this.menu.nativeElement.style.display = 'none';
      } else {
        this.menu.nativeElement.style.display = 'flex';
      }
    }
  }

  toggleCadastro(): void {
    this.isCadastroOpen = !this.isCadastroOpen;
  }
}
