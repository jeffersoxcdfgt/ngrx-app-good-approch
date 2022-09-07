import { OnDestroy, Directive } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class UnsubscribeComponent implements OnDestroy {

  private destroyedSubject$: Subject<boolean> = new Subject<boolean>();
  protected destroyed$: Observable<boolean>;

  protected constructor() {
    this.destroyed$ = this.destroyedSubject$.asObservable();
  }

  ngOnDestroy(): void {
    this.destroyedSubject$.next(true);
    this.destroyedSubject$.complete();

    if (this.onUnsubscribe) { this.onUnsubscribe(); }
  }

  // Overridable for ngOnDestory
  onUnsubscribe() {}
}
