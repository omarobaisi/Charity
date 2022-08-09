const charity = new CharityApi();

const renderCharities = async () => {
  await charity.getAllCharity();
};

renderCharities();
