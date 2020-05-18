const KMS = require(`${sails.config.appPath}/lib/kms/kms`);

module.exports = {
  friendlyName: 'Kurento Client Utilities',
  description: 'Wrapper for Kurento Client lib Uitls',
  inputs: {
  },

  exits: {
    success: {
      description: 'Return a KMS object',
    },
    error: {}
  },

  fn: function (_inputs, exits) {
    return exits.success(new KMS());
  }
};
