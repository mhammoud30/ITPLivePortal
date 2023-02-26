const Influencer = require('../models/influencer.model');
const { logger } = require('../utils/logger');

exports.createInfluencer = (req, res) => {
    const { Name, Gender, Number, Email, MainContentLanguage, SubContentLang, MainVertical, SubVertical, Occupation, ItpRelationship, Nationality, SecondNationality, CountryLocation, CityLocation, Address, InstagramHandle, InstagramFollowers, InstagramLink, TiktokHandle, TiktokFollowers, TiktokLink, SnapchatHandle, SnapchatFollowers, SnapchatLink, TwitterHandle, TwitterFollowers, TwitterLink, FacebookHandle, FacebookFollowers, FacebookLink, YoutubeHandle, YoutubeFollowers, YoutubeLink, AudienceMalePer, AudienceFemalePer, AgeGroup1317, AgeGroup1824, AgeGroup2534, AgeGroup3544, AgeGroup4554, AgeGroup55, AudienceTopCountries1, AudienceTopCountries1Percentage, AudienceTopCountries2, AudienceTopCountries2Percentage, AudienceTopCountries3, AudienceTopCountries3Percentage, KSALicense, UAELicense, AgencyContactPerson, AgencyNumber, AgencyEmail, PreviousBrands, Bio, Notes } = req.body;


    const influencer = new Influencer(Name.trim(), Gender.trim(), Number, Email.trim(), MainContentLanguage.trim(), SubContentLang, MainVertical, SubVertical, Occupation, ItpRelationship, Nationality, SecondNationality, CountryLocation, CityLocation, Address, InstagramHandle, InstagramFollowers, InstagramLink, TiktokHandle, TiktokFollowers, TiktokLink, SnapchatHandle, SnapchatFollowers, SnapchatLink, TwitterHandle, TwitterFollowers, TwitterLink, FacebookHandle, FacebookFollowers, FacebookLink, YoutubeHandle, YoutubeFollowers, YoutubeLink, AudienceMalePer, AudienceFemalePer, AgeGroup1317, AgeGroup1824, AgeGroup2534, AgeGroup3544, AgeGroup4554, AgeGroup55, AudienceTopCountries1, AudienceTopCountries1Percentage, AudienceTopCountries2, AudienceTopCountries2Percentage, AudienceTopCountries3, AudienceTopCountries3Percentage, KSALicense, UAELicense, AgencyContactPerson, AgencyNumber, AgencyEmail, PreviousBrands, Bio, Notes  )

    Influencer.create(influencer, (err, data) => {
                if(err){
                    res.status(500).send({
                        status: 'error',
                        message: err.message
                    });
                }else {
                    res.status(201).send({
                        status: "success",

                    })
                }



    })
}
exports.getInfluencers = (req, res) => {
    Influencer.getAllInfluencers( (err, data) => {
        if(err){
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if(data){
            /* console.log(req.headers.authorization); */
            res.status(200).send(data);
            return;
        }
        
    })
}

exports.deleteInfluencer = (req, res) => {
    Influencer.deleteInfluencer(req.params.id, (err, data) => {
        if(err){
            res.status(500).send({
                status: 'error',
                message: err.message
            });
        }else {
            res.status(201).send({
                status: "success",

            })
        }
    })
}


exports.getInfluencer = (req, res) => {
    const id = Number(req.params.id);
    Influencer.findByID(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `Influencer with id ${id} was not found`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if(data){
            res.status(200).send({data});
            
            return;
        }
        res.status(401).send({
            status: 'error',
            message: 'not found'
        });
    })
}


exports.updateInfluencer = (req, res) => {
    const { Name, Gender, Number, Email, MainContentLanguage, SubContentLang, MainVertical, SubVertical, Occupation, ItpRelationship, Nationality, SecondNationality, CountryLocation, CityLocation, Address, InstagramHandle, InstagramFollowers, InstagramLink, TiktokHandle, TiktokFollowers, TiktokLink, SnapchatHandle, SnapchatFollowers, SnapchatLink, TwitterHandle, TwitterFollowers, TwitterLink, FacebookHandle, FacebookFollowers, FacebookLink, YoutubeHandle, YoutubeFollowers, YoutubeLink, AudienceMalePer, AudienceFemalePer, AgeGroup1317, AgeGroup1824, AgeGroup2534, AgeGroup3544, AgeGroup4554, AgeGroup55, AudienceTopCountries1, AudienceTopCountries1Percentage, AudienceTopCountries2, AudienceTopCountries2Percentage, AudienceTopCountries3, AudienceTopCountries3Percentage, KSALicense, UAELicense, AgencyContactPerson, AgencyNumber, AgencyEmail, PreviousBrands, Bio, Notes } = req.body;

    const influencer = new Influencer(Name.trim(), Gender.trim(), Number, Email.trim(), MainContentLanguage.trim(), SubContentLang, MainVertical, SubVertical, Occupation, ItpRelationship, Nationality, SecondNationality, CountryLocation, CityLocation, Address, InstagramHandle, InstagramFollowers, InstagramLink, TiktokHandle, TiktokFollowers, TiktokLink, SnapchatHandle, SnapchatFollowers, SnapchatLink, TwitterHandle, TwitterFollowers, TwitterLink, FacebookHandle, FacebookFollowers, FacebookLink, YoutubeHandle, YoutubeFollowers, YoutubeLink, AudienceMalePer, AudienceFemalePer, AgeGroup1317, AgeGroup1824, AgeGroup2534, AgeGroup3544, AgeGroup4554, AgeGroup55, AudienceTopCountries1, AudienceTopCountries1Percentage, AudienceTopCountries2, AudienceTopCountries2Percentage, AudienceTopCountries3, AudienceTopCountries3Percentage, KSALicense, UAELicense, AgencyContactPerson, AgencyNumber, AgencyEmail, PreviousBrands, Bio, Notes  )
    const id = req.params.id
    Influencer.update(influencer, id, ( err, data) => {
        if(err){
            res.status(500).send({
                status: 'error',
                message: err.message
            });
        }else {
            res.status(201).send({
                status: "success",

            })
        }
    })

}

exports.getInfluencerNames = (req, res) => {
    Influencer.getInfluencerNames( (err, data) => {
        if(err){
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if(data){
           
            res.status(200).send(data);
            return;
        }
        
    })
}