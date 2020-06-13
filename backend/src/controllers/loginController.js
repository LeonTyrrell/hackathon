const database = require('../database/connection')

module.exports = {
    async create(request,response) {
        const { telefone } = request.body;

        const caminhoneiro = await connection('caminhoneiro')
        .where('id', telefone)
        .select('name')
        .first();

        if (!caminhoneiro) {
            return response.status(400).json({ error: 'Caminhoneiro não encontrado, entre na pagina de cadastro'});
        }

        return response.json(caminhoneiro);
    }
};