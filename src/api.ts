export const API_URL = "https://gateway.marvel.com:443/v1/public"

export function CHARACTERS (token: string) {
    return {
        url: API_URL + `/characters?limit=100&apikey=${process.env.REACT_APP_API_KEY}`,
        options: {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        }
    }
}

export function USER_GET (token: string) {
    return {
        url: API_URL + "/api/user",
        options: {
            method: "GET",
            headers: {
                Authorization: "Bearer" + token
            },
        }
    }
}

export function USER_POST (body: any) {
    return {
        url: API_URL + "/api/user",
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }
    }
}

export function PHOTO_POST (formData: any, token: string) {
    return {
        url: API_URL + "/api/photo",
        options: {
            method: "POST",
            headers: {
                Authorization: "Bearer" + token
            },
            body: formData
        }
    }
}

export function PHOTOS_GET ({page, total, user}:any) {
    return {
        url: API_URL + `/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: "GET",
            cache: "no-store",
        }
    }
}

export function PHOTO_GET (id: any) {
    return {
        url: API_URL + `/api/photo/${id}`,
        options: {
            method: "GET",
            cache: "no-store",
        }
    }
}

export function COMMENT_POST (id: number, body: any, token: string) {
    return {
        url: API_URL + `/api/comment/${id}`,
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer" + token
            },
            body: JSON.stringify(body)
        },
    }
}

export function PHOTO_DELETE (id: number, token: string) {
    return {
        url: API_URL + `/api/photo/${id}`,
        options: {
            method: "DELETE",
            headers: {
                Authorization: "Bearer" + token
            },
        },
    }
}