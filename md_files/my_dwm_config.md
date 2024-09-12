# Writing the provided README content into a markdown file with tables.
content = """
# dwm Configuration - README

This README outlines the keybindings, scratchpad usage, layouts, and other important settings in the `config.def.h` file for my `dwm` build.

## Appearance

| Property        | Value                                                    |
|-----------------|----------------------------------------------------------|
| **Border Width**| 0px (no window border)                                    |
| **Gaps**        | 2px gap between windows                                   |
| **Snap**        | 8px                                                       |
| **Status Bar**  | Displayed at the top of the screen                        |
| **Fonts**       | TerminessTTF Nerd Font (18px, bold), JoyPixels (16px, bold)|
| **Colors**      | See below                                                 |

### Color Scheme

| Element            | Foreground   | Background | Border    |
|--------------------|--------------|------------|-----------|
| **SchemeNorm**      | #dddfff      | #000000    | #444444   |
| **SchemeSel**       | #ffffff      | #000000    | #00ffff   |

## Keybindings

| Action                                | Keybinding                              |
|---------------------------------------|-----------------------------------------|
| **Terminal**                          | Alt + Enter                             |
| **Quit dwm**                          | Alt + Shift + q                         |
| **Switch Windows**                    | Alt + Tab                               |
| **Toggle Floating**                   | Alt + Space                             |
| **Tile Layout**                       | Alt + t                                 |
| **Floating Layout**                   | Alt + f                                 |
| **Monocle Layout**                    | Alt + m                                 |
| **Move Focus**                        | Alt + j/k                               |
| **Resize Windows**                    | Alt + h/l                               |
| **Increase/Decrease Gaps**            | Alt + Shift + h/l                       |
| **Switch Master/Slave Windows**       | Alt + ,/.                               |
| **View Tag**                          | Alt + [1-9]                             |
| **Move Window to Tag**                | Alt + Shift + [1-9]                     |
| **View All Tags**                     | Alt + 0                                 |
| **Move Window to All Tags**           | Alt + Shift + 0                         |

## Scratchpads

| Program            | Keybinding                 |
|--------------------|----------------------------|
| **Terminal**       | Alt + Shift + Return        |
| **Ranger**         | Alt + Shift + r             |
| **ncmpcpp**        | Alt + Shift + m             |
| **tty-clock**      | Alt + Shift + c             |
| **Vim**            | Alt + Shift + v             |
| **nnn**            | Alt + Shift + n             |
| **Typiskt**        | Alt + Shift + t             |
| **Cava**           | Alt + Shift + a             |

## Layouts

| Layout    | Keybinding   |
|-----------|--------------|
| Tile      | Alt + t      |
| Floating  | Alt + f      |
| Monocle   | Alt + m      |

## Autostart Programs

- st (simple terminal)
- picom (compositor for transparency)
- slstatus (status bar)
- mpd (music player daemon)
- dunst (notification daemon)
- clipmenud (clipboard manager)
- xrdb (X resources for color settings)
- barrier (for mouse and keyboard sharing)
- Background image via `.fehbg`
- Cursor hiding via `xhidecursor`

## Tags

| Tag               | Icon              |
|-------------------|-------------------|
| **Terminal**      |                  |
| **Web Browser**   |                  |
| **Development**   |                  |
| **Chat**          |                  |
| **Files**         | 󰑈                |
| **Music**         | 󰛍                |
| **Documents**     |                  |
| **Media Editing** | 󰣠                |
| **Video**         |                  |
| **Recording**     |                  |

### Tag Rules

| Application        | Tag  | Description   |
|--------------------|------|---------------|
| `discord`          | 5    | Chat          |
| `qemu`             | 9    | Virtualization|
| `surf`/`qutebrowser`| 3    | Browser       |
| `firefox`/`chromium`| 9    | Browser       |
| `obs`              | 7    | Recording     |
| `virt-manager`     | 8    | Virtual Machines|
| `transmission-gtk` | 9    | Downloads     |
| `krita`, `gimp`, `kdenlive`| 7 | Media Editing|

## Special Rules

- Floating scratchpad windows (e.g., `spterm`, `spfm`, `spncm`, etc.) are not swallowed and behave as independent floating windows.
"""
