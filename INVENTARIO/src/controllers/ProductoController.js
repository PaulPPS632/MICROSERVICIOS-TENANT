const { Op } = require("sequelize");
const Database = require("../databases/database.js");
const Producto = require("../models/Producto.js");
const Categoria = require("../models/Categoria.js");
const SubCategoria = require("../models/SubCategoria.js");
const Marca = require("../models/Marca.js");
const CategoriaMarca = require("../models/CategoriaMarca.js");
const uploadFilesToArchivosService = require("../services/uploadFiles.js");
const { default: axios } = require("axios");
class ProductoController {
  constructor() {}

  async getAll(req, res) {
    const { tenantid } = req.headers;
    // console.log("tenantId: ", tenantid);
    try {
      const productos = await Producto.findAll({
        include: [
          {
            model: SubCategoria,
            required: true,
            foreignKey: "SubCategoriaId",
            include: {
              model: Categoria,
              required: true,
              foreignKey: "CategoriaId",
            },
          },
          {
            model: CategoriaMarca,
            required: true,
            foreignKey: "CategoriaMarcaId",
            include: {
              model: Marca,
              required: true,
              foreignKey: "MarcaId",
            },
          },
        ],
        where: {
          tenantId: tenantid,
        },
      });
      const resp = productos.map((producto) => ({
        id: producto.id,
        nombre: producto.nombre,
        pn: producto.pn,
        descripcion: producto.descripcion,
        stock: producto.stock,
        precio: producto.precio,
        CategoriaMarcaId: producto.CategoriaMarcaId,
        SubCategoriaId: producto.SubCategoriaId,
        MarcaId: producto.CategoriaMarca.Marca.id,
        CategoriaId: producto.SubCategorium.CategoriaId,

        marca: producto.CategoriaMarca.Marca.nombre,
        garantia_cliente: producto.garantia_cliente,
        garantia_total: producto.garantia_total,
      }));

      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async GetProductsFact(req, res) {
    const productos = await Producto.findAll({
      attributes: ["id", "nombre", "precio"],
    });
    return res.status(200).json(productos);
  }
  async getById(req, res) {
    const id = req.params.id;
    const { tenantid } = req.headers;
    const producto = await Producto.findOne({
      where: { id, tenantId: tenantid },
      include: [
        {
          model: SubCategoria,
          required: true,
          foreignKey: "SubCategoriaId",
          include: {
            model: Categoria,
            required: true,
            foreignKey: "CategoriaId",
          },
        },

        {
          model: CategoriaMarca,
          required: true,
          foreignKey: "CategoriaMarcaId",
          include: {
            model: Marca,
            required: true,
            foreignKey: "MarcaId",
          },
        },
      ],
    });
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    const productoResponse = {
      id: producto.id,
      nombre: producto.nombre,
      pn: producto.pn,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio: producto.precio,
      CategoriaMarcaId: producto.CategoriaMarcaId,
      CategoriaMarca: producto.CategoriaMarca.nombre,
      SubCategoriaId: producto.SubCategoriaId,
      SubCategoria: producto.SubCategorium.nombre,
      MarcaId: producto.CategoriaMarca.Marca.id,
      Marca: producto.CategoriaMarca.Marca.nombre,
      CategoriaId: producto.SubCategorium.CategoriaId,
      Categoria: producto.SubCategorium.Categorium.nombre,
      garantia_cliente: producto.garantia_cliente,
      garantia_total: producto.garantia_total,
      imagen_principal: producto.imagen_principal,
      imageurl: producto.imageurl,
    };
    return res.status(200).json(productoResponse);
  }
  async GetCategoriaProducto(req, res) {
    const { tenantid } = req.headers;
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
    console.log(tenantid);
    console.log("-------------------");
    console.log("-------------------");
    console.log("-------------------");
    let nuevos = await Producto.findAll({
      include: [
        {
          model: SubCategoria,
          required: true,
          foreignKey: "SubCategoriaId",
          include: {
            model: Categoria,
            required: true,
            foreignKey: "CategoriaId",
          },
        },
        {
          model: CategoriaMarca,
          required: true,
          foreignKey: "CategoriaMarcaId",
          include: {
            model: Marca,
            required: true,
            foreignKey: "MarcaId",
          },
        },
      ],
      where: {
        tenantId: tenantid,
      },
      limit: 10,
      order: [["createdAt", "DESC"]],
    });
    nuevos = nuevos.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      pn: producto.pn,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio: producto.precio,
      marca: producto.CategoriaMarca.Marca.nombre,
      categoriamarca: producto.CategoriaMarca.nombre,
      categoria: producto.SubCategorium.Categorium.nombre,
      subcategoria: producto.SubCategorium.nombre,
      garantia_cliente: producto.garantia_cliente,
      garantia_total: producto.garantia_total,
      imagen_principal: producto.imagen_principal,
      imageurl: producto.imageurl, // array de URLs
    }));
    const categorias = await Categoria.findAll({
      where: {
        tenantId: tenantid,
      },
    });

