const database = require('../database/connection');

module.exports = {
    async create(request, response) { 
        /*
         * Passar como parâmetros o nome, latitude. longitude, estacionamento, banho, refeicao, segruanca, autoeletrica,borracharia
         */ 
        const { nome, latitude, longitude, estacionamento, banho, refeicao, seguranca, autoeletrica, borracharia} = request.body;

        /*
         * Verificações das obrigatoriedaes
         */
        if(nome == null) return response.status(401).json({ error: "Você deve passar obrigatóriamente o nome" });
        if(latitude == null) return response.status(401).json({ error: "Você deve passar obrigatóriamente a latitude" });
        if(longitude == null) return response.status(401).json({ error: "Você deve passar obrigatóriamente a longitude" });
        if(estacionamento == null) return response.status(401).json({ error: "Você deve passar obrigatóriamente o estacionamento" });
        if(banho == null) return response.status(401).json({ error: "Você deve passar obrigatóriamente o banho" });
        if(refeicao == null) return response.status(401).json({ error: "Você deve passar obrigatóriamente a refeicao" });
        if(autoeletrica == null) return response.status(401).json({ error: "Você deve passar obrigatóriamente a autoeletrica" });
        if(borracharia == null) return response.status(401).json({ error: "Você deve passar obrigatóriamente a borracharia" });

        
        const [ id ] = await database('pontodeparada').insert({
            nome,
            latitude,
            longitude,
            estacionamento,
            banho,
            refeicao,
            seguranca,
            autoeletrica,
            borracharia
        })
        return response.json({ id });
    },
    
    async index(request, response) {
        const paradas = await database('pontodeparada').select('*');

        return response.json({paradas})
    },

    async delete(request, response) {
        const { id } = request.params();
        
        await database('paradas').where('id', id).delete();

        return response.status(204).send();
    }
}