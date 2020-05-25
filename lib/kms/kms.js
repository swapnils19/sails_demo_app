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

  createWebRtcEndpoint() {
    this.webRtcEndpoint = this.pipeline.create('WebRtcEndpoint', (error, webRtcEndpoint) => {
      if (error) {
        return error;
      }

      return webRtcEndpoint;
    });
  }

  connectWebRtcEndpoint() {
    this.webRtcEndpoint.connect(webRtcEndpoint, (error) => {
      if (error) {
        return error;
      }
      return null;
    });
  }

  processIceCandidate(sessions, sessionId, incomingCandidate, candidatesQueue) {
    let candidate = kurento.getComplexType('IceCandidate')(incomingCandidate);

    if (sessions[sessionId]) {
      console.info('Sending candidate');
      let webRtcEndpoint = sessions[sessionId].webRtcEndpoint;
      webRtcEndpoint.addIceCandidate(candidate);
    }
    else {
      console.info('Queueing candidate');
      if (!candidatesQueue[sessionId]) {
        candidatesQueue[sessionId] = [];
      }
      candidatesQueue[sessionId].push(candidate);
    }
  }

  // This method needs a major refactor
  webRtcHandshake() {
    // This should be handled in websocket controlller
    this.webRtcEndpoint.on('OnIceCandidate', (event) => {
      let candidate = kurento.getComplexType('IceCandidate')(event.candidate);
      ws.send(JSON.stringify({
        id: 'iceCandidate',
        candidate: candidate
      }));
    });

    // separate offer should be returned from here
    this.webRtcEndpoint.processOffer(sdpOffer, (error, sdpAnswer) => {
      if (error) {
        pipeline.release();
        return callback(error);
      }

      sessions[sessionId] = {
        'pipeline': pipeline,
        'webRtcEndpoint': this.webRtcEndpoint
      }
      return callback(null, sdpAnswer);
    });

    this.webRtcEndpoint.gatherCandidates((error) => {
      if (error) {
        return callback(error);
      }
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
