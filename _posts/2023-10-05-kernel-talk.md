---
layout: post
title: Kernel Talk Cheatsheet
---
A cheatsheet for the commands I am going to demo.

- [guide](https://nickdesaulniers.github.io/blog/2018/10/24/booting-a-custom-linux-kernel-in-qemu-and-debugging-it-with-gdb/)
- [qemu](https://fadeevab.com/how-to-setup-qemu-output-to-console-and-automate-using-shell-script/)

Launch a t2.2xlarge using the Ubuntu (with 32GiB SSD). 
```
tmux
git clone git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git --depth 1 --branch v6.1.4 # 2 minutes
cp -r linux orig 
cd linux
sudo apt update && sudo apt install -y vim make libncurses5-dev bison flex libelf-dev bc libssl-dev pahole qemu-kvm # 2 minutes
make menuconfig 
vim .config # search for "certs" and "debian"
make -j8 # 30+ minutes
cd ..
ls orig | diff -u - <(ls linux) # pay attention to vmlinux
cd linux
dd if=/dev/zero of=rootfs.ext2 bs=1024k count=256
mkfs.ext2 rootfs.ext2
./vmlinux # segfault
qemu-system-x86_64 -kernel ./vmlinux # gtk initialiation failed
qemu-system-x86_64 -kernel ./vmlinux -nographic -append "console=ttyS0" -hda rootfs.ext2 # failed to open root device
qemu-system-x86_64 -kernel ./vmlinux -nographic -append "console=ttyS0 root=/dev/sda" -hda rootfs.ext2
# <C-A x> to quit
reset
```
- In general, `package-dev` contain headers, `.a` and `.so` files
- `libncurses` is to get a GUI like interface for `make menuconfig`. 
- `flex` is a lexical analyzer.
- `bison` is a parser generator.
- `libelf-dev` is for the executable and linkable format (ELF).
- `bc` is basic calculator, to [generate time constants](https://unix.stackexchange.com/questions/439482/why-is-bc-required-to-build-the-linux-kernel)
- `libssl-dev` is for SSL.
- `pahole` is for `scripts/recordmcount.pl`. 
- `qemu-kvm` is for `qemu-system-x86_64`.

## Init
```
mkdir vfs && cd vfs
cat << EOF > hello-kernel.c
#include <stdio.h>

int main(){
        printf("Hello, kernel!\n");
        sleep(9999999999999);
}
EOF
gcc --static hello-kernel.c -o init
find . | cpio -o -H newc | gzip > root.cpio.gz
qemu-system-x86_64 -nographic -kernel ./vmlinux -append "console=ttyS0 root=/dev/sda" -hda rootfk.ext2 -initrd vfs/root.cpio.gz 
```

Git clone and compile Busybox
```
cd .. # don't do stuff in the linux directory, git will be confused
sudo apt intall -y bzip2
git clone --depth=1 https://github.com/mirror/busybox.git --branch 1_36_stable && cd busybox
make defconfig 
vi .config # set CONFIG_STATIC=y (Note: DELETE THE COMMENT TOO)
make -j8
make CONFIG_PREFIX=$HOME/linux/vfs install
```
Then we make out initrd with busybox 
```
cd ../linux # return back to linux directory
cd vfs
mkdir etc proc sys
cat << EOF > init                              
#!/bin/sh
                           
mount -t proc proc /proc
mount -t sysfs none /sys
                                                      
mknod /dev/ttyS0 c 4 64
setsid sh -c 'exec sh </dev/ttyS0 >/dev/ttyS0 2>&1'
EOF                                                   

chmod +x init 
find . | cpio -o -H newc | gzip > root.cpio.gz # package it
qemu-system-x86_64 -nographic -kernel ./vmlinux -append "console=ttyS0 root=/dev/sda" -hda rootfs.ext2 -initrd vfs/root.cpio.gz 
```