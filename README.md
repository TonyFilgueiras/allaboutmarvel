https://allaboutmarvel.vercel.app/
# All About Marvel
### Projeto desenvolvido utilizando:

- [React v18.2](https://facebook.github.io/create-react-app/docs/getting-started)
- [Typescript v4.9](https://www.typescriptlang.org/)
- [React-router-dom v6.13](https://reactrouter.com/en/main)
- [Styled components v6](https://styled-components.com/)
- [axios v1.4](https://axios-http.com/ptbr/docs/intro)
- [md5 v2.3](https://www.md5hashgenerator.com/)
- [api da marvel](https://developer.marvel.com/docs)

### Sobre o projeto:

- Utilizado para usuário poder consultar sobre informações envolvendo o universo da Marvel
- Versão 1.0
- Ultima modificação Jun/23

![preview1](https://github.com/TonyFilgueiras/allaboutmarvel/assets/101405712/767a01a6-cc99-4214-a94a-832f5d9a9cb1)
![preview2](https://github.com/TonyFilgueiras/allaboutmarvel/assets/101405712/1bae639e-dd41-4ec9-9acc-b021db587c25)




### Para realizar seu projeto:

- Crie sua conta no [site da marvel](https://developer.marvel.com/)
- [pegue sua chave](https://developer.marvel.com/account) de api publica e privada
![preview3](https://github.com/TonyFilgueiras/allaboutmarvel/assets/101405712/f202a501-f78f-4bd9-96af-6d8accfe0b90)

- Gerar _timestamp_ e _hash_ para realizar as chamadas na api utilizando _axios_
  #### timestamp
  `const ts = Number(new Date());`
  #### hash
  `const hash = md5(timestamp + {sua_chave_privada} + {sua_chave_publica})`
  #### axios
  `axios.create({
    baseURL: https://gateway.marvel.com:443/v1/public/, 
    params: {
        ts: {sua_timesctamp},
        apikey: {sua_chave_publica},
        hash: {sua_hash},
        },
})`


 - Para mais informações https://developer.marvel.com/documentation/authorization


## Data provided by Marvel. © 2014 Marvel
