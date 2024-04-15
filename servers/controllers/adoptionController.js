const Adoption = require("../models/Adoption");

exports.getAll = async (req, res) => {
  try {
    const adoptions = await Adoption.find();

    res.json(adoptions);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


exports.getOne = async (req, res) => {
    try {
        const {id} = req.params;
      const adoptions = await Adoption.findById(id);
  
      res.json(adoptions);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };

exports.create = async (req, res) => {
  try {
    const { firstName, lastName, email, address, phone, pet } = req.body;

    const created = await Adoption.create({
      firstName,
      lastName,
      phone,
      email,
      address,
      pet,
    });

    res.json({ message: "Adooptions successfuly created.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, address, phone, pet } = req.body;

    const updated = await Adoption.findByIdAndUpdate(id, {
      firstName,
      lastName,
      phone,
      email,
      address,
      pet,
    }, {new: true});

    res.json({ message: "Adooptions successfuly updated.", updated });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Adoption.findByIdAndDelete(id);

    res.json({ message: "Adoption succesfuly delete", deleted });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};