    const porCategoria = await Promise.all(
      categorias.map(async (categoria) => {
        let productos = await Producto.findAll({
          include: [
            {
              model: SubCategoria,
              required: true,
              foreignKey: "SubCategoriaId",
              where: {
                CategoriaId: categoria.id,
              },
              include: {
                model: Categoria,
                required: true,
                foreignKey: "CategoriaId",
              },
            },
            {
              model: CategoriaMarca,
              required: true,
              foreignKey: "CategoriaMarcaId",
              include: {
                model: Marca,
                required: true,
                foreignKey: "MarcaId",
              },
            },
          ],
          where: {
            tenantId: tenantid,
          },
          limit: 10,
          order: [["createdAt", "DESC"]],
        });
        productos = productos.map((producto) => ({
          id: producto.id,
          nombre: producto.nombre,
          pn: producto.pn,
          descripcion: producto.descripcion,
          stock: producto.stock,
          precio: producto.precio,
          marca: producto.CategoriaMarca.Marca.nombre,
          categoriamarca: producto.CategoriaMarca.nombre,
          categoria: producto.SubCategorium.Categorium.nombre,
          subcategoria: producto.SubCategorium.nombre,
          garantia_cliente: producto.garantia_cliente,
          garantia_total: producto.garantia_total,
          imagen_principal: producto.imagen_principal,
          imageurl: producto.imageurl, // array de URLs
        }));
        return { categoria, productos };
      })
    );

