const database = require('../database/connection')

module.exports = {
    async index(request,response) {
        const caminhoneiros = await database('caminhoneiro').select('*');

        return response.json(caminhoneiros)
    },

    async create(request, response) {
        const { nome, data_nascimento, telefone } = request.body;

        const [id] = await database('caminhoneiro').insert({
            nome,
            data_nascimento,
            telefone
        })

        return response.json({id});
    },

    async delete(request, response) {
        const { id } = request.params;

        await database('caminhoneiro').where('id', id).delete();

    }
};