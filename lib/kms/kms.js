'use strict';

const Kurento = require('kurento-client');
// TODO assign in some global config
const kServerUri = 'ws://localhost:8888/kurento';

class KMS {
  /**
  * Create an object for `this.kurentoClient` if it is not available.
  */
  createKurentoClient() {
    if (this.kurentoClient) {
      return;
    }

    this.kurentoClient = Kurento(kServerUri, (error, kClient) => {
      if (error) {
        console.log(`Could not find media server at address ${kServerUri}`);
        return error;
      }

      return kClient;
    });
  }

  /**
   * This is a temporary method.
   */
  get kurentoObjects() {
    return {
      kurentoClient: this.kurentoClient,
      kurentoPipeline: this.kurentoPipeline
    }
  }

  /**
   * Create a MediaPipeline object which is presented as `this.kurentoPipeline`.
   * This method must be called after the creation of `this,kurentoClient` object
   */
  createMediaPipeline() {
    this.kurentoPipeline = this.kurentoClient.create('MediaPipeline', (error, kPipeline) => {
      if (error) {
        return exits.error(`Exiting with error ${error}`);
      }

      return kPipeline;
    });
  }

  /**
   * This is a temporary method.
   */
  info() {
    console.log('inside KMS class');
  }
}

module.exports = KMS;
