export const settings = {
    host: ''
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }
        try { // вътрешния try-catch връща синтактична грешка в json, защото ако сървъра върне празно body и се опитаме да кажем на response .json() ще хвърли грешка, затова ако се случи това с catch връщаме само response!!!
            const data = await response.json();
            return data;
        } catch (error) {
            return response;
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function getOptions(method = 'GET', body) {
    const options = {
        method,
        headers: {}
    }

    const token = sessionStorage.getItem('authToken');
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, getOptions())
}

export async function post(url, data) {
    return await request(url, getOptions('POST', data))
}

export async function put(url, data) {
    return await request(url, getOptions('PUT', data))
}

export async function del(url) {
    debugger;
    return await request(url, getOptions('DELETE'))
}

export async function login(email, password) {
    const response = await post(settings.host + '/users/login', { email, password })

    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('authToken', response.accessToken);
    sessionStorage.setItem('userId', response._id);

    return response;
}
export async function register(email, password) {
    const response = await post(settings.host + '/users/register', { email, password })

    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('authToken', response.accessToken);
    sessionStorage.setItem('userId', response._id);

    return response;
}
export async function logout() {
    const response = await get(settings.host + '/users/logout')

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');

    return response;
}