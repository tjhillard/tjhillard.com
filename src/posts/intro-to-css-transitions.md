---
title: 'An Introduction to CSS Transitions ✨'
description: 'In this article you will learn what CSS Transitions are, how to define them, and best practices.'
date: '2019-08-12'
headerImage: 'falls_1.jpeg'
thumbnailImageUrl: 'https://storage.googleapis.com/tjhillard.com/thumbnails/css3.png'
live: false
---

**CSS Transitions** are a way to define how an element's property should transition from point A to point B. Let's say you want an element to change it's `background-color` when it is hovered over, that's easy to do in CSS.

```scss
// Point A
.foo {
  background-color: aqua;
}

// Point B
.foo:hover {
  background-color: salmon;
}
```

but by default, CSS applies these style changes _immediately_, and for obvious reasons, this can be jarring for an end user.

<iframe height="239" style="width: 100%;" scrolling="no" title="Introduction to CSS Transitions (1)" src="//codepen.io/tjhillard/embed/XWrmgoa/?height=239&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/XWrmgoa/'>Introduction to CSS Transitions (1)</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This is where a transition on the `background-color` can makes things smoother.

<iframe height="265" style="width: 100%;" scrolling="no" title="Introduction to CSS Transitions (2)" src="//codepen.io/tjhillard/embed/ZEzbJWa/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/ZEzbJWa/'>Introduction to CSS Transitions (2)</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## How to define a transition

A CSS Transition is made up of just 4 properties.

- A CSS property name to transition (default: `all`)
- A duration (default: `0s`)
- A timing function (default: `ease`)
- A delay for initiating the transition (default: `0s`)

The syntax for these 4 properties are:

```scss
.foo {
  transition-property: opacity;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  transition-delay: 50ms;
}
```

There is also a very convenient shorthand property available for transitions.

```scss
.foo {
  // property name | duration | timing function | delay
  transition: opacity 300ms ease-out 50ms;
}
```

### `transition-property`

The transition property is straight forward. It is simply the element's property you want to apply the transition on. Do you want an element to have a "fade" effect via it's `opacity` property? Then simplly define `opacity` as your `transition-property`.

It's important to note, it's default value is the keyword, `all`. This applies the transition to every property on an element. It is generally considered a bad practice to use `all` as it has negative performance implications and can result in undesired behavior when new styling is added later on.

### `transition-duration`

This one is also straight forward. How much time do you want the transition to take? Say your fade in should take one half a second, just set your `transition-duration` to `500ms` or `0.5s`. Time in CSS can either be in seconds (`s`) or milliseconds (`ms`).

### `transition-delay`

Just like `transition-duration`, `transition-delay` is a a Time value and determines how long the browser should wait before initiating the transition. For what it's worth, in my experience, I can't think of a time where I've needed to use this property, it is usually ommited.

### `transition-timing-function`

In real life, when things move, they don't instantaneously start or stop, they start slow and speed up or start fast and slow down, etc. Timing Functions, also commonly referred to as **Easing Functions**, allow us to simulate natural movement for our transitions.

This property takes a `<timing-function>` as its value. Here are the possible values:

### Functions

- `cubic-bezier`
- `steps`

### Keywords

- `ease`
- `ease-in`
- `ease-out`
- `ease-in-out`
- `linear`

## Cubic Bezier

The `cubic-bezier` function in CSS defines a cubic [Bezier Curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve), which determines your transition's progression over time.

A cubic bezier curve is made up of four control points: `p0`, `p1`, `p2`, & `p3` on a 1x1 matrix where `p0` is always `(0, 0)` and `p3` is always `(1, 1)`. The matrix's x-axis determines time and the y-axis determines progression.

