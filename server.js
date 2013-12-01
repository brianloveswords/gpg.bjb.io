require('cleansocket/listen')

const fs = require('fs')
const http = require('http')
const ecstatic = require('ecstatic')
const listenOn = process.env.PORT || process.env.SOCKET || '/tmp/gpg.sock'

http.createServer(ecstatic({
  root: './static',
  gzip: true,
})).listen(listenOn, function () {
  console.log('listening on %s', this.address())
})
