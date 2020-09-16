export class BaoCaoChatLuongNuocDetailModel {
  id: string;
  giayPhep_ID: string;
  iD_GiayPhep: number;
  soGiayPhep: string;
  loaiHinh_GP: number;
  tramQuanTrac_ID: string;
  tenTramQuanTrac: string;
  phuongPhapLayMau_ID: string;
  phuongPhapLayMau_Name: string;
  tenBC_CLN_TTC: string;
  kyHieu: string;
  donViThucHien: string;
  dotQuanTrac: string;
  ngayLayMau: Date;
  ngayTraKetQua: Date;
  nguoiLayMau: string;
  nguoiGiamSat: string;
  ghiChu: string;
  trangThai: number
  baoCaoChatLuongNuocDetailKQQTModels: BaoCaoChatLuongNuocDetailKQQTModel[];
}

export class BaoCaoChatLuongNuocDetailKQQTModel {
  donViTinh: string;
  giaTri: number;
  id: string;
  kyHieu: string;
  soSanh: string;
  thongSoQuanTrac: string;
  thongSo_ID: number;
}

export class BaoCaoChatLuongNuocTTCModel {
  giayPhep_ID: string;
  tramQuanTrac_ID: string;
  tenBC_CLN_TTC: string;
  nguoiLayMau: string;
  kyHieu: string;
  nguoiGiamSat: string;
  donViThucHien: string;
  phuongPhapLayMau_ID: string;
  dotQuanTrac: string;
  ngayLayMau: Date;
  ngayTraKetQua: Date;
  ghiChu: string;
  trangThai: number;
  baoCaoChatLuongNuocRequestModels: BaoCaoChatLuongNuocKQQTModel[];
}

export class BaoCaoChatLuongNuocKQQTModel {
  bC_CLN_TTC_ID: string;
  thongSo_ID: number;
  donViTinh: string;
  soSanh: string = "=";
  giaTri: number;
  gioihan_Max: number = 0;
  gioihan_Min: number = 0;
}

export class BaoCaoChatLuongNuocThongSoViewModel {
  id: number;
  kyHieu: string;
  tenThongSo: string;
  donViTinh: BaoCaoChatLuongNuocDonViTinhViewModel;
  gioiHan_Max: number;
  gioiHan_Min: number;
}

export class BaoCaoChatLuongNuocDonViTinhViewModel {
  id: number;
  tenDonViTinh: string;
  kyHieu: string;
  moTa: string;
  trangThai: number;
}
