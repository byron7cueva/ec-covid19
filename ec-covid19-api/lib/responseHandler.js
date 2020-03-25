exports.sucess = function (req, res, data, status = 200) {
  res.status(status).send({
    error: false,
    data,
    status
  })
}
