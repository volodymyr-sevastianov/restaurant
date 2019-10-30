function validation(req, res, next) {
  const id = req.params.reservationId;
  if (!Number(id)) {
    res.status(400).json({ message: "Reservation id must be of type string" });
    return;
  }
  next();
}

export { validation };
