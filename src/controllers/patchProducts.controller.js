import { product } from "../models/products.js";

export const patchProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, stock, categories, description, enabled } = req.body;
    const findProduct = await product.findByPk(id);
    if (!findProduct) return res.status(404).json({ msg: "Product not found" });

    const fields = {};
    if (title) fields.title = title;
    if (price) fields.price = price;
    if (stock) fields.stock = stock;
    if (categories) fields.categories = categories;
    if (description) fields.description = description;
    if (typeof enabled === "boolean") fields.enabled = enabled;

    if (Object.entries(fields).length === 0) throw new Error("Not enough info");

    await findProduct.update(fields);
    res.status(200).json({
      msg: "Changes Saved",
      product: findProduct,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error", error: error.message });
  }
};
