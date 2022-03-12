export const settings = {
    host: ''
}

// универсална request функция за заявиките
async function request(url, options) {
    try {
        const response = await fetch(url, options)

        if (response.ok == false) { // ако има друга грешка на сървара(не newtork), я хващаме и я прехвърляме на catch
            const error = await response.json();
            alert(error.message)
            throw new Error(error.message)
        }

        // вътрешния try-catch връща синтактична грешка в json, защото ако сървъра върне празно body и се опитаме да кажем на response .json() ще хвърли грешка, затова ако се случи това с catch връщаме само response!!!
        try { // get заявка при logout връща празно body, което ако се каже да .json() хвърля грешка затова връщаме само response
            const data = await response.json();
            return data;
        } catch (error) {
            return response;
        }

    } catch (error) { // ако има network грешка директо се catch
        alert(error.message);
        throw error // (throw)пръхвърляме грешката, за да може този който е извикал request грешката да е стигнала и до него!!!! а не мълчеливо да я хванем и да върнем undefined и приложението да продължи да работи, а да СПРЕ да работи и този който е извикал request да види от къде идва грешката!
    }
}

//utility функция - getOptions
function getOptions(method = 'GET', body) {
    const options = {
        method,
        headers: {}
    }

    const token = sessionStorage.getItem('authToken'); // ако user е логнат, пращаме ауторизацията
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (body) { // ако има данни, пращаме на сървъра да ги очаква като json
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }
    return options
}

//финкции за всяка една CRUD операция
export async function get(url) {
    return await request(url, getOptions());
}
export async function post(url, data) {
    return await request(url, getOptions('POST', data));
}
export async function put(url, data) {
    return await request(url, getOptions('PUT', data));
}
export async function del(url) {
    return await request(url, getOptions('DELETE'));
}



// login, register и logout трябва да ги вкараме в data.js и оттам в app.js с другите по специални заявки
// за да може при промяна на api (към firebase например), да се направи само промяна в data.js, който седи като буфер между app.js и всички viewControllers!!!
export async function login(email, password) {
    const result = await post(settings.host + '/users/login', { email, password });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('email', result._id);
    return result;
}

export async function register(email, password) {
    const result = await post(settings.host + '/users/register', { email, password });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('email', result._id);
    return result;
}

export async function logout() {
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('email');
    return result;
}