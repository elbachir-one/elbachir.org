# OpenBSD

### Things to do after installing OpenBSD

---

#### 1. Set up user permissions

Login as `root` to configure `doas` for other users.
First, install a text editor:

```bash
pkg_add vim
```

```bash
usermod -G operator <user name>
usermod -G wheel <user name> # To use doas
```

Edit the `doas` configuration file:

```bash
vim /etc/doas.conf
```

Add the following line.
```bash
permit persist :wheel
```

Save the file and exit.

If you don't want to type your password every time when using `doas`, you can instead use:

```bash
permit nopass :wheel
```

---

#### 2. Update firmware and OpenBSD base system

```bash
fw_update # To install missing driver
syspatch # Apply system patches
```

---

#### 3. Install a Desktop Environment (DE) / Window Manager (WM) and enable services

In this setup, we will install **OpenBox** and some useful extras:

```bash
pkg_add openbox tint2 obconf obmenu noto-cjk noto-emoji noto-fonts sakura chromium p5-Gtk3 git gtar picom feh cmake curl py-gtk2
```

Enable and start necessary daemons:

```bash
rcctl enable apmd # Enable power daemon
rcctl enable messagebus # Enable dbus
rcctl enable xenodm # Enable xenodm
```

Create or edit your `.xsession` file in your home directory:

```bash
vim ~/.xsession
```

Add the following line to start XFCE4:

```
exec startxfce4
```

Save and exit.

Finally, reboot:

```bash
doas shutdown -r now
```

---

#### 4- How to Remove the `xconsole` Window After Login

**NOTE:** After you log in, a small window may pop up with `xenodm`. That is the `xconsole`.

To get rid of it, follow these steps:

1. Open the file `/etc/X11/xenodm/Xsetup_0` with `vim` (using `doas` for permission):

```bash
doas vim /etc/X11/xenodm/Xsetup_0
```

2. Find the line that mentions `xconsole`.

3. Comment out that line by adding a `#` at the beginning.

4. Save the file and exit `vim`.

5. Reboot your system:

```bash
doas shutdown -r now
```

After rebooting, the `xconsole` window will no longer appear.

---

***Et voilà!***
