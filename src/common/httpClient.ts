export interface HttpClient {
    get<T>(queryParams: string): Promise<T>;
}
