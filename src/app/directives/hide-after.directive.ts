import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective implements OnInit {

  @Input('appHideAfter') delay = 0;

  @Input('appHideAfterThen') showSection: TemplateRef<any> | null = null;


  constructor(
    private containerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    this.containerRef.createEmbeddedView(this.templateRef);

    setTimeout(() => {
      this.containerRef.clear();
      if (this.showSection) {
        this.containerRef.createEmbeddedView(this.showSection);
      }
    }, this.delay)

  }

}
