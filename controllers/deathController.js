// const asyncHandler = require('express-async-handler');
const DeathService = require('../services/deathService');

class DeathController {
  static async deathCount(req, res) {
    try {
      const deaths = await DeathService.getDeaths();
      console.log(deaths);
      res.status(200).json({ deaths });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = DeathController;
