# Pure CSS Tsumiki logo

[http://www.tsumikiinc.com/](http://www.tsumikiinc.com/)

## Demo

[https://tsumikiinc.github.io/css-tsumiki-logo/demo/](https://tsumikiinc.github.io/css-tsumiki-logo/demo/)


## Usage

### Markup

```html
<div class="tsumiki-logo">
  <div class="cube cube-first"></div>
  <div class="cube cube-second"></div>
  <div class="cube cube-third"></div>
</div>
```

### Stylesheet language

Using **[Stylus](http://learnboost.github.io/stylus/)** or **[Sass](http://sass-lang.com/)** .

### Specifies the size


* Stylus

```
// Size
cube-size = 128px
```

* Sass

```
// Size
$cube-size: 128px;
```

## Grunt

Using Stylus.

```
grunt st
```

Using Sass.

```
grunt sa
```

## Support

Modern browser and IE10+

## License

© Tsumiki inc.