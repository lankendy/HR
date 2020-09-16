// import  from './constant';
import { environment } from '@env/environment';
export const ProductRouter = {
  Create: 'api/product/create',
};
export const ResourceCalendar = {
  GetListResourceCalendar: `api/v${environment.API_VERSION}/mrp/resource_calendar/getlist`,
};
export const configurationRouter = {
  selectdata: `api/v${environment.API_VERSION}/mrp/configuration/search_data`,
  sysParams: `api/v${environment.API_VERSION}/mrp/configuration/sys_params`,
};
export const nodeUploadRouter = {
  nodeUploadBlob: `api/v${environment.API_VERSION}/core/nodes/upload/physical/blob`,
};
export const authenticationRouter = {
  getToken: `v${environment.API_VERSION}/authentication/jwt/login`,
  getLoginInfo: `v${environment.API_VERSION}/authentication/jwt/info`,
  forgotPassword: `v${environment.API_VERSION}/authentication/forgotpassword`,
  registerUser: `v${environment.API_VERSION}/authentication/register`,
  validateToken: `v${environment.API_VERSION}/authentication/recoverpassword`,
  changePassword: `v${environment.API_VERSION}/authentication/recoverpassword`,
};
export const navigationRouter = {
  getNavigationOwner: `api/v${environment.API_VERSION}/bsd/navigations/owner`,
};
export const resCountryRouter = {
  getListResCountry: `v${environment.API_VERSION}/country`,
  createResCountry: `api/v${environment.API_VERSION}/mrp/res-country/create`,
  getResCountryById: `api/v${environment.API_VERSION}/mrp/res-country/detail`,
  editResCountry: `api/v${environment.API_VERSION}/mrp/res-country/edit`,
  deleteResCountry: `api/v${environment.API_VERSION}/mrp/res-country/delete/many`,
};
export const resCountryStateRouter = {
  getListResCountryState: `api/v${environment.API_VERSION}/mrp/res-country-state/list`,
  createResCountryState: `api/v${environment.API_VERSION}/mrp/res-country-state/create`,
  getResCountryStateById: `api/v${environment.API_VERSION}/mrp/res-country-state/detail`,
  editResCountryState: `api/v${environment.API_VERSION}/mrp/res-country-state/edit`,
  deleteResCountryState: `api/v${environment.API_VERSION}/mrp/res-country-state/delete/many`,
};
export const idmUser = {
  getListRight: `api/v${environment.API_VERSION}/idm/users/`,
  filter: `api/v${environment.API_VERSION}/idm/users/filter`,
};
export const trackingRouter = {
  listTracking: `api/v${environment.API_VERSION}/bsd/logs`,
};
export const noticeRouter = {
  getAllNoticeByUser: `api/v${environment.API_VERSION}/sys/notices/get-by-user`,
  markAsReadNoticeByUser: `api/v${environment.API_VERSION}/sys/notices/mark-as-read`,
};
export const nhomLoaiCongTrinhRouter = {
  getFilter: `v${environment.API_VERSION}/catalog/nhom-loai-cong-trinh`,
  createNhomLoaiCongTrinh: `v${environment.API_VERSION}/catalog/nhom-loai-cong-trinh`,
  getNhomLoaiCongTrinhById: `v${environment.API_VERSION}/catalog/nhom-loai-cong-trinh`,
  editNhomLoaiCongTrinh: `v${environment.API_VERSION}/catalog/nhom-loai-cong-trinh`,
  deleteNhomLoaiCongTrinh: `v${environment.API_VERSION}/catalog/nhom-loai-cong-trinh/delete/many`,
};
export const loaiCongTrinhRouter = {
  getFilter: `v${environment.API_VERSION}/catalog/loai-cong-trinh`,
  createLoaiCongTrinh: `v${environment.API_VERSION}/catalog/loai-cong-trinh`,
  getLoaiCongTrinhById: `v${environment.API_VERSION}/catalog/loai-cong-trinh`,
  editLoaiCongTrinh: `v${environment.API_VERSION}/catalog/loai-cong-trinh`,
  deleteLoaiCongTrinh: `v${environment.API_VERSION}/catalog/loai-cong-trinh/delete/many`,
  getListFilter: `v${environment.API_VERSION}/catalog/loai-cong-trinh/filter`
};
export const loaiTramRouter = {
  getFilter: `v${environment.API_VERSION}/catalog/loai-tram`,
  createLoaiTram: `v${environment.API_VERSION}/catalog/loai-tram`,
  getLoaiTramById: `v${environment.API_VERSION}/catalog/loai-tram`,
  editLoaiTram: `v${environment.API_VERSION}/catalog/loai-tram`,
  deleteLoaiTram: `v${environment.API_VERSION}/catalog/loai-tram/delete/many`,
};
export const donViTinhRouter = {
  getFilter: `v${environment.API_VERSION}/catalog/don-vi-tinh`,
  createDonViTinh: `v${environment.API_VERSION}/catalog/don-vi-tinh`,
  getDonViTinhById: `v${environment.API_VERSION}/catalog/don-vi-tinh`,
  editDonViTinh: `v${environment.API_VERSION}/catalog/don-vi-tinh`,
  deleteDonViTinh: `v${environment.API_VERSION}/catalog/don-vi-tinh/delete/many`,
};
export const loaiHinhGPRouter = {
  getFilter: `v${environment.API_VERSION}/catalog/loai-hinh-giay-phep`,
  createLoaiHinhGP: `v${environment.API_VERSION}/catalog/loai-hinh-giay-phep`,
  getLoaiHinhGPById: `v${environment.API_VERSION}/catalog/loai-hinh-giay-phep`,
  editLoaiHinhGP: `v${environment.API_VERSION}/catalog/loai-hinh-giay-phep`,
  deleteLoaiHinhGP: `v${environment.API_VERSION}/catalog/loai-hinh-giay-phep/delete/many`,
};
export const tanXuatRouter = {
  getFilter: `v${environment.API_VERSION}/catalog/tan-xuat`,
  createTanXuat: `v${environment.API_VERSION}/catalog/tan-xuat`,
  getTanXuatById: `v${environment.API_VERSION}/catalog/tan-xuat`,
  editTanXuat: `v${environment.API_VERSION}/catalog/tan-xuat`,
  deleteTanXuat: `v${environment.API_VERSION}/catalog/tan-xuat/delete/many`,
};
export const thongSoRouter = {
  getFilter: `v${environment.API_VERSION}/catalog/thong-so`,
  createThongSo: `v${environment.API_VERSION}/catalog/thong-so`,
  getThongSoById: `v${environment.API_VERSION}/catalog/thong-so`,
  editThongSo: `v${environment.API_VERSION}/catalog/thong-so`,
  deleteThongSo: `v${environment.API_VERSION}/catalog/thong-so/delete/many`,
  getThongSoByTramQuanTracId: `v${environment.API_VERSION}/catalog/thong-so/get-by-tram-quan-trac-id`,
};
export const phuongXaRouter = {
  getTenPhuongXaQuanHuyenTinhThanh: `v${environment.API_VERSION}/catalog/phuong-xa/get-ten-xa-huyen-tinh`,
};
export const yeuCauKetNoiRouter = {
  getFilter: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi`,
  getFilterV2: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/get-filter`,
  createYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi`,
  createYeuCauKetNoiV2: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/createV2`,
  sendToApproveYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/send-to-approve`,
  userSendToExpert: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/send-to-approve`,
  sendToExpertYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/send-to-expert`,
  trinhPheDuyetYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/trinh-phe-duyet`,
  refreshFTPAccountYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/refresh-ftp-account`,
  approval: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/approval`,
  tuChoiYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/tu-choi`,
  ftpAccount: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/ftp-account`,
  approvedYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/approved`,
  getYeuCauKetNoiById: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi`,
  editYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi`,
  deleteYeuCauKetNoi: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/delete`,
  checkSoGiayPhep: `v${environment.API_VERSION}/connection/yeu-cau-ket-noi/thong-tin-giay-phep`,
};
export const tramQuanTracRouter = {
  getAllByGiayPhep: `v${environment.API_VERSION}/connection/tram-quan-trac/get-all-by-giay-phep`,
};
export const ftpRouter = {
  checkExist: `v${environment.API_VERSION}/ftp-user/check-exist`,
  createFtpUser: `v${environment.API_VERSION}/ftp-user`,
  getByParentId: `v${environment.API_VERSION}/ftp-user/byparent`,
  generateNewPassword: `v${environment.API_VERSION}/ftp-user/generate-new-password`,
};
export const lichSuYCKNRouter = {
  getFilter: `v${environment.API_VERSION}/connection/lich-su-yeu-cau-ket-noi`,
};

