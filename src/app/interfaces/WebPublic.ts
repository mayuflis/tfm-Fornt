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
<<<<<<< HEAD
  NumberOfStudents: number;
=======
  NumberOfStudents?: number | any;
>>>>>>> 5a970c69b3f9d3a3aac08717e81c78c71a99855e
}
