import Properties from "../models/Properties.js";

const create = async (req, res) => {
  try {
    const properties = await Properties.create(req.body);
    return res.json({
      msg: "Properties created successfully",
      properties,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "error creating properties",
      error,
    });
  }
};

const read = async (req, res) => {
  try {
    const properties = await Properties.find(req.query);
    return res.json({
      msg: "Propiedades encontradas",
      properties,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar items",
      error,
    });
  }
};

const readById = async (req, res) => {
  const { id } = req.params;
  try {
    const properties = await Properties.findById(id);
    return res.json({
      msg: "propiedades ubicadas",
      properties,
    });
  } catch (error) {
    return res.json({
      msg: "Error al buscar por id",
      error,
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const updateProperties = await Properties.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: "Properties updated successfully",
      updateProperties,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error updating the properties",
      error,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const properties = await Properties.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    return res.json({
      msg: "Properties deleted",
      properties,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error deleting the properties",
      error,
    });
  }
};

export { create, update, remove, read, readById };
