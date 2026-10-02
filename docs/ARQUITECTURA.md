# Arquitectura pedagógica

## Dependencia
HTML/CSS → JavaScript → React.

## Reglas
- let/const; evitar var como patrón por defecto.
- === como comparación por defecto, explicando coerción.
- DOM semántico y accesible.
- No usar innerHTML con contenido no confiable.
- Estados loading/error/empty explícitos.
- fetch no rechaza Promise por HTTP 4xx/5xx: comprobar response.ok/status.
- AbortController para cancelación cuando aplica.
- No guardar secretos en frontend.
- localStorage no es almacenamiento seguro.
- Módulos antes de frameworks.
- No prometer contenido futuro.
