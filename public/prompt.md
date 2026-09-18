O projeto é um portfólio pessoal de desenvolvedor Full Stack. A estrutura deve ser modular, utilizando componentes reutilizáveis.

Tech Stack Preferencial: Next.js, Tailwind CSS, e bibliotecas de animação eficientes (ex: Framer Motion ou AOS para animações de scroll e rotacionais).

Estrutura de Pastas: O projeto deve seguir uma estrutura modular organizada na pasta components/.

Plaintext
/src
  /components
    /layout
      Header.tsx
      Footer.tsx
    /sections
      Hero.tsx
      SkillOrbit.tsx (Componente da órbita giratória)
      About.tsx
      Experience.tsx
      Projects.tsx
      Contact.tsx
    /ui (Botões, Inputs, Cards)
  /app
    page.tsx
2. Diretrizes de Design e UI
Paleta de Cores: Fundo bg-[#121212] (Preto Profundo), Acentos em #00FFFF (Ciano vibrante) e textos em tons de branco e cinza claro.

Tipografia: Títulos com serifa elegante (ex: Merriweather ou Playfair Display) e corpo de texto sans-serif limpo (ex: Inter).

3. Especificações Detalhadas por Seção e Animações
A. Header / Navbar
Fixo no topo, com links âncora e botão de destaque "Contratar" com borda ciano.

B. Hero Section (Com Carrossel Orbital de Skills)
Esquerda: Textos de apresentação, cargo e CTA. Nome "João Victor" em destaque ciano.

Direita (Animação Orbital):

Elemento Central: Foto de perfil em formato circular.

Carrossel de Techs (Orbiting Skills): Os ícones das tecnologias (React, Next.js, Node, Docker, TypeScript, etc.) devem orbitar em um círculo perfeito ao redor da foto central de forma contínua e suave, com efeito sutil de brilho (glow) ciano.

C. Sobre (About)
Foto de formatura à esquerda.

Texto descritivo, métricas ("3+" e "40+" em ciano) e botão "Download CV" à direita.

D. Minha Experiência
Linha do tempo em ziguezague com marcos em ciano e cards de experiência profissional.

E. Projetos em Destaque
Grid organizado de cards de projetos com imagens, tags de tecnologia e links de acesso.

F. Contato ("Vamos construir algo juntos?")
Ícones de redes sociais e formulário de contato limpo com campos estilizados e botão de envio sólido em ciano.

4. Requisito Especial: Animações de Transição entre Seções
Para garantir um acabamento profissional de alto nível, implemente transições fluidas de scroll (Fade-in / Reveal) usando Framer Motion ou uma biblioteca equivalente:

Efeito de Entrada (Scroll Reveal): À medida que o usuário rola a página para baixo, cada seção deve surgir suavemente na tela (fazendo um leve fade-in combinado com um deslocamento vertical de baixo para cima, ex: initial={{ opacity: 0, y: 40 }} para whileInView={{ opacity: 1, y: 0 }}).

Configuração de Gatilho: Utilize propriedades de viewport para que a animação acione exatamente quando a seção entrar no campo de visão do usuário (viewport={{ once: true, amount: 0.2 }}).

Transição Contínua: Garanta que não haja saltos bruscos ou "engasgos" ao passar de uma seção para a outra, mantendo a harmonia do fundo escuro em todo o site.

5. Responsividade e Performance
Adaptação completa para dispositivos móveis (empilhamento de colunas, ajuste no raio da órbita de skills da Hero para mobile).

Otimização de performance para garantir que as animações de scroll e o carrossel orbital rodem a 60 FPS sem pesar no navegador.