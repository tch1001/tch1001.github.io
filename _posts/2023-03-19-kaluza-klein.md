---
layout: post
title: Kaluza Klein Compactifications (WIP)
categories: [Physics, QFT, String Theory]
---

In this blog, we will use tilde $\tilde{g}$ to represent a quantity in $D$ dimensions, while the symbol without tilde $g$ represents a quantity in $D-1$ dimensions.

Suppose we have a D-dimensional metric $$\tilde{g}_{\mu\nu} dX^\mu \otimes dX^\nu$$.
We define $$ e^\sigma \equiv \sqrt{\tilde{g}_{D-1,D-1}}$$ and $$A_\mu \equiv \frac{\tilde{g}_{D-1,\mu}}{\tilde{g}_{D-1,D-1}} = \frac{\tilde{g}_{D-1,\mu}}{e^{2\sigma}}$$. (In some contexts such as [wiki](https://en.wikipedia.org/wiki/Kaluza%E2%80%93Klein_theory), you might see them write $$\phi^2$$ instead of $$e^{2\sigma}$$. Both are interchangeable because they are both positive quantities.)

If we perform a change of basis $$dX\mapsto dY$$ where $$dY^i = dX^i$$ for $$0\leq i \leq D-2$$ and

$$dY^{D-1} = dX^{D-1} + \sum_{\mu=0}^{D-2} A_\mu dX^\mu$$

We can write the metric as

$$
\begin{aligned}
\tilde{g} & = \sum_{\mu,\nu=0}^{D-1} \tilde{g}_{\mu \nu} d X^\mu \otimes d X^\nu \\
& = \sum_{\mu, \nu=0}^{D-2} \tilde{g}_{\mu \nu} d X^\mu \otimes d X^\nu \\
& +\sum_{\mu=0}^{D-2} \tilde{g}_{D-1, \mu} d X^{D-1} \otimes d X^\mu  \\
& +\sum_{\mu=0}^{D-2} \tilde{g}_{\mu, D-1} d X^\mu \otimes d X^{D-1} \\
& +\tilde{g}_{D-1,D-1} d X^{D-1} \otimes d X^{D-1}
\end{aligned}
$$

where we have separated the sum over the last dimension $$\mu=D-1$$. Now we can factorise the metric into a block diagonal form.

$$
\begin{aligned}
\tilde{g}&=\sum_{\mu, \nu=0}^{D-2} \left(\tilde{g}_{\mu \nu}- e^{2\sigma} A_{\mu }A_\nu\right) d X^\mu \otimes d X^\nu \\
& +\sum_{\mu, \nu=0}^{D-2} e^{2\sigma}  \left(A_\mu d X^\mu\right) \otimes\left(A_\nu d X^\nu\right) \\
& +\sum_{\mu, \nu=0}^{D-2} e^{2\sigma} A_\mu\left(d X^\mu \otimes d X^{D-1}+d X^{D-1} \otimes d X^\mu\right) \\
& +\sum_{\mu, \nu=0}^{D-2} e^{2 \sigma} d X^{D-1} \otimes d X^{D-1}\\
&= \sum_{\mu, \nu=0}^{D-2} G_{\mu\nu} d X^\mu \otimes d X^\nu + e^{2\sigma} \left( dX^{D-1} + \sum_{\mu=0}^{D-2} A_\mu dX^\mu \right)^2\\
&= \sum_{\mu, \nu=0}^{D-1} \tilde{G}_{\mu\nu} d Y^\mu \otimes d Y^\nu
\end{aligned}
$$

where we defined $$G_{\mu\nu} \equiv \tilde{g}_{\mu \nu}-e^{2\sigma} A_{\mu }A_\nu$$, and this $$G$$ is interpreted as a metric on a spacetime of one dimension lower. Then $$\tilde{G} \equiv \text{diag}(G, e^{2\sigma})$$ is a block diagonal matrix with one $$(D-1)\times (D-1)$$ block being $$G$$ and one $$1\times 1$$ block being $$e^{2\sigma}$$.

One can see easily that $$\text{det } \tilde{g} = \text{det }  \tilde{G} = e^{2\sigma} \text{det } G$$ in this new basis. That was the main motivation for "completing the square".

We are interested in expressing the Ricci scalar of the $$D$$ dimensional theory in terms of the $$D-1$$ dimensional theory + extra terms. We will see that the extra terms resemble Electromagnetism.

(To be continued...)

## References
[Good lecture by Ruth Gregory](https://youtu.be/zWNqLSTBRSk)

[Good lecture by Alex Flournoy](https://youtu.be/tk_rdKpWj50)
