export const staticPath = {
  // định mức nguyên liệu
  PRODUCTION_BOM: 'product/bom',
  PRODUCTION_BOM_CREATE: 'product/bom/create',
  PRODUCTION_BOM_DETAIL: 'product/bom/detail',
  // mẫu định mức
  PRODUCTION_BOM_TEMP: 'product/bom-template',
  PRODUCTION_BOM_TEMP_CREATE: 'product/bom-template/create',
  PRODUCTION_BOM_TEMP_DETAIL: 'product/bom-template/detail',
  // quản lý sản phẩm
  PRODUCTION_PRODUCT: 'product/template',
  PRODUCTION_PRODUCT_CREATE: 'product/template/create',
  PRODUCTION_PRODUCT_DETAIL: 'product/template/detail',
  // quy trình sản xuất
  PRODUCTION_ROUTING: 'product/routing',
  PRODUCTION_ROUTING_CREATE: 'product/routing/create',
  PRODUCTION_ROUTING_DETAIL: 'product/routing/detail',
  // năng lực sản xuất
  PRODUCTION_WORKCENTER: 'product/workcenter',
  PRODUCTION_WORKCENTER_CREATE: 'product/workcenter/create',
  PRODUCTION_WORKCENTER_DETAIL: 'product/workcenter/detail',

  // kho hàng
  STOCK_WAREHOUSE: 'stock-warehouse',
  STOCK_WAREHOUSE_CREATE: 'stock-warehouse/create',
  STOCK_WAREHOUSE_DETAIL: 'stock-warehouse/detail',
  STOCK_WAREHOUSE_UPDATE: 'stock-warehouse/update',
  // danh mục vị trí
  POSITION: 'position/all',
  //   POSITION: 'position/all',
  // Lệnh sản xuất
  PRODUCT_MANUFACTURE_CREATE: 'product/manufacture/create',
  PRODUCT_MANUFACTURE_CREATE_BOM_TEMP: 'product/manufacture/create-by-bom-temp',
  PRODUCT_MANUFACTURE: 'product/manufacture',
  PRODUCT_MANUFACTURE_DETAIL: 'product/manufacture/detail',
  PRODUCT_MANUFACTURE_DETAIL_BOM_TEMP: 'product/manufacture/detail-with-bom-temp',
  PRODUCT_MANUFACTURE_ACTION: 'product/manufacture/action',
  PRODUCT_MANUFACTURE_ACTION_DETAIL: 'product/manufacture/action/detail',
  PRODUCT_MANUFACTURE_ACTION_CREATE_SEMI_FINISH: 'product/manufacture/action/create-semi-finish',
  PRODUCT_WORK_ORDER_DETAIL_FROM_ALL: 'product/work-order/detail',
  PRODUCT_WORK_ORDER: 'product/work-order',
  PRODUCT_MANUFACTURE_MOVE_LINE: 'product/manufacture/stock-move-line',
  PRODUCT_MANUFACTURE_MOVE_LINE_DETAIL: 'product/manufacture/stock-move-line/detail',
  // stock invenrory
  PROD_STOCK_INVENTORY_CREATE_MATERIAL: 'product/manufacture/stock-inventory/material/create',
  PROD_STOCK_INVENTORY_CREATE_FINISHED: 'product/manufacture/stock-inventory/finished/create',
  PROD_STOCK_INVENTORY_CREATE_REVERSE: 'product/manufacture/stock-inventory/reverse/create',
  PROD_STOCK_INVENTORY_DETAIL_REVERSE: 'product/manufacture/stock-inventory/reverse/detail',
  PROD_STOCK_INVENTORY_REVERSE: 'product/manufacture/stock-inventory/reverse',
  PROD_STOCK_INVENTORY_CREATE_SCRAP: 'product/manufacture/stock-inventory/scrap/create',
  PROD_STOCK_INVENTORY_CREATE_SEMI_FINISHED: 'product/manufacture/stock-inventory/semi-finish/create',
  PROD_STOCK_INVENTORY_LIST_MATERIA: 'product/manufacture/stock-inventory/material',
  PROD_STOCK_INVENTORY_LIST_SEMI_FINISHED: 'product/manufacture/stock-inventory/semi-finished',
  PROD_STOCK_INVENTORY_LIST_FINISHED: 'product/manufacture/stock-inventory/finished',
  PROD_STOCK_INVENTORY_LIST_SCRAP: 'product/manufacture/stock-inventory/scrap',
  STOCK_INVENTORY_LIST_MATERIA: 'product/stock-inventory/material',
  STOCK_INVENTORY_LIST_FINISHED: 'product/stock-inventory/finished',
  STOCK_INVENTORY_LIST_MATERIAL_DETAIL: 'product/stock-inventory/material/detail',
  STOCK_INVENTORY_LIST_FINISHED_DETAIL: 'product/stock-inventory/finished/detail',
  STOCK_INVENTORY_LIST_SCRAP_DETAIL: 'product/stock-inventory/scrap/detail',
  STOCK_INVENTORY_DETAIL_MATERIAL: 'product/stock-inventory/material/detail',
  STOCK_INVENTORY_DETAIL_FINISHED: 'product/stock-inventory/finished/detail',
  STOCK_INVENTORY_DETAIL_SCRAP: 'product/stock-inventory/scrap/detail',
  PROD_STOCK_INVENTORY_DETAIL_SEMI_FINISH: 'product/manufacture/stock-inventory/semi-finished/detail',
  PROD_STOCK_INVENTORY_DETAIL_MATERIAL: 'product/manufacture/stock-inventory/material/detail',
  PROD_STOCK_INVENTORY_DETAIL_FINISHED: 'product/manufacture/stock-inventory/finished/detail',
  PROD_STOCK_INVENTORY_DETAIL_SCRAP: 'product/manufacture/stock-inventory/scrap/detail',
  UOMUOM: 'uomuom',
  UOMUOM_CREATE: 'uomuom/create',
  UOMUOM_DETAIL: 'uomuom/detail',

  // mua hàng
  PURCHASE_ORDER: 'purchase/purchase-order',
  PURCHASE_ORDER_CREATE: 'purchase/purchase-order/create',
  PURCHASE_ORDER_DETAIL: 'purchase/purchase-order/detail',
  PURCHASE_ORDER_STOCK_PICKING: 'purchase/purchase-order/stock-picking/detail',
  PURCHASE_STOCK_PIICKING_LIST: 'purchase/stock-picking',
  PURCHASE_STOCK_PIICKING_DETAIL: 'purchase/stock-picking/good-received/detail',
  PURCHASE_ORDER_STOCK_PICKING_DETAIL: 'purchase/purchase-order/stock-picking/detail',
  PURCHASE_ORDER_STOCK_PICKING_LIST: 'purchase/purchase-order/stock-picking',
  PURCHASE_ORDER_STOCK_REVERSE_DETAIL: 'purchase/purchase-order/stock-picking/reverse/detail',
  PURCHASE_ORDER_STOCK_REVERSE_CREATE: 'purchase/purchase-order/stock-picking/reverse/create',
  PURCHASE_STOCK_PICKING_REVERSE_CREATE: 'purchase/stock-picking/good-received/reverse/create',
  PURCHASE_STOCK_PICKING_REVERSE: 'purchase/stock-picking/good-received/reverse',
  PURCHASE_STOCK_PICKING_REVERSE_DETAIL: 'purchase/stock-picking/reverse/detail',
  PURCHASE_ORDER_STOCK_PICKING_REVERSE: 'purchase/purchase-order/stock-picking/reverse',
  // bán hàng
  SALE_ORDER: 'sale/sale-order',
  SALE_ORDER_CREATE: 'sale/sale-order/create',
  SALE_ORDER_DETAIL: 'sale/sale-order/detail',
  SALE_QUOTA: 'sale/sale-quota',
  SALE_QUOTA_CREATE: 'sale/sale-quota/create',
  SALE_QUOTA_DETAIL: 'sale/sale-quota/detail',
  SALE_ORDER_STOCK_PICKING_DETAIL: 'sale/sale-order/stock-picking/detail',
  SALE_ORDER_STOCK_REVERSE_DETAIL: 'sale/sale-order/stock-picking/reverse/detail',
  SALE_ORDER_STOCK_REVERSE_CREATE: 'sale/sale-order/stock-picking/reverse/create',
  SALE_STOCK_PICKING_REVERSE_CREATE: 'sale/stock-picking/reverse/good-delivery/create',
  SALE_STOCK_PICKING_REVERSE: 'sale/stock-picking/good-delivery/reverse',
  SALE_STOCK_PICKING_REVERSE_DETAIL: 'sale/stock-picking/good-delivery/reverse/detail',
  SALE_ORDER_STOCK_REVERSE: 'sale/sale-order/stock-picking/reverse',
  SALE_STOCK_PICKING: 'sale/sale-order/stock-picking',
  SALE_STOCK_PICKING_LIST: 'sale/stock-picking/good-delivery',
  SALE_STOCK_PICKING_DETAIL: 'sale/stock-picking/good-delivery/detail',

  /// DANH MỤC HỆ THỐNG
  // Danh mục nhóm sản phẩm
  PRODUCT_CATEGORY: 'catalog/product-category',
  PRODUCT_CATEGORY_CREATE: 'catalog/product-category/create',
  PRODUCT_CATEGORY_DETAIL: 'catalog/product-category/detail',
  // nhóm đơn vị tính
  UOM_CATEGORY: 'catalog/uom-category',
  UOM_CATEGORY_CREATE: 'catalog/uom-category/create',
  UOM_CATEGORY_DETAIL: 'catalog/uom-category/detail',
  // đơn vị tính
  UOM_UOM: 'catalog/uom-uom',
  UOM_UOM_CREATE: 'catalog/uom-uom/create',
  UOM_UOM_DETAIL: 'catalog/uom-uom/detail',
  // Quốc gia
  RES_COUNTRY: 'catalog/res-country',
  RES_COUNTRY_CREATE: 'catalog/res-country/create',
  RES_COUNTRY_DETAIL: 'catalog/res-country/detail',
  // Tỉnh/Thành phố
  RES_COUNTRY_STATE: 'catalog/res-country-state',
  RES_COUNTRY_STATE_CREATE: 'catalog/res-country-state/create',
  RES_COUNTRY_STATE_DETAIL: 'catalog/res-country-state/detail',
  // Loại trạm
  LOAI_TRAM: 'catalog/loai-tram',
  LOAI_TRAM_CREATE: 'catalog/loai-tram/create',
  LOAI_TRAM_DETAIL: 'catalog/loai-tram/detail',
  // Loại công trình
  LOAI_CONG_TRINH: 'catalog/loai-cong-trinh',
  LOAI_CONG_TRINH_CREATE: 'catalog/loai-cong-trinh/create',
  LOAI_CONG_TRINH_DETAIL: 'catalog/loai-cong-trinh/detail',
  // Loại nhóm công trình
  NHOM_LOAI_CONG_TRINH: 'catalog/nhom-loai-cong-trinh',
  NHOM_LOAI_CONG_TRINH_CREATE: 'catalog/nhom-loai-cong-trinh/create',
  NHOM_LOAI_CONG_TRINH_DETAIL: 'catalog/nhom-loai-cong-trinh/detail',
  // Đơn vị tính
  DON_VI_TINH: 'catalog/don-vi-tinh',
  DON_VI_TINH_CREATE: 'catalog/don-vi-tinh/create',
  DON_VI_TINH_DETAIL: 'catalog/don-vi-tinh/detail',
  // Loại hình giấy phép
  LOAI_HINH_GIAY_PHEP: 'catalog/loai-hinh-giay-phep',
  LOAI_HINH_GIAY_PHEP_CREATE: 'catalog/loai-hinh-giay-phep/create',
  LOAI_HINH_GIAY_PHEP_DETAIL: 'catalog/loai-hinh-giay-phep/detail',
  // Tần xuất
  TAN_XUAT: 'catalog/tan-xuat',
  TAN_XUAT_CREATE: 'catalog/tan-xuat/create',
  TAN_XUAT_DETAIL: 'catalog/tan-xuat/detail',
  // Yêu cầu kết nối
  YEU_CAU_KET_NOI: 'connection/yeu-cau-ket-noi/danh-sach',
  YEU_CAU_KET_NOI_PENDING: 'connection/yeu-cau-ket-noi/danh-sach/waiting-approve',
  YEU_CAU_KET_NOI_CREATE: 'connection/yeu-cau-ket-noi/create',
  YEU_CAU_KET_NOI_DETAIL: 'connection/yeu-cau-ket-noi/detail',
  YEU_CAU_KET_NOI_DETAIL_V2: 'connection/yeu-cau-ket-noi/detail',

  // Yêu cầu kết nối
  BAO_CAO_CHAT_LUONG: 'connection/bao-cao-chat-luong-nuoc',
  BAO_CAO_CHAT_LUONG_LIST: 'connection/bao-cao-chat-luong-nuoc/list',
  BAO_CAO_CHAT_LUONG_CREATE: 'connection/bao-cao-chat-luong-nuoc/create',
  BAO_CAO_CHAT_LUONG_DETAIL: 'connection/bao-cao-chat-luong-nuoc/detail',
  BAO_CAO_CHAT_LUONG_EDIT: 'connection/bao-cao-chat-luong-nuoc/edit',

  //login
  LOGIN: 'passport/login',
  REGISTER: 'passport/register',
  FORGOT_PASSWORD: 'passport/forgot-password',
  // Nhập liệu định kỳ
  NHAP_LIEU_DINH_KY: 'quan-ly-quan-trac-dinh-ky/nhap-lieu-dinh-ky',
  NHAP_LIEU_DINH_KY_LIST: 'quan-ly-quan-trac-dinh-ky/nhap-lieu-dinh-ky/list',
  NHAP_LIEU_DINH_KY_CREATE: 'quan-ly-quan-trac-dinh-ky/nhap-lieu-dinh-ky/create',
  NHAP_LIEU_DINH_KY_DETAIL: 'quan-ly-quan-trac-dinh-ky/nhap-lieu-dinh-ky/detail',
  NHAP_LIEU_DINH_KY_EDIT: 'quan-ly-quan-trac-dinh-ky/nhap-lieu-dinh-ky/edit',

   // Khai thác nước mặt
   KHAI_THAC_NUOC_MAT: 'quan-ly-du-lieu/khai-thac-nuoc-mat',
   KHAI_THAC_NUOC_MAT_CREATE: 'quan-ly-du-lieu/khai-thac-nuoc-mat/create',
   KHAI_THAC_NUOC_MAT_DETAIL: 'quan-ly-du-lieu/khai-thac-nuoc-mat/detail',
   KHAI_THAC_NUOC_MAT_EDIT: 'quan-ly-du-lieu/khai-thac-nuoc-mat/edit',
};
