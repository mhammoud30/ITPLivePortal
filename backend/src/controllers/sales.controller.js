const SalesBrief = require('../models/salesBrief.model')

exports.create = (req, res) => {
    const { Agency, Client, ClientIndustry, CampaignName, CampaignOverview, CampaignObjective, CampaignObjectiveDetails, NumberofRecommendations, Currency, Budget, CreatedbyID, ViewedByTalent, Ready   } =req.body;
    const salesBrief = new SalesBrief(Agency, Client, ClientIndustry, CampaignName, CampaignOverview, CampaignObjective, CampaignObjectiveDetails, NumberofRecommendations, Currency, Budget, CreatedbyID, ViewedByTalent, Ready);

    SalesBrief.create( salesBrief, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(201).send({
                status: "success",  
            });
        }
    })
}

exports.getBriefsNotViewedByTalent = (req, res) => {
    SalesBrief.getBriefsNotViewedByTalent((err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    })
}

exports.getAllBriefs = (req, res) => {
    SalesBrief.getAllBriefs((err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    })
}

exports.ViewedByTalent = (req, res) => {  
    const id = Number(req.params.id)  
    SalesBrief.viewedByTalent(id, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    })
}

exports.getSalesBrief = (req, res) => {
    const id = Number(req.params.id)  
    SalesBrief.getBrief(id, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    })
}