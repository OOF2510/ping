const os = require("os");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

exports.ping = async function (domain: String) {
  let PING;

  if (os.platform() == "win32")
    PING = await exec(`ping /n 1 ${domain} | findstr time=`).catch(
      (error: any) => {
        PING = "Error pinging!";
        console.error(error);
      }
    );
  else
    PING = await exec(`ping -c 1 ${domain} | grep time=`).catch(
      (error: any) => {
        PING = "Error pinging!";
        console.error(error);
      }
    );

  let Ping;
  let pingError;
  if (PING.stdout) Ping = PING.stdout.trim();
  else pingError = PING;

  var ping: Number;

  if (Ping) {
    if (os.platform == "win32")
      ping = Number(Ping.split("time=").pop().split("ms ")[0]);
    else ping = Number(Ping.split("time=").pop().split(" ms")[0]);
  }

  if (ping) return ping;
  else if (pingError) return pingError;
};
