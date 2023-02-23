const createNewUser = `
INSERT INTO users VALUES(null, ?, ?, ?, ?, ?,?)
`;

const findUserByEmail = `
SELECT * FROM users WHERE email = ?
`;

const findUserByID = `
SELECT * FROM users WHERE id = ?
`;

// influencer queries
const createNewInfluencer = `
INSERT INTO influencer Values(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, 'Active')
`;

const getAllInfluecers = ` Select * FROM influencer Where Status = 'Active'`

const deleteInfluencer = `UPDATE influencer SET Status = 'inActive' WHERE id = ?;
`

const findInfluencerByID = `
SELECT * FROM influencer WHERE id = ?
`;

const updateInfluencer = `
UPDATE influencer SET Name = ?, Gender = ?, Number = ?, Email = ?, MainContentLanguage = ?, SubContentLang = ?, 
MainVertical = ?, SubVertical = ? , Occupation = ?, ItpRelationship = ?, Nationality = ?, SecondNationality = ?,
CountryLocation = ?, CityLocation = ?, Address = ? , InstagramHandle = ?, InstagramFollowers = ?, InstagramLink = ?, 
TiktokHandle = ?, TiktokFollowers = ?, TiktokLink = ?, SnapchatHandle = ?, SnapchatFollowers = ?, SnapchatLink = ?,
TwitterHandle = ?, TwitterFollowers = ?, TwitterLink = ?, FacebookHandle = ?, FacebookFollowers = ?, FacebookLink = ?,
YoutubeHandle = ?, YoutubeFollowers = ?, YoutubeLink = ?, AudienceMalePer = ?, AudienceFemalePer = ?, AgeGroup1317 = ?, 
AgeGroup1824 = ?, AgeGroup2534 = ?, AgeGroup3544 = ?, AgeGroup4554 = ?, AgeGroup55 = ?, AudienceTopCountries1 = ?,
AudienceTopCountries1Percentage = ?, AudienceTopCountries2 = ?, AudienceTopCountries2Percentage = ?, AudienceTopCountries3 =?,
AudienceTopCountries3Percentage = ?, KSALicense = ?, UAELicense = ?, AgencyContactPerson = ?, AgencyNumber = ?, AgencyEmail = ?, 
PreviousBrands = ? , Bio = ?, Notes = ? Where id = ? 
`

// Celebrity queries 
const createNewCelebrity = `
INSERT INTO celebrity Values(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, 'Active')
`;

const getAllCelebrities = ` Select * FROM celebrity Where Status = 'Active'`

const deleteCelebrity = `UPDATE celebrity SET Status = 'inActive' WHERE id = ?;
`
const findCelebrityByID = `
SELECT * FROM celebrity WHERE id = ?
`;

const updateCelebrity = `
UPDATE celebrity SET Name = ?, Gender = ?, Number = ?, Email = ?, MainContentLanguage = ?, SubContentLang = ?, 
MainVertical = ?, SubVertical = ? , Occupation = ?, ItpRelationship = ?, Nationality = ?, SecondNationality = ?,
CountryLocation = ?, CityLocation = ?, Address = ? , InstagramHandle = ?, InstagramFollowers = ?, InstagramLink = ?, 
TiktokHandle = ?, TiktokFollowers = ?, TiktokLink = ?, SnapchatHandle = ?, SnapchatFollowers = ?, SnapchatLink = ?,
TwitterHandle = ?, TwitterFollowers = ?, TwitterLink = ?, FacebookHandle = ?, FacebookFollowers = ?, FacebookLink = ?,
YoutubeHandle = ?, YoutubeFollowers = ?, YoutubeLink = ?, AudienceMalePer = ?, AudienceFemalePer = ?, AgeGroup1317 = ?, 
AgeGroup1824 = ?, AgeGroup2534 = ?, AgeGroup3544 = ?, AgeGroup4554 = ?, AgeGroup55 = ?, AudienceTopCountries1 = ?,
AudienceTopCountries1Percentage = ?, AudienceTopCountries2 = ?, AudienceTopCountries2Percentage = ?, AudienceTopCountries3 =?,
AudienceTopCountries3Percentage = ?, KSALicense = ?, UAELicense = ?, AgencyContactPerson = ?, AgencyNumber = ?, AgencyEmail = ?, 
PreviousBrands = ? , Bio = ?, Notes = ? Where id = ? 
`

module.exports = {
    createNewUser,
    findUserByEmail,
    findUserByID,
    createNewInfluencer,
    getAllInfluecers,
    deleteInfluencer,
    findInfluencerByID,
    createNewCelebrity,
    getAllCelebrities,
    deleteCelebrity,
    findCelebrityByID,
    updateInfluencer,
    updateCelebrity
};

