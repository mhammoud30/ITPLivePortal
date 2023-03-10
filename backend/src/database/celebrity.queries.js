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
    createNewCelebrity,
    getAllCelebrities,
    deleteCelebrity,
    findCelebrityByID,
    updateCelebrity,
};

