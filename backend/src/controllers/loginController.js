const database = require('../database/connection')

module.exports = {
    async create(request,response) {
        /*
         * Passe como paramentros o telefone do motorista para ele logar com 
         */
        const { telefone } = request.body;

        const caminhoneiro = await database('caminhoneiro')
        .where('id', telefone)
        .select('name')
        .first();

        /*
         * Fazer requisção do SMS para verificar login 
         * Fazer esse código ainda para consumir API
         */

        if (!caminhoneiro) {
            return response.status(400).json({ error: 'Caminhoneiro não encontrado, entre na pagina de cadastro'});
        }

        return response.json(caminhoneiro);
    }
};
//