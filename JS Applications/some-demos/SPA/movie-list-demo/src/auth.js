export function saveToken(token){
    sessionStorage.setItem('authToken', token)
}

export function isAuthicated(){
    console.log(sessionStorage.getItem('authToken'))
    return Boolean(sessionStorage.getItem('authToken'));
}

export function showNav(){
    const navEl = document.querySelector('.nav');
    console.log(navEl)
    let userElements = [...navEl.querySelectorAll('.user')];
    let guestElements = [...navEl.querySelectorAll('.guest')];
    if(isAuthicated()){
        guestElements.forEach(x => x.classList.add('hidden'));
        userElements.forEach(x => x.classList.remove('hidden'));
        // navEl.querySelectorAll('.guest').forEach(x => x.classList.add('.hidden'))
        // navEl.querySelectorAll('.user').forEach(x => x.classList.remove('.hidden'))
    }else {
        guestElements.forEach(x => x.classList.remove('hidden'));
        userElements.forEach(x => x.classList.add('hidden'));
        // navEl.querySelectorAll('.guest').forEach(x => x.classList.remove('.hidden'))
        // navEl.querySelectorAll('.user').forEach(x => x.classList.add('.hidden'))
    }
}