const db = require('../config/db.config');
const {getBrief: getBriefQuery, createNewSalesBrief : createNewSalesBriefQuery, briefsNotViewedByTalent: briefsNotViewedByTalentQuery, getAllBriefs: getAllBriefsQuery, viewedByTalent: viewedByTalentQuery} = require('../database/sales.queries')

const { logger } = require('../utils/logger');

class SalesBrief {
    constructor(Agency, Client, ClientIndustry, CampaignName, CampaignOverview, CampaignObjective,CampaignObjectiveDetails,NumberofRecommendations, Currency, Budget, CreatedbyID, ViewedByTalent, Ready )
    {
        this.Agency = Agency;
        this.Client = Client;
        this.ClientIndustry = ClientIndustry;
        this.CampaignName = CampaignName;
        this.CampaignOverview = CampaignOverview
        this.CampaignObjective = CampaignObjective;
        this.CampaignObjectiveDetails = CampaignObjectiveDetails;
        this.NumberofRecommendations = NumberofRecommendations;
        this.Currency = Currency;
        this.Budget = Budget;
        this.CreatedbyID = CreatedbyID;
        this.ViewedByTalent = ViewedByTalent;
        this.Ready = Ready;
        
    }

    static create(newSalesBrief, cb){
        db.query(createNewSalesBriefQuery, [
            newSalesBrief.Agency,
            newSalesBrief.Client,
            newSalesBrief.ClientIndustry,
            newSalesBrief.CampaignName,
            newSalesBrief.CampaignOverview,
            newSalesBrief.CampaignObjective,
            newSalesBrief.CampaignObjectiveDetails,
            newSalesBrief.NumberofRecommendations,
            newSalesBrief.Currency,
            newSalesBrief.Budget,
            newSalesBrief.CreatedbyID,
            newSalesBrief.ViewedByTalent,
            newSalesBrief.Ready
        ], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }cb(null, {});
        })
    }

    static getBriefsNotViewedByTalent(cb){
        db.query(briefsNotViewedByTalentQuery, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }cb(null, res[0]);
            
        })
    }

    static getAllBriefs(cb){
        db.query(getAllBriefsQuery, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }cb(null, res);
        })
    }

    static viewedByTalent(id, cb){
        db.query(viewedByTalentQuery, id, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }cb(null, res);
        })
    }

    static getBrief(id, cb){
        db.query(getBriefQuery, id, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }cb(null, res[0]);
        })
    }
}

    



module.exports = SalesBrief;