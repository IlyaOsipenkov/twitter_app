export class HttpClient {
    private baseApi = "https://shikimori.one/api/";

    async get<T>(queryParams: string): Promise<T> {
        const response = await fetch(`${this.baseApi}${queryParams}`);
        if (response.ok) {
            return (await response.json()) as Promise<T>;
        }
        throw new Error("Problem with fetch");
    }
}
