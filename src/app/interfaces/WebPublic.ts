export interface TeachersWebPublic {
  name: string;
  last_name: string;
  image: string;
  description_prof: string;
  description_class: string;
  title_prof: string;
  hourly_rate: number;
  free_classl: number;
  level: number;
  experience: number;
  rate: number;
  role: string;
  province_idprovince: number;
  idsubjects: number;
}
export interface Subjects {
  idsubjects: number;
  name: string;
}
