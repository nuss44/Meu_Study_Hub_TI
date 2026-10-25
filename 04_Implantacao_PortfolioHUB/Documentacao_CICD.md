
# Documentação de CI/CD — PortfolioHUB

## 1. Identificação

**Projeto:** PortfolioHUB + IA Gemini  
**Autor:** Vitor Andrade de Moura  
**Curso:** Ciência de Dados  
**Disciplina:** Bootcamp I  
**Etapa:** Entrega Final  
**Data:** 25/10/2026

## 2. Objetivo

Documentar a configuração e os resultados
da automação de validação do PortfolioHUB
utilizando GitHub Actions.

A automação contribui para identificar
problemas nos arquivos principais e na
documentação do projeto.

## 3. Ferramentas Utilizadas

- Git
- GitHub
- GitHub Actions
- GitHub Pages
- HTML5
- CSS3
- Markdown

## 4. Configuração do Workflow

Foi configurado um workflow denominado:

**Validacao do PortfolioHUB**

Arquivo de configuração:

`.github/workflows/validacao.yml`

O workflow foi planejado para executar
verificações nas seguintes situações:

- Envio de alterações para a branch main.
- Abertura ou atualização de Pull Requests
  direcionados à branch main.
- Execução manual pelo GitHub Actions.

## 5. Verificações Automatizadas

### Verificação de HTML e CSS

A automação verifica a presença dos arquivos
principais do site e determinados elementos
esperados na estrutura HTML.

Arquivos principais:

- index.html
- style.css

### Verificação de Documentação

A automação verifica a existência e o
conteúdo não vazio dos documentos previstos
na configuração do workflow.

Entre os documentos verificados estão:

- README.md
- Plano_de_Implantacao.md
- Arquitetura_Integracao_Gemini.md
- Relatorio_de_Testes.md

## 6. Problema Identificado e Correção

Durante a primeira execução da automação,
foi identificada uma falha na etapa de
verificação da documentação.

A investigação demonstrou que o arquivo
Relatorio_de_Testes.md não estava disponível
no caminho esperado pelo workflow.

Para corrigir o problema, o arquivo foi
adicionado à pasta:

04_Implantacao_PortfolioHUB/

Após a correção, foi realizada uma
nova execução da automação.

## 7. Resultado da Validação

**Workflow:** Validacao do PortfolioHUB

**Resultado da execução mais recente:**
Aprovado.

A aprovação foi confirmada por meio
da interface do GitHub Actions.

## 8. Publicação do Site

O PortfolioHUB utiliza GitHub Pages
para hospedar a página web.

A publicação utiliza os arquivos
disponíveis na branch principal.

O GitHub Pages possui um processo
próprio de publicação.

O workflow de validação documentado
não substitui esse processo de deploy.

## 9. Limitações

A automação implementada realiza
verificações básicas de integridade.

Ela não representa uma suíte completa
de testes automatizados.

Não foram implementados nesta etapa:

- Testes de carga.
- Testes automatizados de interface.
- Auditoria completa de segurança.
- Testes automatizados de acessibilidade.

## 10. Considerações Finais

A configuração do GitHub Actions
representa uma melhoria no processo
de desenvolvimento do PortfolioHUB.

O workflow permite identificar falhas
básicas antes ou durante a publicação
de alterações no repositório.

A automação poderá ser aprimorada
futuramente com linters e testes
mais abrangentes.
