const fetchSearch = async ({queryKey}) => {
    
    const {animal, breed, location} = queryKey[1];

    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    if(!res.ok){
        throw new Error(`pet search not ok ${animal} ${location} ${breed}`);
    }

    return res.json();

}

export default fetchSearch;