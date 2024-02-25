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
  coordinate: {
    latitude: number;
    longitude: number;
  };
};
export type GroupCreateParams = {
  // id: number;
  imageUri?: string;
  hashtag?: {text: string}[];
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
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title?: string;
};
