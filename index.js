const express = require("express");
const app = express();

// ROTA
    // Método HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
        // GET - Pega uma info
        // POST - Cria uma info
        // PUT - Altera toda a info
        // PATH - Altera parte da info
        // DELETE - Apaga uma info

    // Nome - Um identificador da rota

    // Function (Callback)

app.get("/soma", (req, res) => {
    const soma = 100 + 1
    
    res.send({soma});
});

app.listen(3000);
