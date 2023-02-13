console.log("hi")
// const LandDetailsInfo = require('./model/LandRegistryDB');
// const LandRegistrationsInfo = require('./model/LandRegistryDB');

const LandRegistryDB = require('./model/LandRegistryDB');
const filter = { "registrationDocumentVolumePageNumber": '1751/271-278/30/218' };

// LandDetailsInfo.find(filter)
//     .then(function (data) {
//         console.log(data)
//     });


LandRegistryDB.LandRegistrationsInfo.find(filter)
    .then(function (data) {
        console.log(data)
    });

