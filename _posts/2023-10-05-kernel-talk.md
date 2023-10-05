---
layout: post
title: Kernel Talk Cheatsheet
---
A cheatsheet for the commands I am going to demo.

- [guide](https://nickdesaulniers.github.io/blog/2018/10/24/booting-a-custom-linux-kernel-in-qemu-and-debugging-it-with-gdb/)
- [qemu](https://fadeevab.com/how-to-setup-qemu-output-to-console-and-automate-using-shell-script/)

Launch a t2.2xlarge using the Kali AMI.
```
touch ~/.hushlogin
tmux
git clone git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git --depth 1 --branch v6.1.4 
cp -r linux orig 
cd linux
sudo apt update 
sudo apt install -y vim make libncurses5-dev bison flex libelf-dev bc libssl-dev pahole qemu-kvm
make menuconfig 
make -j8
ls orig | diff -u - <(ls linux) # pay attention to vmlinux
qemu-system-x86_64 -kernel ./vmlinux -nographic --append "console=ttyS0"
<C-A x> to quit
reset
```
