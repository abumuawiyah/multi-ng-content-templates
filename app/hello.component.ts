import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Content 1</h1>
    <ng-container *ngTemplateOutlet="content1"></ng-container>

    <h1>Content 2</h1>
    <ng-container *ngTemplateOutlet="content2"></ng-container>

    <h1>Regular transclusion also works</h1>
    <ng-content></ng-content>

    Component content
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @ContentChild('content1') content1: TemplateRef<any>; 
  @ContentChild('content2') content2: TemplateRef<any>; 
}
