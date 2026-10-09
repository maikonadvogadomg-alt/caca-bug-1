# Build APK via EAS — bug-

## Configuração rápida

### 1. Secrets no GitHub
- `EXPO_TOKEN` → Seu token do Expo (expo.dev → Account Settings → Access Tokens)

### 2. Disparar o build
- GitHub → Actions → "Build APK via EAS" → Run workflow
- Escolha o perfil: `preview` (APK) ou `production` (AAB)

### 3. Baixar o APK
- Após ~10 minutos → clique no build → seção "Artifacts"

## Perfis de build
| Perfil | Tipo | Uso |
|--------|------|-----|
| `development` | APK debug | Testes internos |
| `preview` | APK release | Distribuição interna |
| `production` | AAB | Google Play |

## App Info
- **Nome:** bug-
- **ID:** 0b7ad98a-1fa7-4ad6-9ccc-a46e4d770482
- **Conta Expo:** maikon1766
- **Versão:** 1.0.0
