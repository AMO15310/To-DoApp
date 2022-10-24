const db = require("./config");
const { v4: uuidv4 } = require("uuid");

const getUser = (req, res) => {
  try {
    db.query(`SELECT * FROM activities`, (err, activities) => {
      if (err) return console.log({ err });
      return res.json(activities);
    });
  } catch (error) {}
};

const postActivity = async (req, res) => {
  // const body = await req.body;
  const { title, description, duedate } = await req.body;
  const id = uuidv4();
  try {
    const values = {
      id,
      title,
      description,
      duedate,
    };
    let query = `INSERT INTO activities  SET ?`;
    db.query(query, values, (err, response) => {
      if (err) return console.log(err);
      return res.json(response);
    });
  } catch (error) {}
};

const deleteActivity = async (req, res) => {
  const id = await req.params.id;
  try {
    let query = `DELETE FROM activities WHERE id ='${id}'`;
    db.query(query, (err, response) => {
      if (err) return console.log(err);
      return res.json(response);
    });
  } catch (error) {}
};
module.exports = { getUser, postActivity, deleteActivity };
