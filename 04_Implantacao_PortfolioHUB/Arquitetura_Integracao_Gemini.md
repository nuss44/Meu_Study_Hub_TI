
# Arquitetura Segura — PortfolioHUB + IA Gemini

## 1. Identificação

**Projeto:** PortfolioHUB + IA Gemini  
**Autor:** Vitor Andrade de Moura  
**Curso:** Ciência de Dados  
**Disciplina:** Bootcamp I  
**Etapa:** Entrega Final

## 2. Objetivo

Documentar a arquitetura do PortfolioHUB,
descrevendo a utilização do Google Gemini
como ferramenta de apoio ao planejamento,
à implantação e à análise de segurança.

O objetivo é garantir que o projeto
utilize boas práticas de desenvolvimento
e proteção de informações.

## 3. Arquitetura do Sistema

O PortfolioHUB utiliza uma arquitetura
baseada em um site estático hospedado
no GitHub Pages.

### Componentes

**HTML5:** estrutura da página web.

**CSS3:** apresentação visual e responsividade.

**Git:** controle local de versões.

**GitHub:** armazenamento do código-fonte,
documentação e colaboração.

**GitHub Pages:** publicação do site.

**Google Gemini:** apoio ao planejamento,
diagnóstico de riscos e revisão técnica.

## 4. Fluxo da Arquitetura

```text
          USUÁRIO
             |
             v
      NAVEGADOR WEB
             |
           HTTPS
             |
             v
       GITHUB PAGES
             |
             v
     PORTFOLIOHUB
       HTML + CSS


     DESENVOLVIMENTO
             |
             v
      GOOGLE GEMINI
      Apoio e análise
             |
             v
     REVISÃO HUMANA
             |
             v
       GIT / GITHUB
             |
             v
       GITHUB PAGES
```

## 5. Utilização do Google Gemini

O Google Gemini foi utilizado como
ferramenta de orientação técnica
durante a implantação.

A análise fornecida abordou:

- Segurança de credenciais.
- Autenticação em duas etapas.
- Proteção da branch principal.
- Controle de permissões.
- Versionamento de código.
- Automação e testes.
- Preparação para implantação.

As recomendações foram analisadas
antes de sua aplicação ao projeto.

## 6. Decisão Arquitetural

Foi adotada a utilização do Gemini
como assistente externo de desenvolvimento.

Nesta etapa, não foi implementada
uma conexão direta entre a página web
e a API do Gemini.

Essa decisão permite utilizar a
Inteligência Artificial como apoio
sem exigir que uma chave de API
seja armazenada no código público.

## 7. Segurança de Credenciais

O repositório utiliza um arquivo
.gitignore para evitar o versionamento
acidental de arquivos de ambiente
e informações locais.

Entre os arquivos ignorados estão:

- .env
- .env.*
- *.log
- node_modules/
- .venv/

O arquivo .gitignore não protege
credenciais já publicadas no Git.

Nenhuma chave de API deve ser
inserida diretamente no HTML,
CSS ou JavaScript público.

## 8. Integração Futura com Gemini API

Caso seja necessária uma integração
direta com a API do Gemini, será
utilizada uma arquitetura com backend.

Fluxo proposto:

Usuário
  |
  v
PortfolioHUB
  |
  v
Backend seguro
  |
  v
Gemini API

O backend deverá:

- Armazenar a chave em ambiente seguro.
- Autenticar e autorizar requisições.
- Validar entradas recebidas.
- Implementar limites de utilização.
- Evitar exposição de credenciais.
- Registrar erros sem expor segredos.

Esta arquitetura representa uma
possibilidade futura e não uma
funcionalidade implementada atualmente.

## 9. Riscos Identificados

### Exposição de credenciais

Risco de divulgação de senhas ou
chaves de API em código público.

**Medida:** não incluir segredos
nos arquivos publicados.

### Alterações não autorizadas

Risco de modificações inadequadas
no repositório.

**Medida:** revisar colaboradores,
configurar regras e utilizar Git.

### Falhas na publicação

Risco de alterações prejudicarem
o funcionamento do site.

**Medida:** realizar testes antes
de disponibilizar novas versões.

## 10. Validação

Foram realizados cinco testes manuais
do PortfolioHUB:

1. Carregamento do site.
2. Navegação entre seções.
3. Funcionamento do botão GitHub.
4. Funcionamento do botão LinkedIn.
5. Responsividade para celular.

Todos os cinco testes foram aprovados.

Os resultados estão documentados em:

Relatorio_de_Testes.md

## 11. Considerações Finais

A arquitetura adotada mantém o
PortfolioHUB como site estático,
utilizando o Google Gemini como
assistente externo de implantação.

A solução permite organizar o projeto,
registrar alterações e aplicar
orientações de segurança sem
expor chaves de API no front-end.

Futuras integrações com serviços de IA
deverão utilizar uma infraestrutura
adequada à proteção de credenciais.
```
