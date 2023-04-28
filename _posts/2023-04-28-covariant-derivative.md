---
layout: post
title: Koszul Connection and Covariant Derivative
categories: [Math, Physics, QFT, Gauge Theory]
---

## Good Resources
- Wiki: [associated bundle](https://en.wikipedia.org/wiki/Associated_bundle), [Koszul connection](https://en.wikipedia.org/wiki/Connection_(vector_bundle))
- Frederic Schuller [Lectures 19-25](https://www.youtube.com/playlist?list=PLPH7f_7ZlzxTi6kS4vCmv4ZKm9u8g5yic), specifically 23 for this blog
- [Nakahara]((https://www.amazon.com/Geometry-Topology-Physics-Graduate-Student/dp/0750306068)) Chapter 10.4

We mostly follow the notation in Schuller [Lecture 25](https://youtu.be/ClIVG7ilm_Q).

As part 2 of my series building towards "Twisting Supersymmetry" (see [part 1 here](https://tch1001.github.io/math/physics/qft/gauge%20theory/2023/04/27/ehresmann.html)), I will talk about connections on associated bundles induced by connections on principal bundle. We actually see this very often: $U(1)$ gauge theory (electromagnetism) will often have a scalar field (scalar QED) or a Dirac spinor field (QED) charged under $U(1)$. If one inspects the covariant derivative in scalar QED, it actually arises from the connection on the complex line bundle ($\mathbb C$-bundle) induced by the connection on the $U(1)$-principal bundle. And for QED, it is the connection on the $K \oplus \bar K$ vector bundle (Dirac spinor bundle) induced by the connection on the $U(1)$-principal bundle.

## Associated Bundle
Loosely speaking, an associated bundle (associated to some $G$-principal bundle) is a way to attach to each point in $x\in M$ a fiber $\pi^{-1} x \cong F $ homeomorphic to a topological space $F$ on which $G$ acts on. This fiber could be a Lie group $G$ itself (so a $G$-principal bundle is technically associated to itself), but this definition also allows for vector spaces, which means we can have representations $(\rho, V)$ of $G$ as fibers too. 

The formal definition ([wiki](https://en.wikipedia.org/wiki/Associated_bundle)) is considering the direct product modulo an equivalence relation 

$$
\begin{aligned}
& P_V := P\times_\rho V := (P \times V) / \sim  \\
& (p, v) \sim (p \bullet_R g , g^{-1} \bullet_L v) 
\end{aligned}
$$

Intuition: it may initially seem weird that we are considering all pairs, but it turns out this equivalence relation basically collapses the entire $G$ fiber of $P$ to a single point in the base manifold $M$. So the only "degree of freedom" left is the $V$. So effectively we are attaching a copy of $V$ to every point in the base manifold $M$.

## Covariant Derivative of Associated Bundle Section (Teaser)
This is the end goal: given a vector $X\in T_p M$ and a section in a vector bundle $\sigma: M \rightarrow P_V$ (we need vector bundle structure because otherwise subtraction won't make sense in the fiber), we want to rigorously calculate the **covariant (directional) derivative of $\sigma$ wrt $X$ direction**

$$\nabla_X \sigma \vert_p \in \pi^{-1}(p) \cong V$$

We **want** this covariant derivative to satisfy various properties, which we can check later once we have defined it. For $f \in C^{\infty} (M),\ T,S \in T M$

1. $$\nabla_{fT+S} \sigma = f \nabla_T \sigma+ \nabla_S \sigma$$
2. $$\nabla_T \sigma_1 + \sigma_2 = \nabla_T \sigma_1 + \nabla_T \sigma_2$$
3. $$\nabla_T (f \sigma) = T(f) \sigma + f \nabla_T \sigma $$

The definition that we work towards is the following: for a *local* section $s:\mathcal U \sub M \rightarrow P_V$, a *local* trivialisation $\varphi : \mathcal U \sub M \rightarrow P$, the exterior covariant derivative on $P$, and a $V$-valued function $\phi:P\rightarrow V$, a $\mathfrak g$-valued connection one-form $\omega:P \rightarrow \mathfrak g$

$$\nabla_T s := (\varphi^* D \phi) (T) = ds(T) + (\varphi^* \omega)(T) \bullet_L s$$

It is a definition dump for now but let's explain the details.

## Exterior Covariant Derivative on $P$
Definition: For any function $f$ on $\bigotimes^n TP$ (meaning any number $n$ of tensor products of $TP$)

$$Df := df \circ \text{hor}$$

Special case 1: if $\omega$ is $\mathfrak g$-valued connection one-form ($n=1$), for any $X,Y\in TP$,

$$D\omega(X,Y) := d\omega (\text{hor}(X), \text{hor}(Y))$$

Special case 2: if $\phi$ is a $F$-valued function on $P$ ($n=0$), for any $X\in TP$,

$$D\phi(X) := d\phi(\text{hor}(X))$$

## Correspondence between $F$-valued functions on $P$ \& global sections of associated bundle $P_F$
One can define the covariant derivative using parallel transport on the associated vector bundle $P_V$ but that definition is difficult to work with. Instead we seek to define things by using the principal $G$-bundle $P$ and defining objects on it, then pulling them over to the associated bundle $P_V$.

We are going to work with a general fiber $F$ (not necessarily a vector bundle).

The first thing to establish is the one-to-one correspondence between (global) sections $\sigma$ on $P_V$ and $G$-equivariance $F$-valued functions $\phi$ on $P$. $G$-equivariance means $$\phi(p \bullet_R g) = g^{-1} \bullet_L \phi(p)$$

The correspondence from $\sigma$ to $\phi_\sigma$ is 

$$
\begin{aligned}
\phi_\sigma : P & \rightarrow F \\
p & \mapsto i^{-1}_p (\sigma (\pi(p)))\\
\text{where } i_p : F & \rightarrow P_F \\
f & \mapsto [(p, f)]
\end{aligned}
$$

One can check (watch Schuller Lec 25) that this $\phi$ is $G$-equivariant

The other direction from $\phi$ to $\sigma_\phi$ is 

$$
\begin{aligned}
\sigma_\phi: M & \rightarrow P_F\\
x & \mapsto [(p, \phi(p))] \text{ for any }p 
\end{aligned}
$$

One can check (watch Lec 25) that $$\phi_{\sigma_\phi} = \phi$$ and $$\sigma_{\phi_\sigma} = \sigma$$ 

## Exterior Covariant Derivative of $\phi:P\rightarrow V$
**Only if** we set the fiber $F$ to be some vector space $V$, a (left) representation of $G$, then the 