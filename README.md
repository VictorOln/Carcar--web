



O **Carcará** é um dashboard operacional de alto desempenho desenvolvido para centralizar, validar e gerenciar alertas de focos de incêndio em tempo real. Focado em agilidade e precisão, o sistema conecta observadores de campo a uma central de comando inteligente.


## Funcionalidades Chave

 Monitoramento Geográfico: Mapa interativo (Leaflet) com visualização de agrupamentos de focos e status em tempo real.
 Gestão de Alertas: Lógica de filtragem avançada para separar incêndios confirmados, alertas em curso e alarmes falsos.
 Mergulho nos Dados: Visão detalhada de cada ocorrência, permitindo analisar fotos, descrições e metadados enviados pelos observadores.
 Design Premium: Interface Dark Mode com estética de "War Room", animações fluidas (Framer Motion) e alta legibilidade.
 Sincronização Total: Estado global unificado — qualquer mudança de status reflete instantaneamente no mapa e nas listas.

Tech Stack

Frontend: React 18+ (Vite)
Estilização: TailwindCSS (Design System customizado)
Mapas: React Leaflet + CartoDB Dark Matter
Animações: Framer Motion
Ícones: React Icons (Lucide/Feather)
HTTP Client: Axios (Preparado para integração API)

Estrutura do Projeto

```text
src/
├── components/     # Componentes reutilizáveis (Cards, Badges, Mapas)
├── constants/      # Configurações globais (Status, Cores)
├── mocks/          # Simulação de dados para desenvolvimento
├── pages/          # Telas principais (Dashboard, Alertas, Mapas)
└── App.jsx         # Coração da aplicação e gestão de estado
```

Como Rodar o Projeto

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/carcara-web.git
    ```
2.  **Instale as dependências**:
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

---

## Integração com API (Próximos Passos)

O projeto já está com o "terreno preparado" para receber o backend Django. Os campos de imagem, coordenadas e status já seguem o padrão REST para uma substituição suave dos mocks por chamadas `GET` e `PATCH`.

---

