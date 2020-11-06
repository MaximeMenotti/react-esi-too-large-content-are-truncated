# React ESI too large content are truncated 

### Why 

Created with [create-next-app (React ESI Example)](https://github.com/vercel/next.js/tree/v9.2.2/examples/with-react-esi), this repository has been created to reproduce a [react-esi-issue](https://github.com/dunglas/react-esi/issues/20) where too large content are truncated.

Compared to the initial directory all the code not necessary to reproduce this bug has been removed. 

The following dependencies have also been updated: 
- node: v14
- react: v17
- express: v4.17.1
- react-esi: v0.3.0

The BreakingNews component is called twice, once without the HOC withEsi and once with.
It is called each time with 10k elements.

### Run

`docker-compose up`

### Error thrown

```
node_1     | events.js:174
node_1     |       throw er; // Unhandled 'error' event
node_1     |       ^
node_1     |
node_1     | Error [ERR_STREAM_WRITE_AFTER_END]: write after end
node_1     |     at write_ (_http_outgoing.js:584:17)
node_1     |     at ServerResponse.write (_http_outgoing.js:579:10)
node_1     |     at RemoveReactRoot.ondata (_stream_readable.js:693:20)
node_1     |     at RemoveReactRoot.emit (events.js:189:13)
node_1     |     at RemoveReactRoot.Readable.read (_stream_readable.js:491:10)
node_1     |     at flow (_stream_readable.js:957:34)
node_1     |     at ServerResponse.pipeOnDrainFunctionResult (_stream_readable.js:761:7)
node_1     |     at ServerResponse.emit (events.js:189:13)
node_1     |     at Socket.ondrain (internal/http.js:31:44)
node_1     |     at Socket.emit (events.js:194:15)
node_1     | Emitted 'error' event at:
node_1     |     at writeAfterEndNT (_http_outgoing.js:646:7)
node_1     |     at process.internalTickCallback (internal/process/next_tick.js:72:19)
node_1     | error Command failed with exit code 1.
node_1     | info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

