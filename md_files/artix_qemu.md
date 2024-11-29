# ⚙️ Setup Virt Manager for Artix Linux

## 🔧 Installation

```bash
sudo pacman -S virt-manager libvirt-dinit qemu dnsmasq-dinit bridge-utils openbsd-netcat vde2
```

## 🔧 Setup

```bash
sudo usermod -aG kvm <username>
modprob kvm-<your CPU>    # For AMD use `kvm-amd` and for Intel `kvm-intel`
sudo usermod -a -G libvirt <username>
```

## 🔧 Configuration

### 1. Edit default config for libvirt

```bash
sudo vim /etc/libvirt/libvirt.conf
```
Uncomment the following line:
    - `uri_default = "qemu:///system"`

### 2. Configure QEMU user permissions

```bash
sudo vim /etc/libvirt/qemu.conf
```

- Uncomment and edit lines 519 and 523:
    - `user = "your username"`
    - `group = "libvirt"`

## 🚀 Enable Services

```bash
sudo dinitctl enable libvirtd
sudo reboot
```

**Note:** After rebooting, you can start by creating the VM using the plus button. However, before that, you need to check the box to start the virtual network on boot.

- Go to the menu bar and click on **Edit -> Connection Details**. A window will open; go to **Virtual Networks** and check the box for *Autostart*.


## 🎉 Finish

**Et voilà** -- you\'ve successfully set up Virt Manager on Artix Linux!
