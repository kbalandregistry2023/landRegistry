console.log("hi")
// const LandDetailsInfo = require('./LandRegistryDB');
// const LandRegistrationsInfo = require('./LandRegistryDB');

const LandRegistryDB = require('./LandRegistryDB');
const filter = { "registrationDocumentVolumePageNumber": '1751/271-278/30/218' };

// LandDetailsInfo.find(filter)
//     .then(function (data) {
//         console.log(data)
//     });


LandRegistryDB.LandRegistrationsInfo.find(filter)
    .then(function (data) {
        console.log(data)
    });

