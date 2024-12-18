const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Modèle User

// Route pour récupérer tous les utilisateurs
router.get('/all', async (req, res) => {
    try {
        const users = await User.find(); // Récupère tous les utilisateurs dans MongoDB
        res.json(users); // Retourne les utilisateurs en JSON
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;