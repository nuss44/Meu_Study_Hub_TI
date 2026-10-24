
# Política de Segurança — PortfolioHUB

## 1. Apresentação

Este documento apresenta as práticas de segurança
adotadas durante a implantação do PortfolioHUB,
desenvolvido na disciplina Bootcamp I.

Autor: Vitor Andrade de Moura

O objetivo é proteger a integridade do projeto,
controlar o acesso ao repositório e reduzir riscos
relacionados à exposição de informações sensíveis.

## 2. Controle de Acesso

O repositório é público para consulta e
visualização dos projetos.

A verificação realizada nas configurações
do GitHub confirmou:

- Repositório público.
- Nenhum colaborador adicional.
- Acesso direto de escrita restrito ao proprietário.

Novos colaboradores deverão receber acesso
somente quando necessário e mediante
autorização do responsável pelo projeto.

## 3. Autenticação

A conta responsável pelo repositório utiliza
autenticação em duas etapas (2FA).

Essa medida acrescenta uma camada de proteção
ao processo de autenticação.

Senhas, códigos de autenticação e chaves de
recuperação não devem ser compartilhados.

## 4. Proteção de Credenciais

As seguintes proteções foram confirmadas
como ativadas no GitHub:

- Secret scanning.
- Push protection.

Esses recursos auxiliam na identificação e
prevenção da publicação de determinadas
credenciais e informações sensíveis.

Não devem ser publicados no repositório:

- Senhas.
- Tokens de acesso.
- Chaves privadas.
- Chaves de API.
- Arquivos contendo credenciais.
- Dados pessoais sensíveis.

## 5. Controle de Versões

O Git é utilizado para registrar alterações
e acompanhar a evolução do projeto.

O repositório possui:

- Branch principal: main.
- Versão inicial identificada como v1.0.
- Histórico de commits documentando alterações.

Antes de publicar novas alterações,
os arquivos devem ser revisados.

## 6. Política de Colaboração

Atualmente, o projeto é individual.

Caso novos colaboradores sejam adicionados,
deverão ser observadas as seguintes práticas:

- Conceder acesso somente quando necessário.
- Revisar as alterações propostas.
- Utilizar mensagens claras nos commits.
- Evitar alterações diretas sem validação.
- Revogar acessos que não sejam mais necessários.

## 7. Comunicação de Vulnerabilidades

Caso seja identificada uma possível
vulnerabilidade, ela não deverá ser divulgada
publicamente com detalhes que possam
comprometer a segurança do projeto.

A comunicação deverá ser realizada de forma
privada ao responsável pelo repositório.

Não devem ser publicados tokens, senhas ou
informações sensíveis em issues públicas.

## 8. Uso de Inteligência Artificial

O Google Gemini é utilizado como ferramenta
de apoio ao planejamento, revisão técnica
e identificação de melhorias.

As recomendações da ferramenta devem ser
verificadas antes de sua implementação.

Senhas, tokens e informações confidenciais
não devem ser enviados ao Gemini.

## 9. Revisão de Segurança

As configurações de segurança deverão ser
revisadas periodicamente, especialmente
após mudanças nas permissões, publicação
de novos projetos ou inclusão de colaboradores.

## 10. Considerações Finais

As políticas descritas contribuem para
a organização e proteção do PortfolioHUB.

O projeto continuará sendo aprimorado
conforme sua evolução acadêmica e profissional.
