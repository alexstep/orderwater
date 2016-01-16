// Отправка сообщения в slack
slack = {

 	message: function(msg){
 		if (config.slack.enabled) {
 			this.send(config.slack.channel, config.slack.from, msg);
 		} else {
 			console.log(config.slack.channel, config.slack.from, msg);
 		}
 	},

 	send: function(channel, from, msg){
		request.post({
			uri: 'https://slack.com/api/chat.postMessage',
			form: {
				token:config.slack.token,
				channel:channel,
				username:from,
				text:msg,
				mrkdwn:true,
			}
		}, function(err, res, body) { });
 	}
};