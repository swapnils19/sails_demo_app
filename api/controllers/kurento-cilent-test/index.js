module.exports = {


  friendlyName: 'Index',


  description: 'Index kurento cilent test.',


  inputs: {

  },


  exits: {

  },


  fn: async function (_inputs) {
    const kms = await sails.helpers.kmsClientUtils();
    await kms.createKurentoClient();
    await kms.createMediaPipeline();
    let kurentoPipeline = kms.kurentoObjects.kurentoPipeline;
    // let kurentoPipeline = await sails.helpers.kurentoPipeline.with({ kurentoClient: kurentoClient });
    return kurentoPipeline;
  }


};
