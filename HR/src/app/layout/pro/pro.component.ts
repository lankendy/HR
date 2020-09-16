import {
  Component,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy,
  Inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, RouteConfigLoadStart, NavigationError, NavigationStart } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { updateHostClass } from '@delon/util';
import { ScrollService, Menu, MenuService, SettingsService } from '@delon/theme';
import { ReuseTabService } from '@delon/abc';
import { environment } from '@env/environment';

import { ProSettingDrawerComponent } from './setting-drawer/setting-drawer.component';
import { BrandService } from './pro.service';

import { NavigationService, UserService, UserRightService } from '../../services';

import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'layout-pro',
  templateUrl: './pro.component.html',
})
export class LayoutProComponent implements OnInit, AfterViewInit, OnDestroy {
  get isMobile() {
    return this.pro.isMobile;
  }

  get getLayoutStyle() {
    const { isMobile, fixSiderbar, collapsed, menu, width, widthInCollapsed } = this.pro;
    if (fixSiderbar && menu !== 'top' && !isMobile) {
      return {
        paddingLeft: (collapsed ? widthInCollapsed : width) + 'px',
      };
    }
    return null;
  }

  get getContentStyle() {
    const { fixedHeader, headerHeight } = this.pro;
    return {
      margin: '24px 24px 0',
      'padding-top': (fixedHeader ? headerHeight : 0) + 'px',
    };
  }

  private get body(): HTMLElement {
    return this.doc.body;
  }

  constructor(
    bm: BreakpointObserver,
    mediaMatcher: MediaMatcher,
    private router: Router,
    msg: NzMessageService,
    scroll: ScrollService,
    reuseTabSrv: ReuseTabService,
    private resolver: ComponentFactoryResolver,
    private el: ElementRef,
    private renderer: Renderer2,
    public pro: BrandService,
    private menuSrv: MenuService,
    private navigationService: NavigationService,
    private userService: UserService,
    private settings: SettingsService,
    @Inject(DOCUMENT) private doc: any, // private cdr: ChangeDetectorRef
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {
    // scroll to top in change page
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
      if (evt instanceof NavigationStart) {
        // console.log('NavigationStart: ' + evt.url);
        // this.checkRedirectToHome(evt.url);
        // msg.success(`load ${evt.url} routing`, { nzDuration: 1000 * 3 });
      }
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
        scroll.scrollToTop();
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        msg.error(`Can't load ${evt.url} routing`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.isFetching = false;
      // If have already cached router, should be don't need scroll to top
      if (!reuseTabSrv.exists(evt.url)) {
        scroll.scrollToTop();
      }
    });

    // media
    const query = {
      'screen-xs': '(max-width: 575px)',
      'screen-sm': '(min-width: 576px) and (max-width: 767px)',
      'screen-md': '(min-width: 768px) and (max-width: 991px)',
      'screen-lg': '(min-width: 992px) and (max-width: 1199px)',
      'screen-xl': '(min-width: 1200px)',
    };
    bm.observe([
      '(min-width: 1200px)',
      '(min-width: 992px) and (max-width: 1199px)',
      '(min-width: 768px) and (max-width: 991px)',
      '(min-width: 576px) and (max-width: 767px)',
      '(max-width: 575px)',
    ]).subscribe(() => {
      this.queryCls = Object.keys(query).find(key => mediaMatcher.matchMedia(query[key]).matches);
      this.setClass();
    });
  }
  private unsubscribe$ = new Subject<void>();
  private queryCls: string;
  @ViewChild('settingHost', { read: ViewContainerRef, static: false }) private settingHost: ViewContainerRef;

  isFetching = false;

  listUrlAllow: string[] = [];

  private setClass() {
    const { body, renderer, queryCls, pro } = this;
    updateHostClass(body, renderer, {
      ['color-weak']: pro.layout.colorWeak,
      [`layout-fixed`]: pro.layout.fixed,
      [`aside-collapsed`]: pro.collapsed,
      ['alain-pro']: true,
      [queryCls]: true,
      [`alain-pro__content-${pro.layout.contentWidth}`]: true,
      [`alain-pro__fixed`]: pro.layout.fixedHeader,
      [`alain-pro__wide`]: pro.isFixed,
      [`alain-pro__dark`]: pro.theme === 'dark',
      [`alain-pro__light`]: pro.theme === 'light',
    });
  }

  ngAfterViewInit(): void {
    // Setting componet for only developer
    if (!environment.production) {
      setTimeout(() => {
        const settingFactory = this.resolver.resolveComponentFactory(ProSettingDrawerComponent);
        this.settingHost.createComponent(settingFactory);
      }, 22);
    }
  }

  ngOnInit() {
    const { pro, unsubscribe$ } = this;
    pro.notify.pipe(takeUntil(unsubscribe$)).subscribe(() => {
      this.setClass();
    });
    this.loadMenu();
  }

  ngOnDestroy() {
    const { unsubscribe$, body, pro } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
    body.classList.remove(
      `alain-pro__content-${pro.layout.contentWidth}`,
      `alain-pro__fixed`,
      `alain-pro__wide`,
      `alain-pro__dark`,
      `alain-pro__light`,
    );
  }

