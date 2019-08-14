---
title: 'An Introduction to CSS Transitions ✨'
description: "In this article you will learn what CSS Transitions are, what they aren't, practical real-world examples, and best practices."
date: '2019-08-12'
headerImage: 'falls_1.jpeg'
thumbnailImageUrl: 'https://storage.googleapis.com/tjhillard.com/thumbnails/css3.png'
live: false
---

**CSS Transitions** are a way to define how an element's property should transition from point A to point B. Let's say you want an element to change it's `background-color` when it hovered, that easy to do.

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

This is where a transition can makes things smoother.

<iframe height="265" style="width: 100%;" scrolling="no" title="Introduction to CSS Transitions (2)" src="//codepen.io/tjhillard/embed/ZEzbJWa/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tjhillard/pen/ZEzbJWa/'>Introduction to CSS Transitions (2)</a> by TJ Hillard
  (<a href='https://codepen.io/tjhillard'>@tjhillard</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Now, before we dive into the how to actually implement transitions, it is important to clarify a couple definitions.

**Transition** (noun)

> The process or a period of changing from one state or condition to another.

**Animation** (noun)

> The state of being full of life or vigor; liveliness.

A pretty common thing I hear, is people interchangeably using "animation" to mean "transition" and vice versa. It is important to understand that, although similar, they are not the same concept, generally, and within the context of web development. An animation is defined and then programatically initiated via JavaScript. It can be started, stopped, paused, looped, etc. Wheras a transition is defined, and that's it, the browser handles the rest. An element's state changes and the defined transitions determines how state changes.

Alright, let's move on the to fun stuff!

## How to define a transition

A CSS Transition is made up of just 4 properties.

- A CSS property name to transition (default: `all`)
- A duration for the transition (default: `0s`)
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

Don't worry too much about the right-hand values in these examples, we'll dig into those here soon. There is also a very convenient shorthand available for transitions.

```scss
.foo {
  // property name | duration | timing function | delay
  transition: opacity 300ms ease-out 50ms;
}
```

### Transition Property

The transition property is straight forward. It is simply the element's property you want to apply the transition on. Do you want an element to have a "fade" effect via it's `opacity` property? Then simplly define `opacity` as your `transition-property`. It's important to note, it's default value is the special keyworkd, `all`. This applies the transition to every property on an element. It is generally considered a bad practice to use `all` as it has negative performance implications and can result in undesired behavior when new styling is added to an element.

### Transition Duration

This one is also straight forward. How much time do you want the transition to take? Say your fade in should take one half a second, just set your `transition-duration` to `500ms` or `0.5s`. Time in CSS can either be in seconds (`s`) or milliseconds (`ms`).

### Transition Delay

Just like `transition-duration`, `transition-delay` is a a Time value and determines how long the browser should wait before initiating the transition. For what it's worth, in my experience, I can't think of a time where I've needed to use this property, it is usually ommited.

### Transition Timing Function

Intentionally saved for last, this one of the four has the most to sink your teeth into and learn. This argument, also commonly referred to as an "Easing Function", takes a `<timing-function>` type as its value. There are several possible values, some are plain `keywords`, and others `functions`.

### Functions

- `cubic-bezier`
- `steps`

### Keywords

- `ease`
- `ease-in`
- `ease-out`
- `ease-in-out`
- `linear`
- `step-start`
- `step-end`

## Cubic Bezier
