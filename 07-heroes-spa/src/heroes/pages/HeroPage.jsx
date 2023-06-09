import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    const {id} = useParams();
    const hero = useMemo(()=>getHeroById(id),[id]);
    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to='/marvel'/> 
        
    }


    return (
        <>
            <div className='row mt-5 animate__animated animate__fadeInLeft'>
                <div className='col-4'>
                    <img 
                        src={`/assets/heroes/${id}.jpg`} 
                        alt={hero.superhero}
                        className='img-thumbnail'
                     />
                </div>
                <div className="col-8">
                    <h3>{hero.superhero}</h3>
                    <ul className='list-gorup list-group-flush'>
                        <li className='list-group-item'><b>Alter Ego:</b>{hero.alter_ego} </li>
                        <li className='list-group-item'><b>Publisher:</b>{hero.publisher} </li>
                        <li className='list-group-item'><b>First aparence:</b>{hero.first_appearance} </li>
                    </ul>
                    <h5 className='mt-3'>characters</h5>
                    <p>{hero.characters}</p>
                    <button 
                        className='btn btn-outline-primary'
                        onClick={onNavigate}
                        >Regresar</button>
                </div>

            </div>
            
        </>
        
    );
};