  loadMenu() {
    this.menuSrv.clear();
    // init menu
    // TODO: duongpd fix menu
    const lstMenu = [
      {
        name: 'Trang chủ',
        code: 'menu.dashboard',
        iconClass: 'anticon anticon-dashboard',
        urlRewrite: '',
      },
      {
        name: 'Nhân viên',
        code: 'menu.nhan-vien',
        iconClass: 'anticon anticon-database',
        urlRewrite: '',
        subChild: [
          {
            name: 'Tất cả nhân viên',
            code: 'menu.catalog-manager.all-nhan-vien',
            iconClass: '',
            urlRewrite: 'catalog/nhom-loai-cong-trinh',
          }
        ],
      },
      {
        name: 'Lương',
        code: 'menu.luong',
        iconClass: 'anticon anticon-database',
        urlRewrite: '',
        subChild: [
          {
            name: 'Lương cứng',
            code: 'menu.luong-cung',
            iconClass: '',
            urlRewrite: 'catalog/nhom-loai-cong-trinh',
          }
        ],
      },
      {
        name: 'Hóa đơn',
        code: 'menu.hoa-don',
        iconClass: 'anticon anticon-database',
        urlRewrite: '',
        subChild: [
          {
            name: 'Báo cáo hóa đơn theo ngày',
            code: 'menu.hoa-don-ngay',
            iconClass: '',
            urlRewrite: 'connection/bao-cao-chat-luong-nuoc',
          },
        ],
      },
      {
        name: 'Tài khoản',
        code: 'menu.tai-khoan',
        iconClass: 'anticon anticon-database',
        urlRewrite: '',
        subChild: [
          {
            name: 'Phân quyền',
            code: 'menu.tai-khoan.phan-quyen',
            iconClass: '',
            urlRewrite: 'connection/bao-cao-chat-luong-nuoc',
          },
        ],
      },
      
    ];
    const itemMenu = lstMenu.find(x => x.code == 'menu.connection-manager');
    if(this.settings.user.right.indexOf("FF01") >= 0 || this.settings.user.right.indexOf("FF02") >= 0) {
      if(itemMenu && itemMenu.subChild) {
        itemMenu.subChild.push({
          name: 'Kết nối chờ phê duyệt',
          code: 'menu.connection-manager.connection-pending',
          iconClass: '',
          urlRewrite: 'connection/yeu-cau-ket-noi/danh-sach/waiting-approve',

        });
        itemMenu.subChild.push({
          name: 'Kết nối đã phê duyệt',
          code: 'menu.connection-manager.connection-approved',
          iconClass: '',
          urlRewrite: 'connection/yeu-cau-ket-noi/danh-sach/approved',
        });
        itemMenu.subChild.push({
          name: 'Tra cứu',
          code: 'menu.connection-manager.tra-cuu',
          iconClass: '',
          urlRewrite: 'connection/yeu-cau-ket-noi/danh-sach/tra-cuu',
        });
      }
    } else {
      if(itemMenu && itemMenu.subChild) {
        itemMenu.subChild.push({
          name: 'Yêu cầu kết nối',
          code: 'menu.connection-manager.connection-request',
          iconClass: '',
          urlRewrite: 'connection/yeu-cau-ket-noi',
        });
      }
    }

    const rootMenu = [
      {
        text: 'Trang chủ',
        i18n: 'menu.main',
        group: true,
        hideInBreadcrumb: true,
        children: this.initMenu(lstMenu, ''),
      },
    ];
    this.menuSrv.add(rootMenu);

    // this.navigationService.getNavigationOwner().subscribe((navigation: any) => {
    //   // console.log(navigation);
    //   const menu = [
    //     {
    //       text: 'Trang chủ',
    //       i18n: 'menu.main',
    //       group: true,
    //       hideInBreadcrumb: true,
    //       children: this.initMenu(navigation.data, ''),
    //     },
    //   ];
    //   this.menuSrv.add(menu);
    //   this.checkRedirectToHome(this.router.url);
    // });
  }

  checkRedirectToHome(url: string) {
    if (url !== '') {
      let check = false;
      for (const item of this.listUrlAllow) {
        if (item === url) {
          check = true;
          break;
        }
      }
      if (!check) {
        this.router.navigateByUrl('');
      }
    }
  }

  initMenu(navigation: any[], link: string): any[] {
    const length: number = navigation.length;
    const menu: any[] = [];
    let menuItem: any = {};

    for (let i = 0; i < length; i += 1) {
      menuItem = {
        text: navigation[i].name,
        i18n: navigation[i].code,
        icon: navigation[i].iconClass,
      };
      menuItem.link = link;
      if (
        navigation[i].urlRewrite !== null &&
        navigation[i].urlRewrite !== undefined &&
        navigation[i].urlRewrite !== ''
      ) {
        menuItem.link = link + '/' + navigation[i].urlRewrite;
      }
      if (
        navigation[i].subChild !== null &&
        navigation[i].subChild !== undefined &&
        navigation[i].subChild.length > 0
      ) {
        menuItem.children = this.initMenu(navigation[i].subChild, menuItem.link);
      }
      if (menuItem.link !== '') {
        this.listUrlAllow.push(menuItem.link);
      }
      menu.push(menuItem);
    }
    return menu;
  }
}
