import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { environment } from '@env/environment';

@Component({
  selector: 'layout-pro-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProLogoComponent {
  get name() {
    return this.setting.app.name;
  }
  get version() {
    return environment.APP_VERSION;
  }
  constructor(private setting: SettingsService) {}
}
