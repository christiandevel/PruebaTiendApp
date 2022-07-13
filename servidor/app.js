const express = require("express");
const app = express();
const cors = require("cors");

const modelProducto = require("./models").Producto;
const modelMarca = require("./models").Marca;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/marca", (req, res) => {
  modelMarca
    .create(req.body)
    .then((marca) => {
      res.json({ data: marca });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.post("/producto", (req, res) => {
  modelProducto
    .create(req.body)
    .then((producto) => {
      res.json({ data: producto });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.get("/producto", (req, res) => {
  modelProducto
    .findAll({
      include: [{ model:modelMarca }],
    })
    .then((producto) => {
      res.json({ data: producto });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.get("/producto/:id", (req, res) => {
  modelProducto
		.findOne({
			where: { id: req.params.id },
			include: [{ model: modelMarca }],
		})
		.then((producto) => {
			res.json({ data: producto });
		})
		.catch((err) => {
			res.json({ error: err });
		});
});

app.get("/marca", (req, res) => {
  modelMarca
    .findAll()
    .then((producto) => {
      res.json({ data: producto });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.get("/marca/:id", (req, res) => {
  modelMarca
		.findOne({
			where: { id: req.params.id },
		})
		.then((producto) => {
			res.json({ data: producto });
		})
		.catch((err) => {
			res.json({ error: err });
		});
});


app.delete("/producto/:id", (req, res) => {
  modelProducto
    .destroy({
      where: {id: req.params.id},
    })
    .then((producto) => {
      res.json({ data: producto });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.delete("/marca/:id", (req, res) => {
  modelMarca
    .destroy({
      where: {id: req.params.id},
    })
    .then((producto) => {
      res.json({ data: producto });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.put("/producto/:id", (req, res) => {
  modelProducto
    .update( req.body, {
      where: {id: req.params.id},
    })
    .then((producto) => {
      res.json({ data: producto });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.put("/marca/:id", (req, res) => {
  modelMarca
    .update( req.body, {
      where: {id: req.params.id},
    })
    .then((producto) => {
      res.json({ data: producto });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
