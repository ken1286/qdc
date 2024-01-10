const mock = require('../mock');

class DeathService {
  static async getDeaths() {
    const deaths = mock.deaths;
    console.log(deaths);
    return deaths;
  }
}

module.exports = DeathService;
