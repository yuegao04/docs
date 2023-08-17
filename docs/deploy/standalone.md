---
sidebar_position: 1
---

# Standalone Installation

Standalone installation is suitable for PoC or test scenarios.

> Prerequisites: 
> - A Linux server with no less than 4 CPU cores and 8GiB memory.
> - At least 50GB of free disk space.
> - Docker installed, if not please refer to [Docker's official documentation](https://docs.docker.com/) for how to setup Docker on your machine.
> - The server has ports 80 and 443 open.

Run the following Docker command for standalone installation. For additional configuration, see following sessions.

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  sealio/walrus:<VERSION>
```

## Setting up TLS

### Default Mode, using Self-Signed Certificate

By default Walrus uses a self-signed HTTPS certificate, which results in a warning message in the browser.

### Using [ACME](https://letsencrypt.org/docs/challenge-types) to Generate a Trusted Certificate

Let's Encrypt issues a 90-day HTTPS certificate. The renewal of this certificate will be automatically completed by Walrus.

> Prerequisites: 
> - Configure a domain name so that it can be mapped to the Linux server where Walrus is deployed, such as `walrus.mydomain.com`.
> - Open ports 80 and 443 on the Linux server where Walrus is deployed, and ensure the server can be accessed by Let's Encrypt service.

```shell
sudo docker run -d --privileged --restart=always \
 -p 80:80 -p 443:443 \
 -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \
 sealio/walrus:<VERSION>
```

The above adopts the [HTTP-01](https://letsencrypt.org/docs/challenge-types/#http-01-challenge) challenge mode. If **port 80 cannot be opened**, it will automatically switch to using [TLS-ALPN-01](https://letsencrypt.org/docs/challenge-types/#tls-alpn-01) challenge mode.

```shell
sudo docker run -d --privileged --restart=always \
 -p 443:443 \
 -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \
 sealio/walrus:<VERSION>
```

### Using a Custom Certificate

A custom certificate refers to a HTTPS certificate issued by a certificate authority.

> Prerequisites: 
> - Prepare certificate files on the Linux server where Walrus is deployed, for example, place the private key PEM file for the HTTPs service under the <PRIVATE_KEY_FILE> path, and place the HTTPs service certificate (chain) PEM file under the <CERT_FILE> path.
> - If there is a (non-public trust) CA certificate, please also place it in the file under the <CERT_FILE> path, usually chained after the HTTPs service certificate (chain).

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -v /<PRIVATE_KEY_FILE>:/etc/walrus/ssl/key.pem \
  -v /<CERT_FILE>:/etc/walrus/ssl/cert.pem \
  -e SERVER_TLS_PRIVATE_KEY_FILE=/etc/walrus/ssl/key.pem \
  -e SERVER_TLS_CERT_FILE=/etc/walrus/ssl/cert.pem \
  sealio/walrus:<VERSION>
```

### Using TLS Termination

[TLS Termination](https://en.wikipedia.org/wiki/TLS_termination_proxy) is generally executed by a reverse proxy service.

> Note: 
> - The link from the reverse proxy service to Walrus can use HTTP requests and set Walrus's session Cookie `walrus_session` to `Secure: true` to avoid man-in-the-middle attacks.

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 \
  -e SERVER_ENABLE_TLS=false \
  sealio/walrus:<VERSION>
```

## Configuring the Database

Walrus uses the [PostgreSQL](https://www.postgresql.org/) relational database.

By default, Walrus will start a PostgresSQL instance inside the running container, which is very convenient and easy to use, but does not protect against data loss. Therefore, users can provide an external PostgreSQL DB when starting Walrus for reliability.

```shell
# step 1: Start PostgreSQL with the following command.
docker run -d --restart=always \
  -p 5432:5432 \
  -e "POSTGRES_PASSWORD=Root123" \
  -e "POSTGRES_USER=root" \
  -e "POSTGRES_DB=walrus" \
  postgres:14.6

# step 2: Start Walrus with the following command.
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e SERVER_DATA_SOURCE_ADDRESS="postgres://root:Root123@<postgres-ip-address>:5432/walrus?sslmode=disable"\
  sealio/walrus:<VERSION>
```

## Configuring HTTP Proxy

If deployed in a network isolation environment and can access the Internet through a proxy, you can set the proxy by configuring environment variables. For example:
```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e HTTP_PROXY="http://192.168.0.100:3128" \
  -e HTTPS_PROXY="http://192.168.0.100:3128" \
  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,.svc,.cluster.local,example.com" \
  sealio/walrus:<VERSION>
```
