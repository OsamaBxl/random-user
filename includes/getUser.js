const URL = 'https://randomuser.me/api/?nat=fr';

const getUser = async () => {
    // Fetch User from API
    const response = await fetch(URL);
    const data = await response.json();
    //Destructure
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const { age } = person.dob;
    const { street: { number, name } } = person.location;

    return {
        image,
        email,
        phone,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
    }
}

export default getUser;