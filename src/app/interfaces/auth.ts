export interface Auth {
  idusers: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  latitude: number;
  longitude: number;
  birthday: Date;
  province_idprovince: number;
  delete_users: number;
  Gender_idGender: number;
  contacts_idcontacts: number;
  created_at: Date;
  updated_at: Date;
}

export interface Provinces {
  idprovince: number;
  name_province: string;
}

export interface DataToke {
  user_id: number;
  user_role: string;
  exp: number;
  iat: number;
}
