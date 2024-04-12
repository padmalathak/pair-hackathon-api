const { error } = require("console");
const express = require("express");
const fs = require("fs");
const router = express.Router();

const readPortfolioData = () => {
  const portfolioData = fs.readFileSync("./data/data.json");
  return JSON.parse(portfolioData);
};

router.route("/").get((req, res) => {
  const portfolios = readPortfolioData();
  let portfolio = [];
  portfolios.forEach((element) => {
    portfolio.push({
      id: element.id,
      name: element.name,
      title: element.title,
      emal: element.email,
      number: element.number,
      skills: element.skills,
    });
  });
  res.json(portfolio);
});

router.get("/:id", (req, res) => {
  const personID = req.params.id;
  const portfolios = readPortfolioData();
  const foundPortfolio = portfolios.find(
    (portfolio) => portfolio.id === personID
  );
  foundPortfolio ? res.json(foundPortfolio) : res.status(404).send(`Not Found`);
});

module.exports = router;
