export interface User {
    url: string;
    avatarUrl: string;
    name: string;
    repositories: number;
    followers: number;
    following: number;
    company?: string;
    email?: string;
    location?: string;
    bio?: string;
}
