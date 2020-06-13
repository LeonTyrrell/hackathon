const database = require('../database/connection')

module.exports = {
    async index(request, response) {
        const caminhao = await database('caminhao').select('*');

        return response.json(caminhao);
    },

    async create(request, response) {
        const { latitude, longitude } = request.body;
        const id_caminhoneiro = request.headers.authorization;

        const [ id ] = await database('caminhao').insert({
            id_caminhoneiro,
            latitude,
            longitude,
        });
        return response.json({ id });
    },
    
    async delete(request, response) {
        const { id } = request.params;
        const id_caminhoneiro = request.headers.authorization;
        
        const caminhao = database('caminhao')
            .where('id', id)
            .select('id_caminhoneiro')
            .first()

        if(caminhao != id_caminhoneiro) {
            return 
        }
        await database('caminhoneiro').where('id', id).delete();
    }
};