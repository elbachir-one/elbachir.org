# Setup Virt Manager For Void Linux

### Installation

```sh
sudo xbps-install -S virt-manager libvirt qemu openbsd-netcat dnsmasq vde2 bridge-utils
```

### Setup

```sh
sudo usermod -aG kvm <username>
modprobe kvm-<your CPU>    # And for AMD use `kvm-amd` and for Intel `kvm-intel`
sudo usermod -a -G libvirt <username>
```

### Configuration

```sh
sudo vim /etc/libvirt/libvirtd.conf
```

**Uncomment this lines**
- listen_tls = 0
- unix_sock_group = "libvirt"
- unix_sock_ro_perms = "0777"
- unix_sock_rw_perms = "0770"
- unix_sock_dir = "/run/libvirt"
- auto_unix_ro = "polkit" --> auto_unix_ro = "none"
- auto_unix_rw = "polkit" --> auto-unix_rw = "none"

```sh
sudo vim /etc/libvirt/libvirt.conf
```

**Uncomment**
- uri_default = "qemu:///system"

```sh
sudo vim /etc/libvirt/qemu.conf
```

**Uncomment and edit line 519 and 523**
- user = "your username"
- group = "libvirt"

### Enable Services

```sh
sudo ln -s /etc/sv/libvirtd /var/service/
sudo ln -s /etc/sv/virtlogd /var/service/
sudo reboot
```

**Note: If you have DHCPCD for networking and you want to use ssh,
you need to change it to NetworkManager.**

```sh
sudo xbps-install -S NetworkManager
sudo sv down dhcpcd
sudo rm /var/service/dhcpcd
sudo ln -s /etc/sv/NetworkManager /var/service/
sudo ln -s /etc/sv/dbus /var/service/
sudo reboot
```

***Et voilà***
