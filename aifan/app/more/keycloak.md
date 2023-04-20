# keycloak

```yaml
version: '2'
services:
  postgresql:
    image: docker.io/bitnami/postgresql:14.5.0
    ports:
      - "5432:5432"
    environment:
      - ALLOW_EMPTY_PASSWORD=yes
      - POSTGRESQL_USERNAME=bn_keycloak
      - POSTGRESQL_DATABASE=bitnami_keycloak
    volumes:
      - 'postgresql_data:/bitnami/postgresql'
  keycloak:
    image: docker.io/bitnami/keycloak:19.0.3
    ports:
      - "80:8080"
    environment:
      - KEYCLOAK_CREATE_ADMIN_USER=true
    depends_on:
      - postgresql
    volumes:
      - './kctheme:/opt/bitnami/keycloak/themes/kctheme'
volumes:
  postgresql_data:
    driver: local
```

Keycloak server OIDC URI 终端节点
---
```
以下是密钥隐藏发布的 OIDC 终端节点的列表。当非密钥槽客户机适配器使用 OIDC 与身份验证服务器通信时，可以使用这些端点。它们都是相对网址。URL 的根由 HTTP（S） 协议、主机名和路径（可选）组成：例如
https://localhost:8080


http://10.0.35.64:8080

client_id: kc-sso

client_cert:  3f5ef866-6ec2-4bdd-bf0b-470947fa6776


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/auth
用于获取授权代码流中的临时代码，或使用隐式流、直接授权或客户端授权获取令牌。


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/token
由授权代码流用于将临时代码转换为令牌。


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/logout
用于执行注销。


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/userinfo
用于 OIDC 规范中描述的用户信息服务。


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/revoke
用于 RFC7009 中描述的 OAuth 2.0 令牌吊销。


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/certs
用于包含用于验证任何 JSON 网络令牌的公钥的 JSON 网络密钥集 （JWKS） （jwks_uri）


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/auth/device
用于设备授权，以获取设备代码和用户代码。


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/ext/ciba/auth
这是客户端启动的反向通道身份验证授予的 URL 终结点，用于获取标识客户端发出的身份验证请求的auth_req_id。


http://10.0.35.64:8080/realms/{realm-name}/protocol/openid-connect/logout/backchannel-logout
这是用于执行 OIDC 规范中描述的反向通道注销的 URL 终端节点。

在所有这些中，将 {领域名称} 替换为领域的名称。
```
--- 

```
https://localhost:8080

/realms/{realm-name}/protocol/openid-connect/auth
Used for obtaining a temporary code in the Authorization Code Flow or obtaining tokens using the Implicit Flow, Direct Grants, or Client Grants.


/realms/{realm-name}/protocol/openid-connect/token
Used by the Authorization Code Flow to convert a temporary code into a token.


/realms/{realm-name}/protocol/openid-connect/logout
Used for performing logouts.


/realms/{realm-name}/protocol/openid-connect/userinfo
Used for the User Info service described in the OIDC specification.


/realms/{realm-name}/protocol/openid-connect/revoke
Used for OAuth 2.0 Token Revocation described in RFC7009.


/realms/{realm-name}/protocol/openid-connect/certs
Used for the JSON Web Key Set (JWKS) containing the public keys used to verify any JSON Web Token (jwks_uri)


/realms/{realm-name}/protocol/openid-connect/auth/device
Used for Device Authorization Grant to obtain a device code and a user code.


/realms/{realm-name}/protocol/openid-connect/ext/ciba/auth
This is the URL endpoint for Client Initiated Backchannel Authentication Grant to obtain an auth_req_id that identifies the authentication request made by the client.


/realms/{realm-name}/protocol/openid-connect/logout/backchannel-logout
This is the URL endpoint for performing backchannel logouts described in the OIDC specification.
In all of these, replace {realm-name} with the name of the realm.
```