export interface IGraphError {
    statusCode?: number;
    code?: string;
    message: string;
    requestId?: string;
    date?: Date;
    body?: string;
}
