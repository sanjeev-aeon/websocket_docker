# websocket_docker
debug node app inside a docker container

```yaml
version: "3.0"
services:
  test-server:
    image: docker-ws:1.0
    # 0.0.0.0 enable the ws server to be accessed from outside the container
    command: node --inspect=0.0.0.0:3005 server.js

    ports:
      - 3006:8123
      - 3007:3005
```

> Note: Adding =0.0.0.0 opens up the debugger to connections from any IP.
https://nodejs.org/en/learn/getting-started/debugging#command-line-options
