const spawn = require("child_process").spawn;
const pyPro = spawn("python" , ["test.py"]);
pyPro.stdout.on("data",(data)=>{
	console.log(`Node recieved ${data}`);
	console.log(`Node recieved ${typeof data}`);
	myStr = data.toString();
	myJson = JSON.parse(myStr);

	console.log(myStr);
	console.log(myJson);
	console.log(myJson.Data.fortune);
});
