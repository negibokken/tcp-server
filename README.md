# tcp-server

Simple tcp server practice.


## requirements

* clang++ 9.0.0
* node v8.10.0 >=

## build

```sh
make
```

## execution

1. server side

    * execute below `./main`

    ```sh
    % ./main
    socket successfully createdd...
    socket successfully binded....
    server listening...
    server accept the client
    ```

2. client-side

    * execute below command with another terminal

    ```sh
    % node client.js
    connected to tcp server
    ```

3. server-side

    * Enter `I'm server.`

    ```sh
    ...
    From client: Hello server! I'm here.     To client: I'm server.
    ```

4. client-side

    * receive below message

    ```sh
    ...
    Received: I'm server.
    ```

5. server-side

    * enter exit to finish tcp server

    ```sh
    From client:     To client: exit
    ```
