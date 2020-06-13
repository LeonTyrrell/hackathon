const database = require('../database/connection')

module.exports = {
    async index(request,response) {
        const caminhoneiros = await database('caminhoneiro').select('*');

        return response.json(caminhoneiros)
    },

    async create(request, response) {
        const { nome, data_nascimento, telefone } = request.body;

        const [ id ] = await database('caminhoneiro').insert({
            nome,
            data_nascimento,
            telefone
        })

        return response.json({ id });
    },

    async delete(request, response) {
        /*
         * você deve passar como parametros o id do caminhoneiro
         * Você deve ter a informação do headers o id do caminhoneiro e passar como authorization
         */
        const { id } = request.params;
        const id_caminhoneiro = request.headers.authorization;
        if(id_caminhoneiro == null) return response.status(404).json({ error: 'Você deve passar o authorization como header para api' })

        const caminhao = database('id')
        .where('id', id)
        .select('id')
        .first()

        if(caminhao != id_caminhoneiro) {
            return response.status(401).json({ error: 'Operation not permited'});
        }
        await database('caminhoneiro').where('id', id).delete();
        
        return response.status(204).send();

    }
};