const db = require('../config/db.config');
const { logger } = require('../utils/logger');
const { createNewInfluencer: createNewInfluencerQuery, getAllInfluecers : getAllInfluencersQuery} = require('../database/queries');

class Influencer {
    constructor(Name, Gender, Number, Email, MainContentLanguage, SubContentLang, MainVertical, SubVertical, Occupation, ItpRelationship, Nationality, SecondNationality, CountryLocation, CityLocation, Address, InstagramHandle, InstagramFollowers, InstagramLink, TiktokHandle, TiktokFollowers, TiktokLink, SnapchatHandle, SnapchatFollowers, SnapchatLink, TwitterHandle, TwitterFollowers, TwitterLink, FacebookHandle, FacebookFollowers, FacebookLink, YoutubeHandle, YoutubeFollowers, YoutubeLink, AudienceMalePer, AudienceFemalePer, AgeGroup1317, AgeGroup1824, AgeGroup2534, AgeGroup3544, AgeGroup4554, AgeGroup55, AudienceTopCountries1, AudienceTopCountries1Percentage, AudienceTopCountries2, AudienceTopCountries2Percentage, AudienceTopCountries3, AudienceTopCountries3Percentage, KSALicense, UAELicense, AgencyContactPerson, AgencyNumber, AgencyEmail, PreviousBrands, Bio, Notes, Status){
        this.Name = Name;
        this.Gender = Gender;
        this.Number = Number;
        this.Email = Email;
        this.MainContentLanguage = MainContentLanguage;
        this.SubContentLang = SubContentLang;
        this.MainVertical = MainVertical;
        this.SubVertical = SubVertical;
        this.Occupation = Occupation;
        this.ItpRelationship = ItpRelationship;
        this.Nationality = Nationality;
        this.SecondNationality = SecondNationality;
        this.CountryLocation = CountryLocation;
        this.CityLocation = CityLocation;
        this.Address = Address;
        this.InstagramHandle = InstagramHandle;
        this.InstagramFollowers = InstagramFollowers;
        this.InstagramLink = InstagramLink;
        this.TiktokHandle = TiktokHandle;
        this.TiktokFollowers = TiktokFollowers;
        this.TiktokLink = TiktokLink;
        this.SnapchatHandle = SnapchatHandle;
        this.SnapchatFollowers = SnapchatFollowers;
        this.SnapchatLink = SnapchatLink;
        this.TwitterHandle = TwitterHandle;
        this.TwitterFollowers = TwitterFollowers;
        this.TwitterLink = TwitterLink;
        this.FacebookHandle = FacebookHandle;
        this.FacebookFollowers = FacebookFollowers;
        this.FacebookLink = FacebookLink;
        this.YoutubeHandle = YoutubeHandle;
        this.YoutubeFollowers = YoutubeFollowers;
        this.YoutubeLink = YoutubeLink;
        this.AudienceMalePer = AudienceMalePer;
        this.AudienceFemalePer = AudienceFemalePer;
        this.AgeGroup1317 = AgeGroup1317;
        this.AgeGroup1824 = AgeGroup1824;
        this.AgeGroup2534 = AgeGroup2534;
        this.AgeGroup3544 = AgeGroup3544;
        this.AgeGroup4554 = AgeGroup4554;
        this.AgeGroup55 = AgeGroup55;
        this.AudienceTopCountries1 = AudienceTopCountries1;
        this.AudienceTopCountries1Percentage = AudienceTopCountries1Percentage;
        this.AudienceTopCountries2 = AudienceTopCountries2;
        this.AudienceTopCountries2Percentage = AudienceTopCountries2Percentage;
        this.AudienceTopCountries3 = AudienceTopCountries3;
        this.AudienceTopCountries3Percentage = AudienceTopCountries3Percentage
        this.KSALicense = KSALicense;
        this.UAELicense = UAELicense;
        this.AgencyContactPerson = AgencyContactPerson;
        this.AgencyNumber = AgencyNumber;
        this.AgencyEmail = AgencyEmail;
        this.PreviousBrands = PreviousBrands;
        this.Bio = Bio;
        this.Notes = Notes;
        this.Status = Status;
    }

    static create(newInfluencer, cb){
        db.query(createNewInfluencerQuery, [
            newInfluencer.Name,
            newInfluencer.Gender,
            newInfluencer.Number,
            newInfluencer.Email,
            newInfluencer.MainContentLanguage,
            newInfluencer.SubContentLang,
            newInfluencer.MainVertical,
            newInfluencer.SubVertical,
            newInfluencer.Occupation,
            newInfluencer.ItpRelationship,
            newInfluencer.Nationality,
            newInfluencer.SecondNationality,
            newInfluencer.CountryLocation,
            newInfluencer.CityLocation,
            newInfluencer.Address,
            newInfluencer.InstagramHandle,
            newInfluencer.InstagramFollowers,
            newInfluencer.InstagramLink,
            newInfluencer.TiktokHandle,
            newInfluencer.TiktokFollowers,
            newInfluencer.TiktokLink,
            newInfluencer.SnapchatHandle,
            newInfluencer.SnapchatFollowers,
            newInfluencer.SnapchatLink,
            newInfluencer.TwitterHandle,
            newInfluencer.TwitterFollowers,
            newInfluencer.TwitterLink,
            newInfluencer.FacebookHandle,
            newInfluencer.FacebookFollowers,
            newInfluencer.FacebookLink,
            newInfluencer.YoutubeHandle,
            newInfluencer.YoutubeFollowers,
            newInfluencer.YoutubeLink,
            newInfluencer.AudienceMalePer,
            newInfluencer.AudienceFemalePer,
            newInfluencer.AgeGroup1317,
            newInfluencer.AgeGroup1824,
            newInfluencer.AgeGroup2534,
            newInfluencer.AgeGroup3544,
            newInfluencer.AgeGroup4554,
            newInfluencer.AgeGroup55,
            newInfluencer.AudienceTopCountries1,
            newInfluencer.AudienceTopCountries1Percentage,
            newInfluencer.AudienceTopCountries2,
            newInfluencer.AudienceTopCountries2Percentage,
            newInfluencer.AudienceTopCountries3,
            newInfluencer.AudienceTopCountries3Percentage,
            newInfluencer.KSALicense,
            newInfluencer.UAELicense,
            newInfluencer.AgencyContactPerson,
            newInfluencer.AgencyNumber,
            newInfluencer.AgencyEmail,
            newInfluencer.PreviousBrands,
            newInfluencer.Bio,
            newInfluencer.Notes,
            newInfluencer.Status,
        ], (err, res) => {
            if (err){
            logger.error(err.message);
            cb(err, null);
            return;
            }
            cb(null,{} )
        }
        )
    }


    static getAllInfluencers(cb) {
        db.query(getAllInfluencersQuery, (err, res) => {
            if(err){
                logger.error(err.message);
                cb(err,null);
                return;
            }
            if(res.length){
                cb(null,res);
                return;
            }
            cb({kind :'no_results'}, null);
        })
    }


}

module.exports = Influencer;
