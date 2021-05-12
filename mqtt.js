var mqtt=require('mqtt');

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

var client = mqtt.connect("mqtt://test.mosquitto.org", {clientId:"mqttjs01"});
	client.on("connect",function(){	
		console.log("connected");
	});
var options={
retain:true,
qos:1};
var topic="temperature";
//publish every 5 secs
var timer_id=setInterval(function(){publish(topic,'{"temperature" :' + randomInt(1, 40) + '}',options);},2000);

//publish function
function publish(topic,msg,options){
  console.log("publishing",msg);
if (client.connected == true){
  client.publish(topic,msg,options);
}
}