export const getEnvVariables = ()=> {
    // import.meta.env;
    return {
        VITE_API_URL:import.meta.env.VITE_API_URL
    }

}

/**
 * COMENTAMOS LA SEGUNDA LINEA DEBIDO QUE NO PERMITA MANDAR A PRODUCCION
 */ 