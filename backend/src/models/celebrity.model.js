const db = require('../config/db.config');
const { logger } = require('../utils/logger');
const { createNewCelebrity: createnewCelebrityQuery, getAllCelebrities: getAllCelebritiesQuery, deleteCelebrity: deleteCelebrityQuery, findCelebrityByID : findCelebrityByIDQuery, updateCelebrity: updateCelebrityQuery } = require('../database/queries');

class Celebrity {
    constructor(Name, Gender, Number, Email, MainContentLanguage, SubContentLang, MainVertical, SubVertical, Occupation, ItpRelationship, Nationality, SecondNationality, CountryLocation, CityLocation, Address, InstagramHandle, InstagramFollowers, InstagramLink, TiktokHandle, TiktokFollowers, TiktokLink, SnapchatHandle, SnapchatFollowers, SnapchatLink, TwitterHandle, TwitterFollowers, TwitterLink, FacebookHandle, FacebookFollowers, FacebookLink, YoutubeHandle, YoutubeFollowers, YoutubeLink, AudienceMalePer, AudienceFemalePer, AgeGroup1317, AgeGroup1824, AgeGroup2534, AgeGroup3544, AgeGroup4554, AgeGroup55, AudienceTopCountries1, AudienceTopCountries1Percentage, AudienceTopCountries2, AudienceTopCountries2Percentage, AudienceTopCountries3, AudienceTopCountries3Percentage, KSALicense, UAELicense, AgencyContactPerson, AgencyNumber, AgencyEmail, PreviousBrands, Bio, Notes, Status) {
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

    static create(newCelebrity, cb) {
        db.query(createnewCelebrityQuery, [
            newCelebrity.Name,
            newCelebrity.Gender,
            newCelebrity.Number,
            newCelebrity.Email,
            newCelebrity.MainContentLanguage,
            newCelebrity.SubContentLang,
            newCelebrity.MainVertical,
            newCelebrity.SubVertical,
            newCelebrity.Occupation,
            newCelebrity.ItpRelationship,
            newCelebrity.Nationality,
            newCelebrity.SecondNationality,
            newCelebrity.CountryLocation,
            newCelebrity.CityLocation,
            newCelebrity.Address,
            newCelebrity.InstagramHandle,
            newCelebrity.InstagramFollowers,
            newCelebrity.InstagramLink,
            newCelebrity.TiktokHandle,
            newCelebrity.TiktokFollowers,
            newCelebrity.TiktokLink,
            newCelebrity.SnapchatHandle,
            newCelebrity.SnapchatFollowers,
            newCelebrity.SnapchatLink,
            newCelebrity.TwitterHandle,
            newCelebrity.TwitterFollowers,
            newCelebrity.TwitterLink,
            newCelebrity.FacebookHandle,
            newCelebrity.FacebookFollowers,
            newCelebrity.FacebookLink,
            newCelebrity.YoutubeHandle,
            newCelebrity.YoutubeFollowers,
            newCelebrity.YoutubeLink,
            newCelebrity.AudienceMalePer,
            newCelebrity.AudienceFemalePer,
            newCelebrity.AgeGroup1317,
            newCelebrity.AgeGroup1824,
            newCelebrity.AgeGroup2534,
            newCelebrity.AgeGroup3544,
            newCelebrity.AgeGroup4554,
            newCelebrity.AgeGroup55,
            newCelebrity.AudienceTopCountries1,
            newCelebrity.AudienceTopCountries1Percentage,
            newCelebrity.AudienceTopCountries2,
            newCelebrity.AudienceTopCountries2Percentage,
            newCelebrity.AudienceTopCountries3,
            newCelebrity.AudienceTopCountries3Percentage,
            newCelebrity.KSALicense,
            newCelebrity.UAELicense,
            newCelebrity.AgencyContactPerson,
            newCelebrity.AgencyNumber,
            newCelebrity.AgencyEmail,
            newCelebrity.PreviousBrands,
            newCelebrity.Bio,
            newCelebrity.Notes,
            newCelebrity.Status,
        ], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            cb(null, {})
        }
        )
    }


    static getAllCelebrities(cb) {
        db.query(getAllCelebritiesQuery, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: 'no_results' }, null);
        })
    }

    static deleteCelebrity(id, cb) {
        db.query(deleteCelebrityQuery, id, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            cb(null, {})
        })
    }


    static findByID(id, cb) {
        db.query(findCelebrityByIDQuery, id, (err, res) => {
            if(err){
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if(res.length){
                cb(null, res[0]);
                return;
            }
            cb({kind: "not_found"}, null);
        })
    }

    static update(celebrity, id, cb){
        db.query(updateCelebrityQuery, [
            celebrity.Name,
            celebrity.Gender,
            celebrity.Number,
            celebrity.Email,
            celebrity.MainContentLanguage,
            celebrity.SubContentLang,
            celebrity.MainVertical,
            celebrity.SubVertical,
            celebrity.Occupation,
            celebrity.ItpRelationship,
            celebrity.Nationality,
            celebrity.SecondNationality,
            celebrity.CountryLocation,
            celebrity.CityLocation,
            celebrity.Address,
            celebrity.InstagramHandle,
            celebrity.InstagramFollowers,
            celebrity.InstagramLink,
            celebrity.TiktokHandle,
            celebrity.TiktokFollowers,
            celebrity.TiktokLink,
            celebrity.SnapchatHandle,
            celebrity.SnapchatFollowers,
            celebrity.SnapchatLink,
            celebrity.TwitterHandle,
            celebrity.TwitterFollowers,
            celebrity.TwitterLink,
            celebrity.FacebookHandle,
            celebrity.FacebookFollowers,
            celebrity.FacebookLink,
            celebrity.YoutubeHandle,
            celebrity.YoutubeFollowers,
            celebrity.YoutubeLink,
            celebrity.AudienceMalePer,
            celebrity.AudienceFemalePer,
            celebrity.AgeGroup1317,
            celebrity.AgeGroup1824,
            celebrity.AgeGroup2534,
            celebrity.AgeGroup3544,
            celebrity.AgeGroup4554,
            celebrity.AgeGroup55,
            celebrity.AudienceTopCountries1,
            celebrity.AudienceTopCountries1Percentage,
            celebrity.AudienceTopCountries2,
            celebrity.AudienceTopCountries2Percentage,
            celebrity.AudienceTopCountries3,
            celebrity.AudienceTopCountries3Percentage,
            celebrity.KSALicense,
            celebrity.UAELicense,
            celebrity.AgencyContactPerson,
            celebrity.AgencyNumber,
            celebrity.AgencyEmail,
            celebrity.PreviousBrands,
            celebrity.Bio,
            celebrity.Notes,
            id
        ],(err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            cb(null, {})
        }
         )
    }
}

module.exports = Celebrity;
