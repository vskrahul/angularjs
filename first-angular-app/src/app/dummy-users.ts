export const DUMMY_USERS: User[] = [
    {
        id: 'u1',
        name: 'James',
        avatar: 'avatar1.png'
    },
    {
        id: 'u2',
        name: 'Timothy',
        avatar: 'avatar1.png'
    },
    {
        id: 'u3',
        name: 'Jacob',
        avatar: 'avatar1.png'
    },
    {
        id: 'u4',
        name: 'Aldo',
        avatar: 'avatar1.png'
    },
];

export interface User {
    id: string;
    name: string;
    avatar: string;
}