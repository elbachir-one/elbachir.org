# Booting Void Linux Directly via EFI Stub (No GRUB)

This guide shows how to configure your Void Linux system to boot directly using the
**EFI stub**, bypassing GRUB. This can lead to faster, simpler booting, especially
on UEFI systems.

---

## 📋 Prerequisites

* UEFI firmware (not legacy BIOS)
* Linux kernel with EFI stub support (`CONFIG_EFI_STUB=y`)
* Access to the EFI System Partition (ESP), usually mounted at `/boot/efi`
* `efibootmgr` installed (for managing UEFI boot entries)

---

## 📁 Step 1: Verify Kernel EFI Stub Support

Run:

```bash
grep EFI_STUB /boot/config-$(uname -r)
```

Output should include:

```bash
CONFIG_EFI_STUB=y
```

---

## 📂 Step 2: Prepare Kernel and Initramfs

Copy the kernel and initramfs to the EFI System Partition:

```bash
sudo mkdir -p /boot/efi/EFI/Linux
sudo cp /boot/vmlinuz-$(uname -r) /boot/efi/EFI/Linux/
sudo cp /boot/initramfs-$(uname -r).img /boot/efi/EFI/Linux/
```

> If your initramfs has a different name (e.g., `initrd.img-*`), use that instead.

---

## 📂 Step 3: Create a UEFI Boot Entry

Use `efibootmgr` to create a boot entry pointing directly to your kernel:

```bash
sudo efibootmgr -c \
  -d /dev/sdX \
  -p Y \
  -L "Linux EFI Stub" \
  -l '\EFI\Linux\vmlinuz-<version>' \
  -u "initrd=\EFI\Linux\initramfs-<version>.img root=/dev/sdZZ ro quiet splash"
```

Replace:

* `/dev/sdX` → disk containing the EFI partition (e.g., `/dev/sda`)
* `Y` → EFI partition number (usually 1)
* `<version>` → kernel version (e.g., `6.1.130_1`)
* `/dev/sdZZ` → your root partition (e.g., `/dev/sda2`)

Check your root partition with:

```bash
lsblk
```

---

## 🔀 Step 4: Reboot and Test

After rebooting, your system should boot directly into Linux using the EFI stub.

Check with:

```bash
dmesg | grep EFI
```

---

## 🧹 (Optional) Remove GRUB

Once EFI stub boot is confirmed working, you can optionally remove GRUB:

```bash
sudo xbps-remove -R grub-x86_64-efi grub-i386-efi grub
```

> ⚠️ If `efibootmgr` gets removed, reinstall it.

And remove its files from the ESP:

```bash
sudo rm -rf /boot/efi/EFI/void_grub
```

> ⚠️ Only do this once you're sure the new boot method works.

---

## 🔧 Notes

* You must manually update the EFI stub entry if your kernel/initramfs changes.
* You can create multiple entries with different kernels if needed.
* No GRUB menu means no easy kernel selection or recovery options unless you
set them up manually.

---

## 📚 References

* [Linux Kernel Documentation](https://www.kernel.org/doc/html/latest/)
* `man efibootmgr`

---
