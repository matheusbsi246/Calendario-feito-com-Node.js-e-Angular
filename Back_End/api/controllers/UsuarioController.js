const database = require("../models");
var cors = require('cors');

class UsuarioController {

    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosOsUsuarios)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmUsuario(req, res) {
        const { id } = req.params
        try {
            const umUsuario = await database.Usuarios.findOne({
                where: {
                    id: Number(id)
                }

            })
            return res.status(200).json(umUsuario)

        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaUsuario(req, res) {
        const novoUsuario = req.body
        try {
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario)
            return res.status(200).json(novoUsuarioCriado)
        }

        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUsuario(req, res) {
        const { id } = req.params
        const atualizaInfos = req.body
        try {
            await database.Usuarios.update(atualizaInfos, { where: { id: Number(id) } })
            const usuarioAtualizada = await database.Usuarios.findOne({
                where:
                    { id: Number(id) }
            })
            return res.status(200).json(usuarioAtualizada)
        }

        catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async apagaUsuario(req, res) {
        const { id } = req.params
        try {
            await database.Usuarios.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        }

        catch (error) {
            return res.status(500).json(error.message)
        }

    }

    //eventos

    static async pegaTodosOsEventos(req, res) {
        const { criadorId } = req.params
        try {
            const todosOsEventos = await database.Eventos.findAll({
                where: {
                    criador_id: Number(criadorId)
                }
            })
            return res.status(200).json(todosOsEventos)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmEvento(req, res) {
        const { criadorId, eventoId } = req.params
        try {
            const umEvento = await database.Eventos.findOne({
                where: {
                    id: Number(eventoId),
                    criador_id: Number(criadorId)
                }
            })
            return res.status(200).json(umEvento);

        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaEvento(req, res) {
        const { criadorId } = req.params

        const novoEvento = { ...req.body, criador_id: Number(criadorId) }

        try {
            const novoEventoCriado = await database.Eventos.create(novoEvento)
            return res.status(200).json(novoEventoCriado)
        }

        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaEvento(req, res) {
        const { criadorId, eventoId } = req.params
        const atualizaInfos = req.body

        try {
            await database.Eventos.update(atualizaInfos, {
                where: {
                    id: Number(eventoId),
                    criador_id: Number(criadorId)
                }
            })
            const eventoAtualizado = await database.Eventos.findOne({
                where:
                {
                    id: Number(eventoId),
                    criador_id: Number(criadorId)
                }
            })

            return res.status(200).json(eventoAtualizado)
        }

        catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async apagaEvento(req, res) {
        const { criadorId, eventoId } = req.params
        try {
            await database.Eventos.destroy({
                where: {
                    id: Number(eventoId),
                    criador_id: Number(criadorId)

                }
            })
            return res.status(200).json({ mensagem: `id ${eventoId} deletado` })
        }

        catch (error) {
            return res.status(500).json(error.message)
        }

    }

    //convites

    static async pegaTodosOsConvites(req, res) {
        const { criadorId, eventoId } = req.params;
        try {
            const todosOsConvites = await database.Convites.findAll({
                where: {
                    criador_id: Number(criadorId),
                    evento_id: Number(eventoId)
                }
            })
            return res.status(200).json(todosOsConvites)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmConvite(req, res) {
        const { criadorId, eventoId, conviteId } = req.params
        try {
            const umConvite = await database.Convites.findOne({
                where: {
                    id: Number(conviteId),
                    evento_id: Number(eventoId),
                    criador_id: Number(criadorId)
                }
            })
            return res.status(200).json(umConvite);

        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaConvite(req, res) {
        const { criadorId, eventoId } = req.params
        const novoConvite = {
            ...req.body, criador_id: Number(criadorId), evento_id: Number(eventoId)
        }

        try {
            const novoConviteCriado = await database.Convites.create(novoConvite)
            return res.status(200).json(novoConviteCriado)
        }

        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaConvite(req, res) {
        const { criadorId, eventoId, conviteId } = req.params
        const atualizaInfos = req.body
        try {
            await database.Convites.update(atualizaInfos, {
                where: {
                    id: Number(conviteId),
                    evento_id: Number(eventoId),
                    criador_id: Number(criadorId)

                }
            })
            const ConviteAtualizado = await database.Convites.findOne({
                where:
                {
                    id: Number(conviteId),
                    criador_id: Number(criadorId),
                    evento_id: Number(eventoId)
                }
            })
            return res.status(200).json(ConviteAtualizado)
        }

        catch (error) {
            return res.status(500).json(error.message)
        }

    }
    static async apagaConvite(req, res) {
        const { conviteId, criadorId, eventoId } = req.params
        try {
            await database.Convites.destroy({
                where: {
                    id: Number(conviteId),
                    criador_id: Number(criadorId),
                    evento_id: Number(eventoId)
                }
            })
            return res.status(200).json({ mensagem: `id ${conviteId} deletado` })
        }

        catch (error) {
            return res.status(500).json(error.message)
        }

    }

}



module.exports = UsuarioController