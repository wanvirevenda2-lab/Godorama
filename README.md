# Godorama Android wrapper

Projeto inicial de aplicativo Android que abre o site oficial `https://godorama.com` em uma WebView gerenciada pelo Capacitor. Não copia o catálogo nem baixa vídeos; o conteúdo continua sendo fornecido pelo site.

## Requisitos
- Node.js LTS
- Android Studio e Android SDK
- Java/JDK compatível com a versão do Android Gradle Plugin instalada pelo Capacitor

## Gerar o projeto Android
1. Extraia o ZIP.
2. Abra um terminal nessa pasta.
3. Execute `npm install`.
4. Execute `npm run android:add` para criar a pasta `android`.
5. Execute `npm run android:sync`.
6. Execute `npm run android:open` para abrir no Android Studio.
7. No Android Studio, aguarde a sincronização Gradle e use **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

## Importante sobre celular e Android TV
- O app abre o site oficial diretamente, mantendo o catálogo atual que o site disponibiliza.
- A responsividade da página interna depende do próprio Godorama. O aplicativo não pode alterar com segurança o CSS de um site de terceiros.
- A navegação por controle remoto e o vídeo na Android TV dependem de o site suportar foco por teclado/D-pad e reprodução em WebView/TV.
- O site pode exigir login, bloquear WebViews, usar DRM ou aplicar outras restrições. Este wrapper não contorna autenticação, DRM, paywall ou controles de acesso.
- Para uma versão realmente otimizada para TV, será necessário testar numa Android TV real e, se necessário, obter suporte/API do proprietário do site.
- Este projeto não inclui marca, imagens, vídeos ou conteúdo copiados do catálogo. O nome é usado apenas para identificar o destino do wrapper; confirme autorização para distribuir o app com essa marca.
