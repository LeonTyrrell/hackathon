const database = require('../database/connection');

module.exports = {
    async postosPertos(request, response) {
        /*
         * Declare a latitude e a longitude no body como lat e long
         */
        const { lat, long } = request.body;

        const latFinal = lat >= 0 ? lat + 500 : latFinal = lat - 500
        const longFinal = long >= 0 ? long + 500 : longFinal = long - 500
        
        /*
         * Coleta os pontos de paradas armazenados no banco 
         * Ainda não completado, precisa ainda coletar a informação se ele tiver os dados em cache
         */
        const pontos = await database('pontodeparada')
            .where(latitude >= lat)
            .where(latitude <= latFinal)
            .where(longitude >= long)
            .where(longitude <= longFinal)
        
        return response.json({ pontos })
    }
};
//