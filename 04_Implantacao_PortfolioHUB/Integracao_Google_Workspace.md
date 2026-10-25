# Integração Google Workspace + PortfolioHUB

## 1. Visão Geral
Esta documentação descreve a arquitetura de integração entre o ecossistema **Google Workspace** e o **PortfolioHUB** (hospedado via GitHub Pages). O objetivo principal é garantir o acesso centralizado e seguro aos artefatos acadêmicos e técnicos do projeto sem expor credenciais ou ficheiros confidenciais.

---

## 2. Arquitetura da Solução
A integração é realizada na camada de apresentação e partilha de ativos através de hiperligações seguras com controlo de permissões:

- **Google Drive:** Armazenamento centralizado da estrutura de pastas do projeto (`PortfolioHUB_Bootcamp_I`).
- **Google Docs:** Elaboração do relatório técnico de implantação.
- **GitHub Pages:** Exibição do portfólio com ligação direta aos documentos públicos.
- **Google Gemini:** Assistente técnico de IA para suporte arquitetural, auditoria de segurança e validação de processos.

---

## 3. Configurações de Segurança e Controlo de Acesso
Para cumprir as boas práticas de Segurança da Informação:
- **Acesso Público Controlado:** O relatório de implantação foi configurado com permissão **Qualquer pessoa com o link** exclusivamente na função **Leitor**.
- **Acesso Privado Mantido:** Pastas de trabalho interno e ficheiros de configuração permanecem restritos aos colaboradores autorizados.
- **Isolamento de Credenciais:** Não há utilização de chaves de API nem credenciais expostas no código *frontend*.

---

## 4. Validação e Testes
A integração foi validada através dos seguintes testes:
1. **Teste de Acesso Anónimo:** Confirmação de visualização do documento no Google Docs via janela anónima (sem necessidade de login).
2. **Teste de Ligação no PortfolioHUB:** Botão da secção "Documentação e Google Workspace" a redirecionar corretamente para o documento oficial.
3. **Validação de Responsividade:** Interface do site a manter-se funcional em dispositivos desktop e móveis.
