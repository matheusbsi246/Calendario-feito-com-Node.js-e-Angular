const { Router } = require("express");
var cors = require("cors");

var corsOptions = {
  origin: function (origin, callback) {
    // db.loadOrigins is an example call to load
    // a list of origins from a backing database
    db.loadOrigins(function (error, origins) {
      callback(error, origins);
    });
  },
};

const UsuarioController = require("../controllers/UsuarioController");

const router = Router();

router.get("/usuarios", UsuarioController.pegaTodosOsUsuarios, cors());
router.get("/usuarios/:id", UsuarioController.pegaUmUsuario);
router.post("/usuarios", UsuarioController.criaUsuario);
router.put("/usuarios/:id", UsuarioController.atualizaUsuario);
router.delete("/usuarios/:id", UsuarioController.apagaUsuario);

//eventos

router.get(
  "/usuarios/:criadorId/eventos",
  UsuarioController.pegaTodosOsEventos
);
router.get(
  "/usuarios/:criadorId/eventos/:eventoId",
  UsuarioController.pegaUmEvento
);
router.post("/usuarios/:criadorId/eventos", UsuarioController.criaEvento);
router.put(
  "/usuarios/:criadorId/eventos/:eventoId",
  UsuarioController.atualizaEvento
);
router.delete(
  "/usuarios/:criadorId/eventos/:eventoId",
  UsuarioController.apagaEvento
);

//convites

router.get(
  "/usuarios/:criadorId/eventos/:eventoId/convites",
  UsuarioController.pegaTodosOsConvites
);
router.get(
  "/usuarios/:criadorId/eventos/:eventoId/convites/:conviteId",
  UsuarioController.pegaUmConvite
);
router.post(
  "/usuarios/:criadorId/eventos/:eventoId/convites",
  UsuarioController.criaConvite
);
router.put(
  "/usuarios/:criadorId/eventos/:eventoId/convites/:conviteId",
  UsuarioController.atualizaConvite
);
router.delete(
  "/usuarios/:criadorId/eventos/:eventoId/convites/:conviteId",
  UsuarioController.apagaConvite
);

module.exports = router;
