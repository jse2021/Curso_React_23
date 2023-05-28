import { heroes } from "../data/heroes";

// busqueda por publisher
export const getHeroesByPublisher = (publisher)=>{
    const validPublishers = ['DC Comics','Marvel Comics'];
    
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not valid publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher)
}

export default getHeroesByPublisher;