#!/usr/bin/env node

const { ping } = require("../")
let args = require("args")

args
	.option("host", "host to ping")

const flags = args.parse(process.argv)

if(flags.host) {
	(async () => {
		let Ping = await ping(flags.host).catch((error) => {
			return console.error(`Error: ${error}`)
        	})

		return console.log(`${Ping}ms`)
	})()
} else args.showHelp()
