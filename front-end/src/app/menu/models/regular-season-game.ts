export interface DetailReagularSeasonGame {
    id: number;
    Quarter: string;
    homescore: string;
    awayscore: string;
}

export interface ReagularSeasonGame {
    id: number;
    gamedate: string;
    teamhome:string;
    scorehome:string;
    scoreaway:string;
    teamaway:string;
    overtimes:string;
    recap: string;
    detail: DetailReagularSeasonGame[];
}