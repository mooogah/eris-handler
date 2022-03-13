// a list of events can be found here
// https://abal.moe/Eris/docs/0.16.1/Client
// the name is case sensetive - make sure it is spelt correct
exports.event = {
    name: "error",
};

// run function - to run the event
// eslint-disable-next-line no-unused-vars
exports.run = async (client, err, id) => {
    // If there is an Websocket disconnected error, we return it and do nothing
    if (err.code === 1006) {
        return;
    } else {
        throw new Error(err);
    }
};
