
# Segurança do PortfolioHUB

## 1. Apresentação

Este documento registra as práticas de segurança
e controle de acesso adotadas durante a implantação
do PortfolioHUB.

Projeto: PortfolioHUB + IA Gemini

Autor: Vitor Andrade de Moura

Disciplina: Bootcamp I

## 2. Autenticação

A autenticação em duas etapas (2FA) foi confirmada
como ativa na conta GitHub utilizada no projeto.

Essa medida acrescenta uma camada de proteção
ao processo de autenticação.

## 3. Gestão de Usuários

O repositório está configurado como público,
permitindo a visualização dos projetos.

Na verificação realizada, foram identificados:

- Proprietário: nuss44
- Colaboradores externos: 0
- Convites enviados: nenhum

Somente a conta proprietária possui acesso direto
de escrita entre os usuários identificados.

## 4. Proteção da Branch Principal

Foi criada a seguinte regra no GitHub:

- Nome: Protecao_Branch_Main
- Status configurado: Active
- Branch selecionada: main
- Restrict deletions: selecionado
- Block force pushes: selecionado
- Bypass list: vazia

A aplicação efetiva dessas restrições depende
das funcionalidades disponíveis no plano
e das condições do repositório.

## 5. Proteção de Arquivos Sensíveis

Foi configurado um arquivo .gitignore para
evitar o versionamento acidental de arquivos
locais e informações sensíveis.

Entre os padrões ignorados estão:

- .env
- .env.*
- *.log
- node_modules/
- .venv/
- __pycache__/

O arquivo .gitignore não protege informações
sensíveis que já tenham sido publicadas
no histórico do Git.

## 6. Utilização do Google Gemini

O Google Gemini foi utilizado como ferramenta
de apoio ao planejamento e à análise
de riscos da implantação.

Foram consideradas recomendações relacionadas
à autenticação, proteção de credenciais,
controle de acesso e versionamento.

O uso do Gemini como assistente não exige
a publicação de chaves de API no site.

## 7. Boas Práticas de Segurança

- Não publicar senhas ou tokens.
- Não inserir chaves de API em código público.
- Utilizar autenticação em duas etapas.
- Revisar periodicamente os colaboradores.
- Verificar alterações antes de publicá-las.
- Manter a documentação atualizada.
- Evitar envios forçados à branch principal.

## 8. Considerações Finais

A implantação do PortfolioHUB incorporou
práticas de gestão de usuários, autenticação,
controle de versões e documentação de segurança.

As configurações foram registradas para
facilitar futuras verificações e melhorias.
