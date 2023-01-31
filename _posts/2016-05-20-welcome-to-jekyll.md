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
$ git log
commit 2cb8e624295ffa0c4d659fcec7d9e7a6c48de156 (grafted, HEAD, tag: v6.1.4)
    Author: Greg Kroah-Hartman <gregkh@linuxfoundation.org>
        Date:   Sat Jan 7 11:12:04 2023 +0100
	Linux 6.1.4
$ apt install -y libncurses5 libncurses5-dev bison flex
$ make menuconfig
$ vim .config # remove "debian" things if they complain
$ apt install -y libssl-dev libelf-dev
$ make -j12 # change -jN to your liking, my 32-core computer can take N=12 or more but my Thinkpad laptop could only take N=2 before crashing
```

## Running the Kernel in QEMU
```
$ ls -lh vmlinux
```
`vmlinux` should exist, if it doesn't, something went wrong and go back to [build](#building-the-kernel).

Otherwise, let's run our kernel!


## Running the Kernel on Hardware
If you're on ubuntu, you can do 
```
$ update-grub2 # make sure you're using the grub bootloader
$ make modules_install
$ make install
```
When booting up, press and hold `<Shift>` to go to the grub menu, then go to advanced options to select the kernel you want to boot with.
