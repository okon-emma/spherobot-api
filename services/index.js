const index = (req, res) => {
  // Default Route
  res.send({ status: true, route: req.route, headers: req.headers });
};

module.exports = {
  index,
};
