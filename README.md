# landing_page

Landing page responsiva da **Serra Viva Expedições**, criada para o exercício do módulo EBAC.

## Tecnologias

- HTML5
- LESS
- JavaScript
- Grunt

## Automação com Grunt

1. Instale as dependências:

```bash
npm install
```

2. Compile o LESS e comprima o JavaScript:

```bash
npm run build
```

## Estrutura dos estilos

- `src/styles/config`: variáveis, mapas e valores reutilizáveis
- `src/styles/mixins`: mixins e media query helper
- `src/styles/base`, `layout`, `components` e `sections`: arquivos divididos por responsabilidade
