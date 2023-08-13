---
layout: post
title: "Shower Monologue: Symmetry"
categories: [Physics, Shower Monologue]
---
This is a (maximally supersymmetric) extension of my shower thoughts. It is mainly meant for me to sort out my intuition and deepen my understanding by thinking out loud, usually seeded my an epiphany I have in the shower.

Today's shower epiphany: If I think of gravity as a gauge theory it might lead me to motivate spin structure.

Let's start way before that. When we say a theory is (3D) rotationally symmetric, we mean that the action is invariant under $SO(3)$. In the context of classical mechanics, this means that the path $\vec{r}(t)$, when rotated to become $\vec{r}'(t)$, doesn’t change the action. We like symmetries because they give rise to conservation laws that might not be obvious from Euler Lagrange equation of motion, and as we know from high school physics, conservation laws are super useful. 

If we add to the Lagrangian a spherically symmetric potential $V(\vec{r})=V(\vert\vec{r}\vert)$, we can say that this function transforms like a scalar under rotations, meaning that $(RV)(\vec{r}) = V(R^{-1} \vec{r})$ under rotation $R\in SO(3)$. Bringing this idea further, we can have vector fields $\vec{E}(\vec{r}) = \frac{kq}{\vert \vec{r}\vert^3} \vec{r}$, that transforms like vectors under $SO(3)$, meaning $(R\vec{E})(\vec{r}) = R[ \vec{E}(R^{-1}\vec{r})]$ with $R \in SO(3)$ being a 3D matrix. If we denote the matrix $R \in SO(3)$ as ${R^i}_j$, and $\vec{E}$ as $E^j$, then we can deduce the type of an object from the indices (upper or lower) it carries.

Of course, this can be generalized into an object that transforms like a general representation under a general Lie group $G$, which we often see as 
$[D(\Lambda) \Psi] (x) = R(\Lambda) [\Psi(\Lambda^{-1} x)]$
. Given a representation $R$ on the field's target space, we can define a representation on the field's function space. This is the mathematical behind-the-scenes of "transforming a field".

We now move from our discussion of $SO(3)$ to a discussion of Lorentz group $SO^+(3,1)$. To form a theory that is invariant under Lorentz, one has to form Lorentz scalars. I talked more about Special Relativity in a talk [here](https://tch1001.github.io/2023/03/29/special-relativity.html). To form Lorentz scalars, we contract indices. Examples would be $F_{\mu\nu}F^{\mu\nu}, A_\mu dx^\mu, \bar\psi \gamma^\mu \partial_\mu \psi$. Even though $\psi$ looks like it doesn't carry any index, it actually secretly carries spinor indices. If we were to talk sections, $F\in \Gamma(T^{(2,0)} M)$, the (2,0) tensor bundle (nuance: technically saying "tangent space" $TM$ implies manifold structure, which is more structure than merely a representation of the Lorentz group), and $\psi \in \Gamma(K^{1/2} \oplus \bar K^{1/2})$, the [Dirac spinor](https://en.wikipedia.org/wiki/Bispinor) bundle consists of Weyl chiral $K^{1/2}$ and antichiral $\bar K^{1/2}$ representations of Lorentz group. $\bar \psi$ and $\psi$ have 4 components (2 for each chirality), and  $\gamma$ is a 4x4 matrix, so spelling out $\bar\psi \gamma^\mu \partial_\mu \psi$ would be 
$\bar\psi^{\hat \alpha} \gamma_{\ \hat \alpha}^{\mu\ \hat \beta} \partial_\mu \psi_{\hat\beta}$ 

($\hat\alpha$ is [Van-der Waarden notation](https://en.wikipedia.org/wiki/Van_der_Waerden_notation#Hatted_indices)). I don't think $\hat \alpha$ is popular notation though, because there isn't a natural metric to lower or raise these indices, unlike chiral spinor indices $\epsilon_{\alpha\beta}$ or tangent space indices $g_{\mu\nu}$.

