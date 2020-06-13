const database = require('../database/connection')

module.exports = {
    async index(request, response) {
        const caminhao = await database('caminhao').select('*');

        return response.json(caminhao);
    },

    async create(request, response) {
        /*
         * você deve passar como parametros a latitude e a longitude
         * Você deve ter a informação do headers o id do caminhoneiro e passar como authorization
         */
        const { latitude, longitude } = request.body;
        const id_caminhoneiro = request.headers.authorization;
        if(id_caminhoneiro == null) return response.status(404).json({ error: 'Você deve passar o authorization como header para api' })

        const [ id ] = await database('caminhao').insert({
            id_caminhoneiro,
            latitude,
            longitude,
        });
        return response.json({ id });
    },
    
    async delete(request, response) {
        /*
         * você deve passar como parametros o id do paramentro
         * Você deve ter a informação do headers o id do caminhoneiro e passar como authorization
         */
        const { id } = request.params;
        const id_caminhoneiro = request.headers.authorization;
        if(id_caminhoneiro == null) return response.status(404).json({ error: 'Você deve passar o authorization como header para api' })
        
        const caminhao = database('caminhao')
            .where('id', id)
            .select('id_caminhoneiro')
            .first()

        if(caminhao != id_caminhoneiro) {
            return response.status(401).json({ error: 'Operation not permited'});
        }
        await database('caminhao').where('id', id).delete();
        
        return response.status(204).send();
    }
}; 
//