
# Painel de Indicadores Web

Mini-projeto desenvolvido para a disciplina de Desenvolvimento Front-End para Web, do curso de Análise e Desenvolvimento de Sistemas.

O projeto apresenta uma comparação prática entre as tecnologias HTML5 Canvas e SVG, utilizando dois gráficos de barras que representam o mesmo conjunto de dados.

## Objetivo

Compreender as diferenças entre Canvas e SVG na criação de gráficos para páginas web, considerando aspectos como estrutura, renderização, responsividade e interação com os elementos.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Canvas API
- SVG

## Funcionalidades

- Dois gráficos de barras utilizando Canvas e SVG
- Representação dos mesmos dados em ambos os gráficos
- Interação por clique para selecionar e destacar barras
- Seleção das barras SVG utilizando o teclado
- Layout responsivo para diferentes tamanhos de tela
- Tabela HTML com os valores apresentados
- Descrições textuais para auxiliar na acessibilidade

## Dados apresentados

Os gráficos representam indicadores fictícios de domínio de quatro tecnologias front-end, em uma escala de 0 a 100.

| Tecnologia | Valor |
|------------|-------|
| HTML       | 85    |
| CSS        | 72    |
| JavaScript | 64    |
| SVG        | 55    |

## Canvas e SVG

O Canvas utiliza JavaScript para desenhar diretamente em uma área gráfica. Depois da renderização, as barras não permanecem como elementos individuais no DOM. Para identificar uma barra clicada, é necessário calcular as coordenadas do clique.

O SVG utiliza elementos como `rect`, `line` e `text` para construir o gráfico. Esses elementos permanecem no DOM, permitindo aplicar estilos e eventos diretamente em cada barra.

O projeto demonstra essas diferenças por meio da implementação e da interação com os dois gráficos.

## Estrutura do projeto

```text
painel-indicadores-canvas-svg/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/sixteenbaw/painel-indicadores-canvas-svg.git
```

2. Abra a pasta do projeto no VS Code.

3. Execute o arquivo `index.html` no navegador ou utilize a extensão Live Server.

O projeto utiliza HTML, CSS e JavaScript puro, sem necessidade de instalação de dependências.

## Contexto acadêmico

**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Desenvolvimento Front-End para Web  
**Instituição:** Universidade Cruzeiro do Sul

Atividade prática voltada ao estudo dos recursos gráficos do HTML5 e à comparação entre Canvas e SVG.
