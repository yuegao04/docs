---
sidebar_position: 1
---

# Standalone Installation

Suitable for PoC or test scenarios.

> Prerequisites: 
> - A Linux server with no less than 4 CPUs and 8Gi memory.
> - At least 50GB of free disk space.
> - Docker installed, refer to [Docker's official documentation](https://docs.docker.com/) for detailed guidelines.
> - The server has ports 80 and 443 open.
> - Visit the [official website](https://seal.io/trial.html) to apply for a trial product image.

Run the following Docker command for standalone installation. For additional configuration, see following sessions.

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  <seal-container-image>
```

## Setting up TLS

### Default mode, using system (non-public trust) self-signed certificate

Since the HTTPs service certificate (chain) is issued by a non-public trust CA (Seal startup created), users need to confirm the risks before accessing the UI in the browser.

### Using [ACME](https://letsencrypt.org/docs/challenge-types) challenge to generate (public trust) certificate

Perform the challenge through the Let's Encrypt service, and let Let's Encrypt issue a 90-day HTTPs service certificate (chain) after the challenge is successful. The renewal of this certificate (chain) will be automatically completed by Seal.

> Prerequisites: 
> - Configure a domain name so that it can be mapped to the Linux server where Seal is deployed, such as `seal.mydomain.com`.
> - Open ports 80 and 443 on the Linux server where Seal is deployed, and ensure the server can be accessed by Let's Encrypt service.

```shell
sudo docker run -d --privileged --restart=always \
 -p 80:80 -p 443:443 \
 -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \
 <seal-container-image>
```

The above adopts the [HTTP-01](https://letsencrypt.org/docs/challenge-types/#http-01-challenge) challenge mode. If **port 80 cannot be opened**, it will automatically switch to using [TLS-ALPN-01](https://letsencrypt.org/docs/challenge-types/#tls-alpn-01) challenge mode.

```
sudo docker run -d --privileged --restart=always \
 -p 443:443 \
 -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \
 <seal-container-image>
```

### Using a Custom Certificate

A custom certificate refers to the HTTPs service certificate (chain) issued using a public trust or non-public trust CA certificate.

> Prerequisites: 
> - Prepare certificate files on the Linux server where Seal is deployed, for example, place the private key PEM file for the HTTPs service under the <PRIVATE_KEY_FILE> path, and place the HTTPs service certificate (chain) PEM file under the <CERT_FILE> path.
> - If there is a (non-public trust) CA certificate, please also place it in the file under the <CERT_FILE> path, usually chained after the HTTPs service certificate (chain).

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -v /<PRIVATE_KEY_FILE>:/etc/seal/ssl/key.pem \
  -v /<CERT_FILE>:/etc/seal/ssl/cert.pem \
  -e SERVER_TLS_PRIVATE_KEY_FILE=/etc/seal/ssl/key.pem \
  -e SERVER_TLS_CERT_FILE=/etc/seal/ssl/cert.pem \
  <seal-container-image>
```

### Using TLS termination

[TLS Termination](https://en.wikipedia.org/wiki/TLS_termination_proxy) is generally executed by a reverse proxy service.

> Note: 
> - The link from the reverse proxy service to Seal can use HTTP requests and set Seal's session Cookie `seal_session` to `Secure: true` to avoid man-in-the-middle attacks.

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 \
  -e SERVER_ENABLE_TLS=false \
  <seal-container-image>
```

## Configuring the database

Seal uses the [PostgreSQL](https://www.postgresql.org/) relational database for data storage.

By default, Seal will start a PostgresSQL instance inside the running container, which is very convenient and easy to use, but you may face the loss of use data. Therefore, users can provide an external PostgreSQL source when starting Seal to avoid the loss of use data.

```shell
# step 1: Start PostgreSQL with the following command.
docker run -d --restart=always \
  -p 5432:5432 \
  -e "POSTGRES_PASSWORD=Root123" \
  -e "POSTGRES_USER=root" \
  -e "POSTGRES_DB=seal" \
  postgres:14.6

# step 2: Start Seal with the following command.
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e SERVER_DATA_SOURCE_ADDRESS="postgres://root:Root123@<postgres-ip-address>:5432/seal?sslmode=disable"\
  <seal-container-image>
```

## Configuring HTTP Proxy

If deployed in a network isolation environment and can access the Internet through a proxy, you can set the proxy by configuring environment variables. For example:
```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e HTTP_PROXY="http://192.168.0.100:3128" \
  -e HTTPS_PROXY="http://192.168.0.100:3128" \
  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,.svc,.cluster.local,example.com" \
  <seal-container-image>
```