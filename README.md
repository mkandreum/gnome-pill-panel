# Pill Panel

Extensión local para GNOME Shell que convierte la barra superior en una **píldora flotante, redondeada y translúcida**.

![GNOME Shell 50](https://img.shields.io/badge/GNOME%20Shell-50-blue)
![Ubuntu 26.04](https://img.shields.io/badge/Ubuntu-26.04-orange)

## Características

- Barra flotante con **6 px** de separación arriba y abajo, y **8 px** a los lados.
- Bordes totalmente redondeados (radio de píldora).
- Fondo translúcido: **45 %** en modo oscuro y **60 %** en modo claro.
- Sombra suave y sombra de texto/iconos para mantener la legibilidad.
- Se oculta en la pantalla de bloqueo.
- Sin dependencias, sin conexiones de red y sin permisos especiales.

## Compatibilidad

Probada en **Ubuntu 26.04** con **GNOME Shell 50.1** en Wayland. El archivo `metadata.json` declara compatibilidad con GNOME Shell 50.

## Instalación

### Manual

1. Copia la carpeta a:

   ```bash
   ~/.local/share/gnome-shell/extensions/pill-panel@local/
   ```

2. Activa la extensión:

   ```bash
   gnome-extensions enable pill-panel@local
   ```

3. En Wayland, cierra sesión y vuelve a entrar para que GNOME Shell cargue la extensión nueva.

### Desde un zip

```bash
gnome-extensions pack
gnome-extensions install --force pill-panel@local.shell-extension.zip
```

Después, actívala desde **Extension Manager** o con `gnome-extensions enable pill-panel@local`.

## Personalización

Edita `stylesheet-dark.css` o `stylesheet-light.css`:

```css
#panelBox.pill-panel-box {
  /* arriba · derecha · abajo · izquierda */
  padding: 6px 8px 6px 8px;
}

#panel.pill-panel {
  background-color: rgba(20, 20, 20, 0.45); /* opacidad del fondo */
  border-radius: 999px;                      /* forma de píldora */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35); /* sombra */
}
```

Después de editar el CSS, desactiva y vuelve a activar **Pill Panel** en Extension Manager para recargar los estilos. Los cambios de `extension.js` requieren cerrar y volver a iniciar sesión.

## Estructura

```text
.
├── extension.js          # Añade las clases CSS al panel
├── metadata.json         # Metadatos de la extensión
├── stylesheet-dark.css   # Estilos para el tema oscuro
└── stylesheet-light.css  # Estilos para el tema claro
```

## Notas

Esta extensión se creó como una alternativa local a las extensiones de transparencia de extensions.gnome.org. El tema Yaru de Ubuntu fuerza el fondo del panel con `!important`, por lo que esas extensiones no siempre funcionan; aquí el estilo se aplica con una especificidad mayor.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
