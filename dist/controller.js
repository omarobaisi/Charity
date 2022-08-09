const charity = new Charity();

const renderCharities = async () => {
    await charity.getAllCharity();
}

renderCharities();