export const managerFileRouter = {
  uploadaAFile: `v${environment.API_VERSION}/files`,
  uploadMultiFile: `v${environment.API_VERSION}/files/multiple`,
  getFileByParent: `v${environment.API_VERSION}/files`,
  downloadFile: `v${environment.API_VERSION}/download`,
  deleteFile: `v${environment.API_VERSION}/files`,
  updateFile: `v${environment.API_VERSION}/files`,
  getFile: `v${environment.API_VERSION}/files`,
  getFileFilter: `v${environment.API_VERSION}/files/filter`,
  generateTokenLinkByParentId: `v${environment.API_VERSION}/download/linksByParent`,
  generateTokenLinkByDocumentId: `v${environment.API_VERSION}/download`,
};

export const metadataServiceRouter = {
  getFilter: `v${environment.API_VERSION}/metaclass/filter`,
};

export const giayPhep = {
  getFilter: `v${environment.API_VERSION}/giay-phep/filter`,
  getByUserId: `v${environment.API_VERSION}/giay-phep/get-by-user-id`,
  getById: `v${environment.API_VERSION}/giay-phep`,
  getByLicenseNo: `v${environment.API_VERSION}/giay-phep`,
  updateFtpInfo: `v${environment.API_VERSION}/giay-phep/update-ftp-info`,
};

