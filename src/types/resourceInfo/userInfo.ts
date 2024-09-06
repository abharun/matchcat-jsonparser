interface GeoInfo {
  lat: string;
  lng: string;
}

interface AddressInfo {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInfo;
}

interface CompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInfo;
  phone: string;
  website: string;
  company: CompanyInfo;
}
