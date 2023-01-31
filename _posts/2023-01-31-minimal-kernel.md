---
layout: post
title: Compiling a Minimal Kernel
---
The exploration logs are found at [here](https://github.com/tch1001/kernel).
Let's try to compile a kernel that is as small as possible.

## Measuring Size
The kernel size can be determined using 
```bash
$ ls -lh vmlinux
-rw-r--r--  1 tanchienhao  staff   2.2K Jan 31 12:12 	README.md
```
In this case, I will measure the size of `vmlinux` instead of `vmlinuz` since compression is cheating.

## Building the Kernel 
Of course the small kernel must still be functional, so we will test it using [qemu](https://www.qemu.org/). One can also use virtualbox but I chose qemu because I will be working remotely using SSH and VNC takes too much mobile data lol.

```bash
$ git clone git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git --depth 1 --branch v6.1.4
$ cd linux
$ git log
commit 2cb8e624295ffa0c4d659fcec7d9e7a6c48de156 (grafted, HEAD, tag: v6.1.4)
    Author: Greg Kroah-Hartman <gregkh@linuxfoundation.org>
        Date:   Sat Jan 7 11:12:04 2023 +0100
	Linux 6.1.4
$ apt install -y libncurses5 libncurses5-dev bison flex
$ make menuconfig 
# go enable PVH if u want to run in QEMU
$ vim .config # remove "debian" things if they complain, and also the "certs/signing_key.pem"
$ apt install -y libssl-dev libelf-dev
$ make -j12 # change -jN to your liking, my 32-core computer can take N=12 or more but my Thinkpad laptop could only take N=2 before crashing
# if they prompt something involving certs, just press enter (default choices)
```

## Running the Kernel in QEMU
Important: Don't forget to enable `CONFIG_PVH=y` in `.config` if you want to run in QEMU.
```
$ ls -lh vmlinux
```
`vmlinux` should exist, if it doesn't, something went wrong and go back to [build](#building-the-kernel).

Otherwise, let's run our kernel!
### Make our initramfs
Either use
```
$ mkinitramfs -o ramdisk.img
```
OR make your own
```
$ cat << EOF > hello-kernel.c
#include <stdio.h>

int main(){
        printf("Hello, kernel!\n");
        sleep(9999999999999);
}
EOF
$ gcc --static hello-kernel.c -o my-init
find . | cpio -o -H newc | gzip > root.cpio.gz

### Making a hard disk (for root)
```
$ dd if=/dev/zero of=roorfs.ext2 bs=1024k count=256
$ mkfs.ext2 rootfs.ext2
```

### Booting
```
$ qemu-system-x86_64 -kernel arch/x86_64/boot/bzImage -initrd vfs/root.cpio.gz -nographic --append "console=tty0 console=ttyS0 panic=1" -m 512 -vga none -d isplay none -serial mon:stdio -no-reboot
$ qemu-system-x86_64 -kernel arch/x86/boot/bzImage -initrd vfs/root.cpio.gz -nographic --append "console=tty0 console=ttyS0 panic=1 root=/dev/sda" -hda rootfs.ext2 -m 512 -vga none -display none -serial mon:stdio -no-reboot
```
Doesnt seem to work right now

## Running the Kernel on Hardware
If you're on ubuntu, you can do 
```
$ update-grub2 # make sure you're using the grub bootloader
$ make modules_install
$ make install
```
When booting up, press and hold `<Shift>` to go to the grub menu, then go to advanced options to select the kernel you want to boot with.
