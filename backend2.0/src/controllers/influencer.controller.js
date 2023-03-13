const  models  = require('../../models');
const Influencer = models.Influencer;

exports.createInfluencer =  (req, res) => {
    const influencer = req.body;
    Influencer.create(influencer)
    .then(data => {
        res.status(200).send({
            status: "success",
        });
    })
    .catch(err => {
        res.status(500).send({
            status: "error",
            message: err.message
        });
    });
}

exports.getInfluencers =  (req, res) => {
    Influencer.findAll({ where: { Status: "Active" }})
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            status: "error",
            message: err.message
        });
    });
}

exports.getInfluencer =  (req, res) => {
    const influencerId = Number(req.params.id);
    Influencer.findByPk(influencerId)
    .then(data => {
        res.status(200).send({data});
    })
    .catch(err => {
        res.status(500).send({
            status: "error",
            message: err.message
        });
    });
}

exports.deleteInfluencer =  (req, res) => {
    Influencer.update({ Status : "InActive" }, { where: { id: req.params.id } }).then(
        (data) => {
            res.status(200).send({
                status: "success",
            });
        }
    )
}

exports.updateInfluencer =  (req, res) => {
    Influencer.update(req.body, { where: { id: req.params.id } }).then(
        (data) => {
            res.status(200).send({
                status: "success",
            });
        }
    )
}

exports.getInfluencerIdsandNames = (req, res) => {
    Influencer.findAll({ attributes: ['id', 'name'] })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        });
}

exports.getInfluencerNames = (req, res) => {
    Influencer.findAll({ attributes: ['name'] })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        });
}


