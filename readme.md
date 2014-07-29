
# steveandbritt.com

A modern, wedding microsite using [Grunt](http://gruntjs.com), [Assemble](http://assemble.io), [Sass](http://sass-lang.com), [Bourbon](http://bourbon.io), and [Amazon S3](http://aws.amazon.com/s3/).

## Usage

### Development

The default `grunt` command will compile the `.hbs` and `.scss` files, spool up a server on port `10414` (the big day), and run a `watch` task to automatically refresh the page if you are running [LiveReload](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

```
grunt
```

### Deployment

In order to deploy to Amazon S3, you must copy and rename the `aws.sample.json` file to `aws.json` and update each value with your account information.

```
{
    "key": "ABCDEFGHIJKLMNOPQRST",
    "secret": "aBcDeFgHiJkLmNoPqRsTuVwXyZz/0123456789+/",
    "bucket": "your-bucket-name"
}
```

Assuming your `aws.json` is properly configured, run the deploy task:

```
grunt deploy
```

## Dependencies

Read the docs for each of these to better understand how it all works together especially if you intend to use this repo to create your own microsite.

- [grunt](https://github.com/gruntjs/grunt)
- [grunt-assemble](https://github.com/assemble/assemble)
- [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-newer](https://github.com/tschaub/grunt-newer)
- [grunt-sass](https://github.com/sindresorhus/grunt-sass)
- [grunt-s3-sync](https://github.com/smallmultiples/grunt-s3-sync)
- [node-bourbon](https://github.com/lacroixdesign/node-bourbon)

## Support

Need help? Have questions?

Hit me up on Twitter [@matthewcyan](https://twitter.com/matthewcyan)
