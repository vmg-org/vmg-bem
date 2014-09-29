# VMG generator of html and css files

Using https://github.com/bem/project-stub.git

## Usage

**Start the server:**

```bash
bem server # bem server -p 8080 -v info|silly|debug|verbose|warn|error
```

> **hint:** execute the above commands in your terminal

Now that `bem server ` is running, check it out:

    navigate to: http://localhost:8080/desktop.bundles/index/index.html

Stopping the server is also easy, pressing `Ctrl` + `C` while the terminal is your active window will stop the server.

**Add block:**

    bem create -l desktop.blocks -b newBlock

**Add page:**

    bem create -l desktop.bundles -b page

>  **hint:** you can add aliases for super easy use

<pre><code class="lasso">echo "alias 'bemblock'='bem create -l desktop.blocks -b'" >> ~/.bashrc
echo "alias 'bempage'='bem create -l desktop.bundles -b'" >> ~/.bashrc
</code></pre>

## Docs

- [Full stack quick start](http://bem.info/articles/start-with-project-stub/)
- [Tutorial on BEMHTML](http://bem.info/libs/bem-core/2.0.0/bemhtml/reference/)
- [Tutorial on bem-js](http://bem.info/tutorials/bem-js-tutorial/)
- [Commands bem-tools](http://bem.info/tools/bem/bem-tools/commands/)

## Notes

A bem-grid cloned from a repo 1.0.0-beta to common.blocks.
Variables has been changed.
Bem-grid uses js to check flex support of your browser; 
@todo #44! move this logic to modernizr