export const tramQuanTrac = {
  getList: `v${environment.API_VERSION}/connection/tram-quan-trac/get-all-by-giay-phep`,
  getById: `v${environment.API_VERSION}/connection/tram-quan-trac`,
  getAllByGiayPhep: `v${environment.API_VERSION}/connection/tram-quan-trac/get-all-by-giay-phep`,
}

export const phuongPhapLayMauRouter = {
  getFilter: `v${environment.API_VERSION}/phuong-phap-lay-mau/filter`
}

export const baoCaoChatLuongNuocRouter = {
  getList: `v${environment.API_VERSION}/bao-cao-chat-luong-nuoc-ttc/filter`,
  getDetail: `v${environment.API_VERSION}/bao-cao-chat-luong-nuoc-ttc/get-detail`,
  getKQQT: `v${environment.API_VERSION}/bao-cao-chat-luong-nuoc-ttc/get-bao-cao-ket-qua`,
  createBaoCaoChatLuongNuoc: `v${environment.API_VERSION}/bao-cao-chat-luong-nuoc-ttc`,
  updateBaoCaoChatLuongNuoc: `v${environment.API_VERSION}/bao-cao-chat-luong-nuoc-ttc`,
  deleteManyBaoCaoChatLuongNuoc: `v${environment.API_VERSION}/bao-cao-chat-luong-nuoc-ttc/delete/many`,
  exportFile: `v${environment.API_VERSION}/bao-cao-chat-luong-nuoc-ttc/export-file`,
  readFile:`v${environment.API_VERSION}/bao-cao-chat-luong-nuoc-ttc/read-file`,
};

export const filenetReaderProfileRouter = {
  getFilter: `v${environment.API_VERSION}/reader-profile/filter`,
  create: `v${environment.API_VERSION}/reader-profile`,
  getById: `v${environment.API_VERSION}/reader-profile`,
  getByUserId: `v${environment.API_VERSION}/reader-profile/get-by-user-id`,
  update: `v${environment.API_VERSION}/reader-profile`,
  deleteMany: `v${environment.API_VERSION}/reader-profile/delete/many`,
  getCountry: `v${environment.API_VERSION}/countries`,
  getCountryByCountryCode: `v${environment.API_VERSION}/countries`,
  getProvinceByCountryCode: `v${environment.API_VERSION}/countries`,
  getWardsByCountryCode: `v${environment.API_VERSION}/countries`
};

export const nhapLieuDinhKyRouter = {
  getFilterIndicator: `v${environment.API_VERSION}/indicators/filter`,
  createMultiple: `v${environment.API_VERSION}/indicators/multiple`,
  getFilterPeriodicIndicatorHistory: `v${environment.API_VERSION}/periodic-indicator-history/filter`
};

export const indicatorRouter = {
  getList: `v${environment.API_VERSION}/indicator-monitoring/filter`,
  getIndicatorFilter: `v${environment.API_VERSION}/indicators/filter`,
};
export const khaiThacNuocMatRouter = {
  getList: `v${environment.API_VERSION}/indicator-monitoring/filter`,
}

export const countryRouter = {
  getListProvince: `v${environment.API_VERSION}/tinh-thanh`,
  getListExternalProvince: `v${environment.API_VERSION}/countries`,
  getListDistrictByProvinceId: `v${environment.API_VERSION}/quan-huyen`,
  getWardsByDistrictIdAndProvinceId: `v${environment.API_VERSION}/catalog/phuong-xa`,
}
