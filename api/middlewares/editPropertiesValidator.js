import Joi from "joi-oid";

const editPropertiesValidator = async (req, res, next) => {
  const propertiesSchema = Joi.object({
    date: Joi.date().required(),
    language: Joi.string().required(),
    subtitles: Joi.string().required(),
    cinema: Joi.objectId().required(),
    movie: Joi.objectId().required(),
    price: Joi.number().greater(0).required(),
  });
  try {
    await propertiesSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Datos incorrectos",
      error,
    });
  }
};

export { editPropertiesValidator };
