const express = require('express');
const router = express.Router();

router.get('/buscar-cliente-email/:email', function(req, res) {
    let email = req.params.email;
    return res.json({
        success: true,
        cliente: email
    });
});

module.exports = router;