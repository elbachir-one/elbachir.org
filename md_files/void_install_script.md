# SUCKLESS FOR VOID AUTO INSTALL SCRIPT

**Change the privileges so that you don't have to type your passwerd every time**

```sh
    sudo EDITOR=vim visudo
```

Uncoment this line (#%wheel ALL=(ALL:ALL) NOPASSWD: ALL) ===> (%wheel ALL=(ALL:ALL) NOPASSWD: ALL)

**Git the script**

```sh
    sudo xbps-install -Sy && sudo xbps-install -uy xbps
    wget https://github.com/elbachir-one/VOID/blob/main/void.sh
    chmod +x void.sh
    ./void.sh
```

***Et voilà***
