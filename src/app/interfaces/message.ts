export interface Message {
    id?: number;
    created_at?: string | Date;
    name: string;
    email: string;
    message: string;
}
