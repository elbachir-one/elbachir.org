# T2SDE on WSL Setup Guide

This guide outlines the steps to set up T2 System Development Environment (T2SDE) on Windows Subsystem for Linux (WSL) using a virtual machine (VM).

## Requirements
- **Virtualization Software**: (e.g., VirtualBox, VMware, or QEMU)
- **T2SDE ISO**: Download from [T2SDE official website](http://www.t2sde.org/)
- **WSL**: Windows Subsystem for Linux enabled on your machine

## Steps to Setup

### 1. Download T2SDE ISO
- Visit [T2SDE](http://www.t2sde.org/) and download the latest ISO.

### 2. Create and Configure a Virtual Machine
- Use your preferred VM software to create a new virtual machine.
- Set **bridged networking** so the VM gets an IP address on your network.
- Boot the VM and install T2SDE just the basic, here is a Video [T2sde install](https://www.youtube.com/watch?v=pve_pLXzk-0).

### 3. Create a TAR Archive of T2SDE
- Change to the root directory:

  ```sh
  cd /
  ```

- Create a tarball of the root directory, excluding unnecessary directories/files:

  ```sh
  tar -cvf t2sde-wsl.tar \
    --exclude='t2sde-wsl.tar' \
    --exclude='proc/kcore' \
    --exclude='lib/firmware/*' \
    --exclude='lib/modules/*' \
    --exclude='usr/X11R7/*' \
    --exclude='boot/*' \
    --exclude='opt/*' [a-z]*
  ```
- Give root a password:
  ```sh
  passwd root
  ```

### 4. Transfer the TAR Archive to Windows
- Use `scp` to copy the `t2sde-wsl.tar` file from the VM to your Windows machine. Replace `root@the.ip.for.vm` with your VM’s IP address:

  ```sh
  scp root@the.ip.for.vm:/t2sde-wsl.tar .
  ```

### 5. Import T2SDE into WSL
- Open a Windows terminal (CMD or PowerShell) and import the TAR archive into WSL. Replace `yourusername` with your actual Windows username:

  ```sh
  wsl --import T2 C:\Users\yourusername\t2sde .\t2sde-wsl.tar
  ```

### 6. Start T2SDE on WSL
- Once imported, you can start the T2SDE instance by running:

  ```sh
  wsl -d T2
  ```

### 7. Cleanup
- You can now remove the tar file if no longer needed:

  ```sh
  rm .\t2sde-wsl.tar
  ```

---

### Troubleshooting
- Ensure that your VM has network access (check bridge network settings if needed).
- If you encounter errors during the import, verify the path of the `t2sde-wsl.tar` file and ensure it was transferred correctly.

### Conclusion
You've successfully launched T2SDE on WSL by following these procedures. Take pleasure in using and investigating T2SDE in the comfort of your Windows environment

***Et voilà!***
