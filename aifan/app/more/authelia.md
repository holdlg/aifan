# Authelia

## 使用条件
- 应用必须是https，配置证书
- 需要stmp邮件服务，做邮箱验证。如果不要发送邮件验证，需要配置本地文件，验证链接会保存在本地文件

## bug
- 版本`4.37`,回调地址不走https，跳转有问题
- codimd证书解析错误
- 没有发现用户界面，或者管理页面


## 配置

```yaml
    providerName: "Authelia",
    baseURL: "https://authelia.example.com",
    clientID: "myapp",
    clientSecret: "6c4b73372a6408089a32ad4807ceca6d",
    authorizationURL: "https://authelia.example.com/api/oidc/authorization",
    tokenURL: "https://authelia.example.com/api/oidc/token",
    userProfileURL: "https://authelia.example.com/api/oidc/userinfo",
```

```
https://authelia.example.com/.well-known/openid-configuration
```

```json
{
    "issuer": "https://authelia.example.com", 
    "jwks_uri": "https://authelia.example.com/jwks.json", 
    "authorization_endpoint": "https://authelia.example.com/api/oidc/authorization", 
    "token_endpoint": "https://authelia.example.com/api/oidc/token", 
    "subject_types_supported": [
        "public"
    ], 
    "response_types_supported": [
        "code", 
        "token", 
        "id_token", 
        "code token", 
        "code id_token", 
        "token id_token", 
        "code token id_token", 
        "none"
    ], 
    "response_modes_supported": [
        "form_post", 
        "query", 
        "fragment"
    ], 
    "scopes_supported": [
        "offline_access", 
        "openid", 
        "profile", 
        "groups", 
        "email"
    ], 
    "claims_supported": [
        "amr", 
        "aud", 
        "azp", 
        "client_id", 
        "exp", 
        "iat", 
        "iss", 
        "jti", 
        "rat", 
        "sub", 
        "auth_time", 
        "nonce", 
        "email", 
        "email_verified", 
        "alt_emails", 
        "groups", 
        "preferred_username", 
        "name"
    ], 
    "introspection_endpoint": "https://authelia.example.com/api/oidc/introspection", 
    "revocation_endpoint": "https://authelia.example.com/api/oidc/revocation", 
    "code_challenge_methods_supported": [
        "S256"
    ], 
    "userinfo_endpoint": "https://authelia.example.com/api/oidc/userinfo", 
    "id_token_signing_alg_values_supported": [
        "RS256"
    ], 
    "userinfo_signing_alg_values_supported": [
        "none", 
        "RS256"
    ], 
    "request_object_signing_alg_values_supported": [
        "none", 
        "RS256"
    ], 
    "request_uri_parameter_supported": false, 
    "require_request_uri_registration": false, 
    "claims_parameter_supported": false, 
    "frontchannel_logout_supported": false, 
    "frontchannel_logout_session_supported": false, 
    "backchannel_logout_supported": false, 
    "backchannel_logout_session_supported": false
}
```




```
https://authelia.example.com/.well-known/oauth-authorization-server

```

```json
{
    "issuer":"https://authelia.example.com",
    "jwks_uri":"https://authelia.example.com/jwks.json",
    "authorization_endpoint":"https://authelia.example.com/api/oidc/authorization",
    "token_endpoint":"https://authelia.example.com/api/oidc/token",
    "subject_types_supported":[
        "public"
    ],
    "response_types_supported":[
        "code",
        "token",
        "id_token",
        "code token",
        "code id_token",
        "token id_token",
        "code token id_token",
        "none"
    ],
    "response_modes_supported":[
        "form_post",
        "query",
        "fragment"
    ],
    "scopes_supported":[
        "offline_access",
        "openid",
        "profile",
        "groups",
        "email"
    ],
    "claims_supported":[
        "amr",
        "aud",
        "azp",
        "client_id",
        "exp",
        "iat",
        "iss",
        "jti",
        "rat",
        "sub",
        "auth_time",
        "nonce",
        "email",
        "email_verified",
        "alt_emails",
        "groups",
        "preferred_username",
        "name"
    ],
    "introspection_endpoint":"https://authelia.example.com/api/oidc/introspection",
    "revocation_endpoint":"https://authelia.example.com/api/oidc/revocation",
    "code_challenge_methods_supported":[
        "S256"
    ]
}
```


## error

需要https
```
http://10.0.35.64:3000/auth/oauth2/callback?error=invalid_request&error_description=The+request+is+missing+a+required+parameter,+includes+an+invalid+parameter+value,+includes+a+parameter+more+than+once,+or+is+otherwise+malformed.+Redirect+URL+is+using+an+insecure+protocol,+http+is+only+allowed+for+hosts+with+suffix+`localhost`,+for+example:+http://myapp.localhost/.&state=4ZiXxEdfiYHbpxviBSlPb877
```