![Cubic Bezier Curve](https://www.quackit.com/pix/stock/cubic-bezier.gif)

The function takes the `p1` and `p2` (x, y) coordinates in the following syntax:

```scss
cubic-bezier(p1x, p1y, p2x, p2y);
```

Let's take the following example:

```scss
cubic-bezier(0.4, 0, 0, 1.33);
```

We have the following points making up our example cubic Bezier Curve.

- `p0`: (0, 0)
- `p1`: (0.4, 0)
- `p2`: (0, 1.33)
- `p3`: (1, 1)

The following `cubic-bezier` values are applied to the below Codepen.

<iframe height="398" style="width: 100%;" scrolling="no" title="Ease In" src="//codepen.io/tjhillard/embed/QWLEarb/?height=398&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/QWLEarb/'>Ease In</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Notice how the balls travels slighlty further than where you clicked and then corrects as if it actually has momemntum? Pretty cool, right? This is because even though the context of a cubic bezier curve is a 1x1 matrix, `p1` and `p2` values are not required to be within 0 and 1.

Feel free to open up the Codepen and play around with how different values behave. [This site](https://cubic-bezier.com) is also a helpful resource for learning.

If you're interested having deeper knowledge on how bezier curves work beneath the surface, I highly recommend watching this awesome video by [@pnowelldesign](https://twitter.com/pnowelldesign).

<iframe src="https://player.vimeo.com/video/106757336?color=7d90ff&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

### Steps

`steps` is a timing function that enables you to split your transition up into a defined amount of equal-duration segments.

```scss
steps(number_of_steps, jumpterm);
```

The primary `jumpterm` values are:

- `jump-start` (alias: `start`)
- `jump-end` (alias: `end`)

`jump-start` can be used when you want your first "jump" or step to begin at the start of the each step interval. Take a look at this example:

```scss
transition: all 0.6s steps(3, start);
```

<iframe height="265" style="width: 100%;" scrolling="no" title="Steps" src="//codepen.io/tjhillard/embed/BaBzxNG/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/BaBzxNG/'>Steps</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

See how the ball starts to move as soon as you click? That's because of `jump-start`.

`jump-end` is used when you want your first jump to occur at the end of each step interval.

```scss
transition: all 0.6s steps(3, end);
```

<iframe height="265" style="width: 100%;" scrolling="no" title="Steps (jump-end)" src="//codepen.io/tjhillard/embed/pozbVjz/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/pozbVjz/'>Steps (jump-end)</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Notice how there is a slight delay before the first jump? That's because `jump-end` is telling the transition to "jump" at the end of each step interval.

We've now made it all through the `cubic-bezier` and `steps` functions, which are what I consider to be the most complicated aspects of getting started with CSS Transitions. If you're still a little confused about those, be sure to check out the additional resources section at the bottom.

### Ease

`ease`, the default timing function, is the first of the timing functions we'll talk about. It is equivilent to:

```scss
cubic-bezier(0.25, 0.1, 0.25, 1.0);
```

A transition with `ease` will start at a medium speed, speed up in the middle, and significantly slow down again at the end.

<iframe height="265" style="width: 100%;" scrolling="no" title="Ease" src="//codepen.io/tjhillard/embed/NWKrMNm/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/NWKrMNm/'>Ease</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Ease In

`ease-in` is equivilent to:

```scss
cubic-bezier(0.42, 0, 1.0, 1.0);
```

A transition with `ease-in` starts off slow and speeds up until completion.

<iframe height="265" style="width: 100%;" scrolling="no" title="Ease In" src="//codepen.io/tjhillard/embed/dybXepJ/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/dybXepJ/'>Ease In</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Ease Out

`ease-out` is equivilent to:

```scss
cubic-bezier(0, 0, 0.58, 1.0);
```

A transition with `ease-out` starts starts off fast and slows down approaching completion.

<iframe height="265" style="width: 100%;" scrolling="no" title="Ease Out" src="//codepen.io/tjhillard/embed/PoYzeWx/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/PoYzeWx/'>Ease Out</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Ease In-Out

`ease-in-out` is equivilent to:

```scss
cubic-bezier(0.42, 0, 0.58, 1.0)
```

A transition with `ease-in-out` starts off slow, gets faster in the middle, and slows down approaching completion.

<iframe height="265" style="width: 100%;" scrolling="no" title="Ease In Out" src="//codepen.io/tjhillard/embed/LYPZmWO/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/LYPZmWO/'>Ease In Out</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Linear

Lastly, `linear` is equivilent to:

```scss
cubic-bezier(0.0, 0.0, 1.0, 1.0);
```

A transition with `linear` progresses from start to finish at the exact same speed.

<iframe height="265" style="width: 100%;" scrolling="no" title="Linear" src="//codepen.io/tjhillard/embed/vYBKjxr/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/vYBKjxr/'>Linear</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Best Practices

Now that we've gone over all of the different timing functions and what they do, let's go over some of the best practices that are vital to know when adding transitions to your application.

- Use `ease-out` for entering elements
- Use `ease-in` for exiting elements
- Use `linear` for opacity and background changes
- Use `ease-in-out` for moving from one position to another
- When in doubt, use `ease-in-out`

What about speeds? For the majority of transitions, it's best to stay within `100ms` and `500ms`. Transitions that are too fast can be potentially even more jarring to a user than no transition at all, and transitions that are too slow can be seriously annoying. I think we've all seen those sites, usually a marketing site or fancy landing page, with dreadfully slow transitions. Don't be that site.

> Well implemented transitions are like good bassists. If they're doing their job right, the average person doesn't even really notice them.

In my projects, I usually have 5 speed variables defined in my base CSS and aim to only use these for all of my transitions in order to enforce consistency.

```scss
--speed-exra-fast: 100ms;
--speed-fast: 200ms;
--speed-normal: 300ms;
--speed-slow: 400ms;
--speed-extra-slow: 500ms;

.foo {
  transition: opacity var(--speed-fast) linear;
}
```

The three biggest things to remember when trying to choose the right speed:

- The **larger** the object, the **slower** the transition should be
- The **further** the object needs to move, the **slower** the transition should be
- If you think the speed you chose is too slow, it probably is

For more best practices and examples, I highly recommend checking out [Material Design's motion documentation](https://material.io/design/motion/speed.html#duration).

## Conclusion

Alright, we made it to the end! 🎉 By now, you should pretty much know 99% of everything there is to know when it comes to implementing basic CSS Transitions. If you have any questions or want to chat about what we've discussed here, please feel free to reach out to me on [Twitter](http://twitter.com/_tjhillard) with a mention or DM.

To conclude, this is my first real blog post on my new site, if you any feedback, I'd really love to hear it. Please send me a DM on [Twitter](http://twitter.com/_tjhillard) or shoot me an [email](mailto:tjhillard@gmail.com).

## Additional Resources

- https://www.w3.org/TR/css-transitions-1/
- https://developer.mozilla.org/en-US/docs/Web/CSS/transition
- https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function
