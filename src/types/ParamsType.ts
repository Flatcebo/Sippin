export type ByRegionContentsParams = {
  title: string;
};

export type ContentParams = {
  id: number;
  title: string;
  address: string;
  category: string;
  chat: number;
  heart: number;
  desc: string;
  imageUri: string;
  reviewImageUri: string;
  menu: [];
  backVisible?: boolean;
};

export type ReserveOrderListParams = {
  title: string;
};

export type MenuParams = {
  title: string;
};

export type MyInfoModifyParams = {
  // address: string;
};

export type MapViewParams = {
  address: string;
  title: string;
};
