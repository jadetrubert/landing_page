# landing_page

Landing page responsiva da **Serra Viva Expedições**, criada para o exercício do módulo EBAC.

## Tecnologias

- HTML5
- LESS
- JavaScript
- Gulp

## Automação com Gulp

1. Instale as dependências:

```bash
npm install
```

2. Gere a versão de build em `dist/`:

```bash
npm run build
```

3. Modo desenvolvimento (watch):

```bash
npm run dev
```

## Estrutura dos estilos

- `src/styles/config`: variáveis, mapas e valores reutilizáveis
- `src/styles/mixins`: mixins e media query helper
- `src/styles/base`, `layout`, `components` e `sections`: arquivos divididos por responsabilidade
