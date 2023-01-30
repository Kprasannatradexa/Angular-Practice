import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';


class HideAfterContext {
  public get $implicit() {
    return this.hideAfter
  };
  public hideAfter = 1000;
  public counter = 5000;
}
@Directive({
  selector: '[hideAfter]'
})

export class HideAfterDirective implements OnInit {

  // @Input('hideAfter')
  // set(value: number | null) {
  //   this._delay = value ?? 0;
  //   this.context.hideAfter = this.context.counter = this._delay / 1000;
  // }

  // private _delay = 0;

  @Input('hideAfter') delay = 0;


  @Input('hideAfterThen') showSection: TemplateRef<any> | null = null;

  private context = new HideAfterContext();

  constructor(
    private containerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    this.containerRef.createEmbeddedView(this.templateRef, this.context);

    const setIntervalId = setInterval(() => {
      this.context.counter--
    })

    setTimeout(() => {
      this.containerRef.clear();
      clearInterval(setIntervalId);
      if (this.showSection) {
        this.containerRef.createEmbeddedView(this.showSection);
      }
    }, this.delay)

  }

  // static ngTemplateContextGuard(dir:HideAfterContext,ctx:unknown):ctx is HideAfterContext{
  //   return true
  // }

}
