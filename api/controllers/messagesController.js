import Messages from "../models/Messages.js";

const create = async (req, res) => {
  try {
    // req.body.user = req.user.id;
    const messages = await Messages.create(req.body);
    return res.json({ msg: "Messages Created", messages });
  } catch (error) {
    return res.status(500).json({
      msg: "Error creating messages",
      error,
    });
  }
};

const read = async (req, res) => {
  try {
    const messages = await Messages.find(req.query);
    return res.json({
      msg: "Mensages encontrados",
      messages,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar mensages",
      error,
    });
  }
};

const readById = async (req, res) => {
  const { id } = req.params;
  try {
    const messages = await Messages.findById(id);
    return res.json({
      msg: "Mensages encontrado",
      messages,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar mensages",
      error,
    });
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  //const { id: userId } = req.user;
  try {
    const searchComment = await Messages.findById(id);
    const messages = await Messages.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({ msg: "Messages Edited", messages });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al editar comentario",
      error,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const messagesId = await Messages.findByIdAndUpdate(
      id,
      { enabled: false },
      { new: true }
    );
    return res.json({
      msg: "Messages disabled successfully",
      messagesId,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error disabling the messages",
      error,
    });
  }
};

export { create, edit, remove, read, readById };
