const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

	if (product === null) return res.status(404).json({ message: 'Produto não encontrado'});

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

	if (!name || !brand) return res.status(404).json({ message: 'informações inválidas' });

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

	if (products === null) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(200).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
	const { id } = req.params;

	const product = await ProductModel.getById(id);

	if (product === null) return res.status(404).json({ message: 'produto não encontrado' })

	console.log(product);
	if (!name || !brand) return res.status(404).json({ message: 'informações inválidas' });

  await ProductModel.update(req.params.id, name, brand);

  res.status(200).json({ name, brand });
});

module.exports = router;