const fetchPets = async ({queryKey}) => {

    const id = queryKey[1];

    const response = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
    
    if(!response.ok) {
        throw new Error(`/details/${id} fetch not ok`)
    }

    return response.json();

}

export default fetchPets;