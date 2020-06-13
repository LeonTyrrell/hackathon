const database = require('../database/connection')

module.exports = {
    async index(request, response) {
        const caminhao = await database('caminhao').select('*');

        return response.json(caminhao);
    },

    async create(request, response) {
        const { latitude, longitude } = request.body;
        const caminhoneiro = request.headers.authorization;

        const [ id ] = await database('caminhao').insert({
            caminhoneiro,
            latitude,
            longitude,
        });
        return response.json({ id })
    }
};