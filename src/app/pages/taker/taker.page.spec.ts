import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakerPage } from './taker.page';

describe('TakerPage', () => {
  let component: TakerPage;
  let fixture: ComponentFixture<TakerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
