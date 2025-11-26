require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3002;

// MongoDB connection (local DB)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error("MongoDB Error:", err));

// Product Schema
const productSchema = new mongoose.Schema({
name: { type: String, required: true, index: true },
category: { type: String, index: true },
price: { type: Number, required: true },
description: String,
inStock: { type: Boolean, default: true },
createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// CREATE
app.post('/api/products', async (req, res) => {
try {
const p = new Product(req.body);
await p.save();
res.status(201).json(p);
} catch (e) {
res.status(400).json({ error: e.message });
}
});

// READ
app.get('/api/products/:id', async (req, res) => {
try {
const p = await Product.findById(req.params.id);
if (!p) return res.status(404).json({ error: 'Not found' });
res.json(p);
} catch (e) {
res.status(400).json({ error: 'Invalid id' });
}
});

// UPDATE
app.put('/api/products/:id', async (req, res) => {
try {
const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!p) return res.status(404).json({ error: 'Not found' });
res.json(p);
} catch (e) {
res.status(400).json({ error: 'Invalid id' });
}
});

// DELETE
app.delete('/api/products/:id', async (req, res) => {
try {
const p = await Product.findByIdAndDelete(req.params.id);
if (!p) return res.status(404).json({ error: 'Not found' });
res.json({ message: 'Deleted' });
} catch (e) {
res.status(400).json({ error: 'Invalid id' });
}
});

// SEARCH + PAGINATION
app.get('/api/products', async (req, res) => {
const { search, category, page = 1, limit = 10 } = req.query;
const query = {};

if (search) query.name = { $regex: search, $options: 'i' };
if (category) query.category = category;

const skip = (Number(page) - 1) * Number(limit);

const [items, total] = await Promise.all([
Product.find(query).skip(skip).limit(Number(limit)).sort({ createdAt: -1 }),
Product.countDocuments(query)
]);

res.json({ page: Number(page), limit: Number(limit), total, items });
});

// AGGREGATION
app.get('/api/stats/avg-price-per-category', async (req, res) => {
const agg = await Product.aggregate([
{ $group: { _id: '$category', avgPrice: { $avg: '$price' }, count: { $sum: 1 } } },
{ $sort: { avgPrice: -1 } }
]);
res.json(agg);
});

// START SERVER
app.listen(PORT, () => console.log(`Product Catalog API on ${PORT}`));
