type HttpMethod = "GET" | "PUT" | "POST" | "DELETE";

export type HttpResponse = {code: number, ok: boolean, body?: unknown};

export const get = (url: string) => {
    return call(url, "GET");
}

export const post = (url: string, body?: object) => {
    return call(url, "POST", body ? JSON.stringify(body) : null);
}

const call = async (url: string, method: HttpMethod, body?: string | null): Promise<HttpResponse> => {
    const response = await fetch(url, {
        method: method,
        body: body ?? null,
        headers: body == null ? {} : {'Content-Type': 'application/json'},
    })
    if (response.ok) {
        const contentType = response.headers.get("Content-Type");
        if (contentType == null) {
            return {
                code: response.status,
                ok: true
            }
        }

        let ret;

        if (contentType.match(`text/html`)) {
            ret = await response.text();
        } else {
            ret = await response.json();
        }

        return {
            code: response.status,
            ok: true,
            body: ret
        };
    }
    
    return {
        code: response.status,
        ok: false
    }
}