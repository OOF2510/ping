const os = require("os");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

exports.ping = async function (domain: String) {
  let PING;

  if (os.platform() == "win32")
    PING = await exec(`ping -n 1 ${domain} | findstr time=`);
  else PING = await exec(`ping -c 1 ${domain} | grep time=`);

  let Ping = PING.stdout.trim();

  var ping: Number;

  if (os.platform == "win32")
    ping = Number(Ping.split("time=").pop().split("ms ")[0]);
  else ping = Number(Ping.split("time=").pop().split(" ms")[0]);

  return ping;
};
