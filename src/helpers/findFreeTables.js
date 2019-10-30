async function findFreeTables({
  guestsQuantity,
  startDate,
  endDate,
  repository
}) {
  const freeTables = await repository.getFreeTables({
    guestsQuantity,
    startDate,
    endDate
  });
  if (freeTables[0]) {
    return freeTables;
  } else {
    throw new Error("There is no table for your reservation!");
  }
}

export { findFreeTables };
