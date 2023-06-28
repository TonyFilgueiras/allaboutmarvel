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

![preview1](https://github.com/TonyFilgueiras/marvel_project/assets/101405712/adc54749-2c4d-460f-b42f-46f5fbe89b0c)
![preview2](https://github.com/TonyFilgueiras/marvel_project/assets/101405712/92f478e5-4c8d-41dd-a0a2-4d791bd3cd98)


### Para realizar seu projeto:

- Crie sua conta no [site da marvel](https://developer.marvel.com/)
- [pegue sua chave](https://developer.marvel.com/account) de api publica e privada
![preview3](https://github.com/TonyFilgueiras/marvel_project/assets/101405712/c81965db-29fa-485a-a9b5-af382b547193)
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