    return res.status(200).json({ nuevos, porCategoria, categorias });
  }
  async GetPaged(req, res) {
    const { search, marca, categoria, subcategoria, page, size, sort } =
      req.query;
    try {
      const limit = size ? parseInt(size) : 10; // Si no hay size, se usa 10 como valor por defecto
      const offset = page ? parseInt(page) * limit : 0; // Si no hay page, empieza desde la primera página

      const { count: totalItems, rows: productos } =
        await Producto.findAndCountAll({
          where: {
            nombre: {
              [Op.like]: `%${search}%`,
            },
          },
          include: [
            {
              model: SubCategoria,
              required: true,
              foreignKey: "SubCategoriaId",
              ...(subcategoria?.length > 0 && {
                where: {
                  nombre: { [Op.in]: subcategoria.split(",") }, // Solo aplica si hay subcategorías
                },
              }),
              include: {
                model: Categoria,
                required: true,
                foreignKey: "CategoriaId",
                ...(categoria?.length > 0 && {
                  where: {
                    nombre: { [Op.in]: categoria.split(",") }, // Solo aplica si hay categorías
                  },
                }),
              },
            },
            {
              model: CategoriaMarca,
              required: true,
              foreignKey: "CategoriaMarcaId",
              include: {
                model: Marca,
                required: true,
                foreignKey: "MarcaId",
                ...(marca?.length > 0 && {
                  where: {
                    nombre: { [Op.in]: marca.split(",") }, // Solo aplica si hay marcas
                  },
                }),
              },
            },
          ],
          limit: limit,
          offset: offset,
          ...(sort && { order: [["precio", sort]] }),
        });
      //const totalPages = Math.ceil(totalItems / limit);

      const resp = productos.map((producto) => ({
        id: producto.id,
        nombre: producto.nombre,
        pn: producto.pn,
        descripcion: producto.descripcion,
        stock: producto.stock,
        precio: producto.precio,
        marca: producto.CategoriaMarca.Marca.nombre,
        categoriamarca: producto.CategoriaMarca.nombre,
        categoria: producto.SubCategorium.Categorium.nombre,
        subcategoria: producto.SubCategorium.nombre,
        garantia_cliente: producto.garantia_cliente,
        garantia_total: producto.garantia_total,
        imagen_principal: producto.imagen_principal,
        imageurl: producto.imageurl, // array de URLs
      }));

      // Resultado paginado
      return res.status(200).json(resp);
    } catch (error) {
      console.error("Error al obtener productos con paginación:", error);
      throw error;
    }

    //return res.status(200).json(resp);
  }
  async GetPaged2(req, res) {
    const page = parseInt(req.query.page, 10) || 1;
    const size = parseInt(req.query.size, 10) || 10;
    const { tenantid } = req.headers;
    const offset = (page - 1) * size; // Calcular el offset (cuántos registros saltar)
    const limit = size; // Número de registros por página
    const { rows: productos, count: total } = await Producto.findAndCountAll({
      where: {
        tenantId: tenantid,
      },
      limit,
      offset,
    });
    res.status(200).json({
      productos,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit), // Calcular el total de páginas
    });
  }
  // Llamar a multer para procesar la subida de archivos
  // const {
  //   id,
  //   nombre,
  //   pn,
  //   descripcion,
  //   stock,
  //   precio,
  //   MarcaId,
  //   CategoriaMarcaId,
  //   SubCategoriaId,
  //   CategoriaId,
  //   garantia_cliente,
  //   garantia_total,
  //   cantidad,
  //   imagen_principal,
  //   imageurl,
  // } = req.body.producto;

  // const Archivo_principal = await Archivo.create({
  //   url: `${prefijo}/${filename}`,
  //   nombre,
  //   tipo_Archivo: "imagen_producto",
  //   ubicacion: req.files.fileprincipal[0].destination,
  // });

  // const archivosSecundarios = await Promise.all(
  //   req.files.files.map(async (file) => {
  //     return await Archivo.create({
  //       url: `${prefijo}/${file.filename.replace(/\s+/g, "")}`,
  //       nombre,
  //       tipo_Archivo: "imagen_producto",
  //       ubicacion: file.destination,
  //     });
  //   })
  // );
  async Create(req, res) {
    const { tenantid } = req.headers;
    try {
      const {
        nombre,
        pn,
        descripcion,
        stock,
        precio,
        CategoriaMarcaId,
        SubCategoriaId,
        garantia_cliente,
        garantia_total,
      } = JSON.parse(req.body.producto);
      console.log("llega");
      if (req.files) {
        const urls = await uploadFilesToArchivosService(req.files, tenantid);
        const producto = await Producto.create({
          nombre,
          pn,
          descripcion,
          stock,
          precio,
          CategoriaMarcaId,
          SubCategoriaId,
          garantia_cliente,
          garantia_total,
          imagen_principal: urls[0],
          imageurl: urls,
          tenantId: tenantid,
        });
        //await producto.addArchivosRelacionados(archivosSecundarios);
        return res
          .status(200)
          .json({ message: "Producto Registrado Exitosamente", producto });
      } else {
        const producto = await Producto.create({
          nombre,
          pn,
          descripcion,
          stock,
          precio,
          CategoriaMarcaId,
          SubCategoriaId,
          garantia_cliente,
          garantia_total,
        });
        return res
          .status(200)
          .json({ message: "Producto Registrado Exitosamente" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async Update(req, res) {
    try {
      let {
        id,
        nombre,
        pn,
        descripcion,
        stock,
        precio,
        MarcaId,
        CategoriaMarcaId,
        SubCategoriaId,
        CategoriaId,
        garantia_cliente,
        garantia_total,
        cantidad,
        imagen_principal,
        imageurl,
      } = JSON.parse(req.body.producto);
      const { tenantid } = req.headers;

      const product = await Producto.findOne({
        where: { id, tenantId: tenantid },
      });
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      let eliminadas = [];
      let mantenidas = [];
      if (Array.isArray(imageurl)) {
        // imageurl.unshift(imagen_principal);
        eliminadas = product.imageurl
          .filter((img) => !imageurl.includes(img))
          .map((img) => img);
        mantenidas = product.imageurl.filter((img) => imageurl.includes(img));
      }

      if (eliminadas.length > 0) {
        const eliminados = await axios.delete(
          `${process.env.SERVICE_ARCHIVOS_URL}`,
          { data: { urls: eliminadas } }
        );
      }
      if (req.files) {
        console.log("guarda");
        let urls = [];
        if (req.files.file || req.files.files) {
          console.log("guarda files");
          urls = await uploadFilesToArchivosService(req.files);
        }
        // const urls = await uploadFilesToArchivosService(req.files);
        // Actualizar el producto, con o sin nuevo archivo principal
        const principal = req.files.file ? urls[0] : imagen_principal;
        const secundario = req.files.files
          ? urls.concat(mantenidas)
          : mantenidas;
        const producto = await Producto.update(
          {
            nombre,
            pn,
            descripcion,
            stock,
            precio,
            CategoriaMarcaId,
            SubCategoriaId,
            garantia_cliente,
            garantia_total,
            cantidad,
            imagen_principal: principal,
            imageurl: secundario,
            tenantId: tenantid,
          },
          { where: { id, tenantId: tenantid } }
        );
        return res
          .status(200)
          .json({ message: "Producto Registrado Exitosamente" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async isExist(req, res) {
    try {
      const { productoIds } = req.body;
      const productos = await Producto.findAll({
        where: {
          id: {
            [Op.in]: productoIds,
          },
        },
      });
      return res.status(200).json(productos);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async SearchProducto(req, res) {
    const { search } = req.query;
    const { tenantid } = req.headers;
    try {
      const producto = await Producto.findAll({
        where: {
          nombre: {
            [Op.like]: `%${search}%`,
          },
          tenantId: tenantid,
        },
      });
      if (!producto) {
        // Solo envía una respuesta si la cotización no se encuentra
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProductoController();
