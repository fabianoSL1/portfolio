export interface Employment {
    company: string;
    role: string;
    startAt: Date;
    description?: string;
    endAt?: Date;
}

export const mockEmployment: Employment[] = [
    {
        company: 'NeoSyx',
        role: 'Estagiario',
        description: 'Suporte N1',
        startAt: new Date(2021, 11, 1),
        endAt: new Date(2022, 5, 1)
    },
    {
        company: 'Segmedic',
        role: 'Estagiario',
        description: '',
        startAt: new Date(2022, 5, 1),
        endAt: new Date(2022, 9, 1)
    },
    {
        company: 'ClubFlex',
        role: 'Analista de sistemas',
        description: '',
        startAt: new Date(2022, 9, 1),
    }
]