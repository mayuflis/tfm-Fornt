export interface TeacherCard {
    idusers: number;
    name: string;
    last_name: string;
    email: string;
    role: string;
    latitude: number;
    longitude: number;
    birthday: Date;
    name_province: string;
    image?: string;
    description_prof: string;
    title_prof?: string;
    description_class?: string;
    arraySubjects: [
        {
            level: number;
            free_class?: number;
            subject_name: string;
        }
    ]
}
