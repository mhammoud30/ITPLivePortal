const createNewInfluencerQuery = `
INSERT INTO influencer Values(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?, 'Active')
`; 

const getAllInfluecersQuery = ` Select * FROM influencer Where Status = 'Active'`

const getInfluencerNamesQuery = ` Select Name FROM influencer Where Status = 'Active'`

const getInfluencerIdsAndNamesQuery = ` Select id, Name FROM influencer Where Status = 'Active'`;

const deleteInfluencerQuery = `UPDATE influencer SET Status = 'inActive' WHERE id = ?;
`

const findInfluencerByIDQuery = `
SELECT * FROM influencer WHERE id = ?
`;

const updateInfluencerQuery = `
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
module.exports = {
    createNewInfluencerQuery,
    getAllInfluecersQuery,
    deleteInfluencerQuery,
    findInfluencerByIDQuery,
    updateInfluencerQuery,
    getInfluencerNamesQuery,
    getInfluencerIdsAndNamesQuery

}