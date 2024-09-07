# Void Linux Package Installation from Source

**Installing, Configuring, and Patching Suckless Tools via xbps-src**

#### Configuring

1. Install Xorg, Git, and additional dependencies such as libXft-devel,
libX11-devel, libXinerama-devel, and base-devel

```sh
    sudo xbps-install -S xorg git base-devel libXft-devel libX11-devel libXinerama-devel
```

2. Clone the Void Linux packages repository

```sh
    git clone --depth=1 https://github.com/void-linux/void-packages.git
    cd void-packages/
    ./xbps-src binary-bootstrap
```

3. Extract the dwm source code

```sh
    ./xbps-src extract dwm
    ls masterdir/builddir/dwm{version}/
```

4. Create a `files` directory inside the `dwm` source package for your configuration:

```sh
    mkdir -p srcpkgs/dwm/files
    cp masterdir/builddir/dwm{version}/config.def.h srcpkgs/dwm/files/config.h
```

5. After modifying `config.h` for `dwm`, build and install the package

```sh
    ./xbps-src pkg dwm
    sudo xbps-install -R hostdir/binpkgs dwm
```

#### Patching

1. Create a `patches` directory in the source package (for example, in `st`):

```sh
    mkdir -p srcpkgs/st/patches
```

2. Download the patch and place it in the `patches` directory:
3. Apply the patch, build, and install `st`:

```sh
    ./xbps-src extract st
    cp masterdir/builddir/st{version}/config.def.h srcpkgs/st/files/config.h
    ./xbps-src -f pkg st
    sudo xbps-install -R hostdir/binpkgs -f st
```

Note: The same steps apply for other Suckless tools

***Et voilà***
