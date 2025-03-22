import Bebidas from "../models/bebidasModel.js";

export const getBebidas = async (req, res) => {
  try {
    const drink = await Bebidas.findAll();
    res.status(200).json(drink);
  } catch (error) {
    res.status(500).json({ error: "No se pudo otener la data" });
  }
};

export const getBebidasById = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await Bebidas.findByPk(id);

    if (!drink) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json(drink);
  } catch (error) {
    res.status(500).json({ error: "No fue posible obtener el dato" });
  }
};

export const createBebida = async (req, res) => {
  try {
    const { nombre, sabor, tipo } = req.body;
    const newDrink = await Bebidas.create({ nombre, sabor, tipo });

    res.status(200).json(newDrink);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el producto" });
  }
};

export const updateBebida = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, sabor, tipo } = req.body;

    const drink = await Bebidas.findByPk(id);
    if (!drink) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    drink.nombre = nombre || drink.nombre;
    drink.sabor = sabor || drink.sabor;
    drink.tipo = tipo || drink.tipo;

    await drink.save();
    res.status(201).json(drink);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar el producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const drink = await Bebidas.findByPk(id);
    if (!drink) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    const elementoEliminado = drink.nombre;
    await drink.destroy();
    res
      .status(200)
      .json({ msg: `el elemento ${elementoEliminado} ha sido eliminado` });
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar el producto" });
  }
};
