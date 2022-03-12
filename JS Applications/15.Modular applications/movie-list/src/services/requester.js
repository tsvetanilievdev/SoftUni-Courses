function request(method, url, data){
  const options = {
    headers: {}
  };

  if(method !== 'GET'){
    options.method = method;
  }
  if(data){
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const token = sessionStorage.getItem('authToken');
  if(token){
    options.headers['X-Authorization'] = token;
  }

  return fetch(url, options).then(res => res.json())
  }

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');