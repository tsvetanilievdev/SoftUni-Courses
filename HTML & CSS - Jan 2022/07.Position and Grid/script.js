console.log('Hello')


let down = document.getElementById("GFG_DOWN");

// Create a break line element
let br = document.createElement("br");
function GFG_Fun() {

    // Create a form dynamically
    let form = document.createElement("form");
    form.setAttribute("method", "post");

    // Create an input element for Full Name
    let FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");

    // Create an input element for date of birth
    let DOB = document.createElement("input");
    DOB.setAttribute("type", "text");
    DOB.setAttribute("name", "dob");
    DOB.setAttribute("placeholder", "DOB");

    // Create an input element for emailID
    let EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "emailID");
    EID.setAttribute("placeholder", "E-Mail ID");

    // Create an input element for password
    let PWD = document.createElement("input");
    PWD.setAttribute("type", "password");
    PWD.setAttribute("name", "password");
    PWD.setAttribute("placeholder", "Password");

    // Create an input element for retype-password
    let RPWD = document.createElement("input");
    RPWD.setAttribute("type", "password");
    RPWD.setAttribute("name", "reTypePassword");
    RPWD.setAttribute("placeholder", "ReEnter Password");

    // create a submit button
    let s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    // Append the full name input to the form
    form.appendChild(FN);

    // Inserting a line break
    form.appendChild(br.cloneNode());

    // Append the DOB to the form
    form.appendChild(DOB);
    form.appendChild(br.cloneNode());

    // Append the emailID to the form
    form.appendChild(EID);
    form.appendChild(br.cloneNode());

    // Append the Password to the form
    form.appendChild(PWD);
    form.appendChild(br.cloneNode());

    // Append the ReEnterPassword to the form
    form.appendChild(RPWD);
    form.appendChild(br.cloneNode());

    // Append the submit button to the form
    form.appendChild(s);

    document.getElementsByTagName("body")[0]
        .appendChild(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let x = document.querySelector('.news');
        if (x != null) {
            x.remove()
        }


        const formData = new FormData(e.target);
        let obj = {};
        for (let pair of formData.entries()) {
            obj[pair[0]] = pair[1]
        }
        console.log(obj);

        let div = document.createElement('div');
        div.classList.add('news')
        Object.entries(obj).forEach(([k, v]) => {
            let p = document.createElement('p');
            p.textContent = `${k} ---- ${v}`;
            div.appendChild(p);

        })

        document.body.appendChild(div);
    })


}
GFG_Fun();

