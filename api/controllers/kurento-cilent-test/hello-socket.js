module.exports = {


  friendlyName: 'Hello socket',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    if (!this.req.isSocket) {
      return this.res.badRequest();
    }

    console.log(`incoming socket -> ${sails.sockets.getId(this.req)}`);
    return; // sails.hooks.views.render.ok();

  }


};
